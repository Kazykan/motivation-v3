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

    return NextResponse.json({ exists: true, taskCompletion: newTaskCompletion, status: 201 });
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

    return NextResponse.json(null, { status: 204 });
  } catch (error) {
    console.error("Error deleting task completion:", error);
    if (error instanceof Error && error.message.includes("Record to delete does not exist")) {
      return NextResponse.json({ error: "Task completion not found" }, { status: 404 });
    }
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
