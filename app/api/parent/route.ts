import { ParentCheckResponse } from "@/lib/api/api-types";
import { handleInvite } from "@/lib/api/parent";
import { ParentCreateSchema } from "@/lib/types";
import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest): Promise<NextResponse<ParentCheckResponse>> {
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
    });

    if (parentUser) {
      return NextResponse.json({ exists: true, parentUser: parentUser, status: 200 });
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
 * Создает нового родителя и связывает его с существующими детьми, если есть приглашение.
 * @param data - Данные для создания родителя, включая invite_id.
 * @returns - Созданный родитель с его связями.
 * @throws - Ошибку, если родитель с таким telegram_id уже существует или invite_id не верный.
 */
export async function POST(req: NextRequest) {
  const body = await req.json();
  const validationResult = ParentCreateSchema.safeParse(body);

  if (!validationResult.success) {
    return NextResponse.json({
      exists: false,
      message: validationResult.error.issues.map((issue) => ({
        field: issue.path.join("."),
        message: issue.message,
      })),
      status: 400,
    });
  }

  const parentDate = validationResult.data;

  try {
    // Проверка на уникальность telegram_id
    const existingParent = await prisma.parentUser.findUnique({
      where: { telegram_id: String(parentDate.telegram_id) },
    });
    if (existingParent) {
      return NextResponse.json({
        exists: false,
        message: `Родитель с telegram_id ${parentDate.telegram_id} уже существует.`,
        status: 400,
      });
    }
    // Создаем родителя
    const parent = await prisma.parentUser.create({
      data: {
        name: parentDate.name,
        telegram_id: String(parentDate.telegram_id),
        photo_url: parentDate.photo_url,
        gender: parentDate.gender,
      },
    });

    if (parentDate.invite_id !== undefined && parentDate.invite_id !== null) {
      await prisma.$transaction(async (tx) => {
        await handleInvite(tx, parent.id, parentDate.invite_id!);
      });
    }

    return NextResponse.json({ exists: true, message: "Учетная запись создана", parent, status: 201 });
  } catch (error) {
    console.error("Error checking parent:", error);
    return NextResponse.json({ exists: false, message: "Internal server error", status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
