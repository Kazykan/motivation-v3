import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: Promise<{ id: string }>;
  }
) {
  try {
    const telegram_id = (await params).id;
    const parsedId = parseInt(telegram_id);

    const parent = await prisma.parent.findFirst({
      where: {
        telegram_id: parsedId,
      },
    });

    if (!parent) {
      return NextResponse.json({ error: "Parent not found" }, { status: 404 });
    }

    return NextResponse.json(parent, { status: 200 });
  } catch (error) {
    console.error("[GET /api/parent/[id]]", error);
    return NextResponse.json({ message: `Internal server error` }, { status: 500 });
  }
}

export async function PUT({ params, body }: { params: { id: string }; body: { name: string } }) {
  try {
    const id = Number(params.id);

    const user = await prisma.parent.update({
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