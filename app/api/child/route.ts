import { payloadRole, verifyToken } from "@/lib/jwt";
import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

// Получение информации о ребенке с проверкой токена
export async function GET(req: Request) {
  const authorizationHeader = req.headers.get("Authorization");
  if (!authorizationHeader?.startsWith("Bearer ")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Получаем токен и проверяем его
    const token = authorizationHeader.substring("Bearer ".length);
    const payload = await verifyToken(token);
    if (payload.role !== payloadRole.child) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Получаем информацию о ребенке
    const child = await prisma.child.findFirst({
      where: {
        telegram_id: payload.telegramId,
      },
      include: {
        tasks: {
          include: {
            taskCompletions: true,
          },
        },
      },
    });

    if (!child) {
      return NextResponse.json({ error: "Child not found" }, { status: 404 });
    }

    return NextResponse.json(child, { status: 200 });
  } catch (error) {
    console.error("[GET /api/child/[id]]", error);
    return NextResponse.json({ message: `Internal server error` }, { status: 500 });
  }
}

export async function PUT({ params, body }: { params: { id: string }; body: { name: string } }) {
  try {
    const id = Number(params.id);

    const user = await prisma.child.update({
      where: {
        telegram_id: id,
      },
      data: {
        name: body.name,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error("[PUT /api/user/[id]]", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
