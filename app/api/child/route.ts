import { ChildCheckResponse } from "@/lib/api/api-types";
import { handleInviteChild } from "@/lib/api/child";
import { ChildCreateSchema } from "@/lib/types";
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
        telegram_id: telegram_id,
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

/**
 * Создает нового ребенка и связывает его с существующими родителями, если есть приглашение.
 * @param req - Next.js Request object.
 * @returns - Созданный ребенок с его связями.
 * @throws - Ошибку, если ребенок с таким telegram_id уже существует или invite_id не верный.
 * @example
 * Пример использования функции для удаления задания
 * POST /api/child
 * Content-Type: application/json
 */
export async function POST(req: NextRequest): Promise<NextResponse<ChildCheckResponse>> {
  const body = await req.json();
  const validationResult = ChildCreateSchema.safeParse(body);

  if (!validationResult.success) {
    return NextResponse.json({
      exists: false,
      message: JSON.stringify(
        validationResult.error.issues.map((issue) => ({
          field: issue.path.join("."),
          message: issue.message,
        }))
      ),
      status: 400,
    });
  }

  const childData = validationResult.data;

  try {
    const existingChild = await prisma.childUser.findUnique({
      where: {
        telegram_id: String(childData.telegram_id),
      },
    });
    if (existingChild) {
      return NextResponse.json({
        exists: false,
        message: `Ребенок с telegram_id ${childData.telegram_id} уже существует.`,
        status: 400,
      });
    }

    //создаем ребенка
    const child = await prisma.childUser.create({
      data: {
        name: childData.name,
        telegram_id: String(childData.telegram_id),
        photo_url: childData.photo_url,
        gender: childData.gender,
      },
    });

    // Если есть invite_id, обрабатываем его
    if (childData.invite_id !== undefined && childData.invite_id !== null) {
      await prisma.$transaction(async (tx) => {
        await handleInviteChild(tx, child.id, childData.invite_id!);
      });
    }

    return NextResponse.json({
      exists: true,
      message: "Учетная запись ребенка создана",
      childUser: child,
      status: 201,
    });
  } catch (error) {
    console.error("Error creating child:", error);
    return NextResponse.json({ exists: false, message: "Internal server error", status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
