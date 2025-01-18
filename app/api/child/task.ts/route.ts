import { TaskWithCompletions } from "@/lib/api/api-types";
import { verifyToken } from "@/lib/jwt";
import { prisma } from "@/prisma/prisma-client";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest): Promise<NextResponse<TaskWithCompletions>> {
  try {
    const searchParams = request.nextUrl.searchParams;
    const telegram_id = searchParams.get("telegram_id");
    const start = new Date(searchParams.get("start") as string);
    const end = new Date(searchParams.get("end") as string);

    if (!telegram_id || !start || !end) {
      return NextResponse.json({ exists: false, message: "Invalid data: telegram_id, start, end", status: 400 });
    }

    const cookieStore = cookies();
    const token = (await cookieStore).get("token")?.value;

    if (!token) {
      return NextResponse.json({ exists: false, message: "Unauthorized", status: 401 });
    } else {
      try {
        await verifyToken(token);
      } catch (error) {
        return NextResponse.json({ exists: false, message: "Unauthorized", status: 401 });
      }
    }

    const childTasks = await prisma.childUser.findUnique({
      where: {
        telegram_id: parseInt(telegram_id),
      },
      include: {
        tasks: true,
        taskCompletions: {
          where: {
            completionDate: {
              gte: start,
              lte: end,
            },
          },
        },
      },
    });

    if (childTasks) {
      return NextResponse.json({ exists: true, TaskWithCompletions: childTasks, status: 200 });
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
