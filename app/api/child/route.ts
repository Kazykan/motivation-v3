import { ChildCheckResponse } from "@/lib/api/api-types";
import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest): Promise<NextResponse<ChildCheckResponse>> {
  try {
    const searchParams = request.nextUrl.searchParams;
    const telegram_id = searchParams.get("telegram_id");

    if (!telegram_id) {
      return NextResponse.json({ exists: false, message: "Invalid telegramId", status: 400 });
    }

    const childUser = await prisma.childUser.findUnique({
      where: {
        telegram_id: parseInt(telegram_id),
      },
    });

    if (childUser) {
      return NextResponse.json({ exists: true, childUser: childUser, status: 200 });
    } else {
      return NextResponse.json({ exists: false, status: 200 });
    }
  } catch (error) {
    console.error("Error checking parent:", error);
    return NextResponse.json({ exists: false, message: "Internal server error", status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
