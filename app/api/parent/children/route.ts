import { ParentResponseWithChildren, ParentUserResponse } from "@/lib/api/api-types";
import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest): Promise<NextResponse<ParentResponseWithChildren>> {
  try {
    const searchParams = request.nextUrl.searchParams;
    const telegram_id = searchParams.get("telegram_id");

    if (!telegram_id) {
      return NextResponse.json({ exists: false, message: "Invalid telegramId", status: 400 });
    }

    const parentUser = await prisma.parentUser.findUnique({
      where: {
        telegram_id: telegram_id,
      },
      include: {
        children: {
          include: {
            child: {
              select: {
                id: true,
                name: true,
                telegram_id: true,
                gender: true,
                photo_url: true,
                createdAt: true,
                updatedAt: true,
              },
            },
          },
        },
      },
    });

    if (parentUser) {
      const children = parentUser.children.map((parentChild) => parentChild.child);
      const parentUserResponse: ParentUserResponse = {
        ...parentUser,
        children: children,
      };
      return NextResponse.json({ exists: true, parentUser: parentUserResponse, status: 200 });
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
