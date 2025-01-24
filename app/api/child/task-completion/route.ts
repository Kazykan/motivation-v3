import { TaskCompletionResponse } from "@/lib/api/api-types";
import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest): Promise<NextResponse<TaskCompletionResponse>> {
  try {
    const searchParams = request.nextUrl.searchParams;
    const task_id = searchParams.get("task_id");
    const start = new Date(searchParams.get("start") as string);
    const end = new Date(searchParams.get("end") as string);

    if (!task_id || !start || !end) {
      return NextResponse.json({ exists: false, message: "Invalid data: telegram_id, start, end", status: 400 });
    }

    const taskCompletion = await prisma.taskCompletion.findMany({
      where: {
        taskId: parseInt(task_id),
        completionDate: {
          gte: start,
          lte: end,
        },
      },
    });

    if (taskCompletion) {
      return NextResponse.json({ exists: true, taskCompletion: taskCompletion, status: 200 });
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

export async function POST(request: NextRequest): Promise<NextResponse<TaskCompletionResponse>> {
  try {
    const { taskId, userId, completionDate } = await request.json();

    if (!taskId || !userId || !completionDate) {
      return NextResponse.json({
        exists: false,
        message: "Invalid taskId, userId, isCompleted are required",
        status: 400,
      });
    }

    const parsedCompletionDate = new Date(completionDate);

    const newTaskCompletion = await prisma.taskCompletion.create({
      data: {
        completionDate: parsedCompletionDate,
        taskId: parseInt(taskId),
        userId: parseInt(userId),
      },
    });

    return NextResponse.json({ exists: true, taskCompletion: [newTaskCompletion], status: 201 });
  } catch (error) {
    console.error("Error creating task completion:", error);
    return NextResponse.json({ exists: false, message: "Internal server error", status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

export async function DELETE(request: NextRequest): Promise<NextResponse> {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({
        exists: false,
        message: "Invalid id is required",
        status: 400,
      });
    }

    await prisma.taskCompletion.delete({
      where: {
        id: parseInt(id),
      },
    });

    // Return 204 with an empty body
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    // Обрабатываем ошибку Prisma, если запись не найдена
    if (error instanceof Error && (error as any).code === "P2025") { // eslint-disable-line @typescript-eslint/no-explicit-any
      console.error("Ошибка удаления записи о выполнении задачи: Запись не найдена", error);
      return NextResponse.json({ error: "Запись о выполнении задачи не найдена" }, { status: 404 });
    } else if (
      error instanceof Error &&
      error.message.includes("The payload argument must be of type object. Received null")
    ) {
      // Обрабатываем ошибку с `null` payload, указывающую на проблему с запросом к базе данных.
      console.error("Ошибка удаления записи о выполнении задачи из-за неверных данных:", error);
      return NextResponse.json({ error: "Запись о выполнении задачи не найдена" }, { status: 404 });
    } else {
      console.error("Ошибка удаления записи о выполнении задачи:", error);
      return NextResponse.json({ error: "Внутренняя ошибка сервера" }, { status: 500 });
    }
  } finally {
    await prisma.$disconnect();
  }
}
