import { TaskWithCompletionsResponse } from "@/lib/api/api-types";
import { prisma } from "@/prisma/prisma-client";
import { Task } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

// Функция для проверки и преобразования параметров
const validateAndParseParams = (searchParams: URLSearchParams) => {
  const telegram_id_str = searchParams.get("telegram_id");
  const startStr = searchParams.get("start");
  const endStr = searchParams.get("end");

  if (!telegram_id_str || !startStr || !endStr) {
    return { error: "Invalid telegram_id, start, end", status: 400 };
  }

  const telegram_id = parseInt(telegram_id_str);
  if (isNaN(telegram_id)) {
    return { error: "Invalid telegram_id: telegram_id must be a number", status: 400 };
  }

  const start = new Date(startStr);
  const end = new Date(endStr);

  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    return { error: "Invalid date format for start or end", status: 400 };
  }

  return { telegram_id, start, end };
};

export async function GET(request: NextRequest): Promise<NextResponse<TaskWithCompletionsResponse>> {
  try {
    const searchParams = request.nextUrl.searchParams;
    const params = validateAndParseParams(searchParams);

    if ("error" in params) {
      return NextResponse.json({ exists: false, message: params.error, status: params.status });
    }
    const { telegram_id, start, end } = params;
    // const cookieStore = cookies();
    // const token = (await cookieStore).get("token")?.value;

    // if (!token) {
    //   return NextResponse.json({ exists: false, message: "Unauthorized", status: 401 });
    // } else {
    //   try {
    //     await verifyToken(token);
    //   } catch (error) {
    //     return NextResponse.json({ exists: false, message: `Unauthorized ${error}`, status: 401 });
    //   }
    // }

    const childTasks = await prisma.childUser.findUnique({
      where: {
        telegram_id: telegram_id,
      },
      select: {
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

    if (!childTasks) {
      return NextResponse.json({ exists: false, message: "User not found", status: 404 });
    }

    const tasksWithCompletions =
      childTasks?.tasks.map((task: Task) => ({
        ...task,
        taskCompletions: childTasks.taskCompletions.filter((completion) => completion.taskId === task.id),
      })) ?? [];
    return NextResponse.json({ exists: true, task: tasksWithCompletions, status: 200 });
  } catch (error) {
    console.error("Error checking parent:", error);
    return NextResponse.json({ exists: false, message: "Internal server error", status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
