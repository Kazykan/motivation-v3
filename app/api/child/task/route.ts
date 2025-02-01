import { TaskResponse, TaskWithCompletionsResponse } from "@/lib/api/api-types";
import { TaskCreateSchema, TaskUpdateSchema } from "@/lib/types";
import { prisma } from "@/prisma/prisma-client";
import { DayOfWeek, Task, TaskCompletion, TaskType } from "@/prisma/prisma/client";
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
        telegram_id: String(telegram_id),
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
        taskCompletions: childTasks.taskCompletions.filter(
          (completion: TaskCompletion) => completion.taskId === task.id
        ),
      })) ?? [];
    return NextResponse.json({ exists: true, task: tasksWithCompletions, status: 200 });
  } catch (error) {
    console.error("Error checking parent:", error);
    return NextResponse.json({ exists: false, message: "Internal server error", status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

export async function POST(req: NextRequest): Promise<NextResponse<TaskResponse>> {
  try {
    const body = await req.json();
    const validationResult = TaskCreateSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json({
        exists: false,
        errors: validationResult.error.issues,
        message: "Ошибка валидации данных",
        status: 400,
      });
    }

    const taskData = validationResult.data;

    const createdTask = await prisma.task.create({
      data: {
        title: taskData.title,
        description: taskData.description,
        type: taskData.type as TaskType,
        dayOfWeek: taskData.type === "DAILY" ? (taskData.dayOfWeek as DayOfWeek[]) : [],
        frequency: taskData.type === "FLEXIBLE" ? taskData.frequency : null,
        reward: taskData.reward,
        childUserId: taskData.childUserId,
        updatedByUserId: taskData.updatedByUserId,
      },
    });

    return NextResponse.json({ exists: true, message: "Задание создано", task: createdTask, status: 201 });
  } catch (error) {
    console.error("Error creating task:", error);
    return NextResponse.json({ exists: false, message: "Internal server error", status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

/**
 * Обновление задания по id
 *
 * @example
 * Пример использования функции для создания родителя без приглашения
 * PATCH /api/child/task?id=1
 * Content-Type: application/json
 *
 * {
 *    "title": "Новое название задачи",
 *    "description": "Новое описание задачи",
 *    "reward": 150
 * }
 */
export async function PATCH(req: NextRequest): Promise<NextResponse<TaskResponse>> {
  try {
    const body = await req.json();
    const id = req.nextUrl.searchParams.get("id");

    if (!id) {
      return NextResponse.json({
        exists: false,
        message: "Необходимо указать ID задачи",
        status: 400,
      });
    }
    const taskId = Number(id);
    if (isNaN(taskId)) {
      return NextResponse.json({
        exists: false,
        message: "Некорректный ID задачи",
        status: 400,
      });
    }

    const validationResult = TaskUpdateSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json({
        exists: false,
        errors: validationResult.error.issues,
        message: "Ошибка валидации данных",
        status: 400,
      });
    }

    const taskData = validationResult.data;

    const updatedTask = await prisma.task.update({
      where: {
        id: taskId,
      },
      data: {
        title: taskData.title,
        description: taskData.description,
        type: taskData.type as TaskType,
        dayOfWeek: taskData.type === "DAILY" ? (taskData.dayOfWeek as DayOfWeek[]) : undefined,
        frequency: taskData.type === "FLEXIBLE" ? taskData.frequency : undefined,
        reward: taskData.reward,
        childUserId: taskData.childUserId,
        updatedByUserId: taskData.updatedByUserId,
      },
    });

    return NextResponse.json({ exists: true, message: "Задание обновлено", task: updatedTask, status: 200 });
  } catch (error) {
    console.error("Error updating task:", error);
    if (error instanceof Error && error.message.includes("Record to update not found.")) {
      return NextResponse.json({ exists: false, message: "Задание с указанным ID не найдено", status: 404 });
    }
    return NextResponse.json({ exists: false, message: "Internal server error", status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

/**
 * Удаление задания по id
 *
 * @example
 * Пример использования функции для удаления задания
 * DELETE /api/child/task?id=1
 * Content-Type: application/json
 */
export async function DELETE(req: NextRequest): Promise<NextResponse<TaskResponse>> {
  try {
    const id = req.nextUrl.searchParams.get("id");

    if (!id) {
      return NextResponse.json({
        exists: false,
        message: "Необходимо указать ID задачи",
        status: 400,
      });
    }
    const taskId = Number(id);
    if (isNaN(taskId)) {
      return NextResponse.json({
        exists: false,
        message: "Некорректный ID задачи",
        status: 400,
      });
    }

    await prisma.task.delete({
      where: {
        id: taskId,
      },
    });

    // Return 204 with an empty body
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("Error deleting task:", error);
    if (error instanceof Error && error.message.includes("Record to delete not found.")) {
      return NextResponse.json({ exists: false, message: "Задание с указанным ID не найдено", status: 404 });
    }
    return NextResponse.json({ exists: false, message: "Internal server error", status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
