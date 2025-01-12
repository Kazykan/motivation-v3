"use server";

import { prisma } from "@/prisma/prisma-client";

export async function checkChildTelegramId(telegram_id: number) {
  try {
    const child = await prisma.child.findFirst({
      where: {
        telegram_id: telegram_id,
      },
    });
    if (!child) {
      throw new Error("Child not found");
    }
    return child;
  } catch (error) {
    console.error("[checkChildTelegramId]", error);
    throw new Error("Internal server error");
  }
}

export async function checkParentTelegramId(telegram_id: number) {
  try {
    const parent = await prisma.parent.findFirst({
      where: {
        telegram_id: telegram_id,
      },
    });
    if (!parent) {
      throw new Error("Parent not found");
    }
    return parent;
  } catch (error) {
    console.error("[checkParentTelegramId]", error);
    throw new Error("Internal server error");
  }
}
