import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const telegram_id = searchParams.get("telegram_id");

    if (!telegram_id) {
      return NextResponse.json({ message: "Invalid telegramId" }, { status: 400 });
    }

    const parentUser = await prisma.parentUser.findUnique({
      where: {
        telegram_id: parseInt(telegram_id),
      },
    });

    if (parentUser) {
      return NextResponse.json({ exists: true, parentUser });
    } else {
      return NextResponse.json({ exists: false });
    }
  } catch (error) {
    console.error("Error checking parent:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
