import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    console.log("Received params:", params);
    if (!params) {
      return NextResponse.json({ error: "Params object is missing" }, { status: 400 });
    }
    const id = Number(params.id);

    const user = await prisma.user.findFirst({
      where: {
        telegram_id: id,
      },
    });

    if (!user) {
      return {
        status: 404,
        body: {
          error: "User not found",
        },
      };
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error("[GET /api/user/[id]]", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}

export async function PUT({ params, body }: { params: { id: string }; body: { name: string } }) {
  try {
    const id = Number(params.id);

    const user = await prisma.user.update({
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
