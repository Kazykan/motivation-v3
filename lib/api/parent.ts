import { prisma } from "@/prisma/prisma-client";
import { Prisma } from "@/prisma/prisma/client";

// Функция для проверки существования родителя по telegram_id
export const checkExistingParent = async (telegramId: string) => {
  return prisma.parentUser.findUnique({
    where: { telegram_id: telegramId },
  });
};

// Функция для создания отношений родитель-ребенок
export const createParentChildRelations = async (
  tx: Prisma.TransactionClient,
  parentId: number,
  childrenIds: { childId: number }[]
) => {
  if (!childrenIds.length) return;

  await Promise.all(
    childrenIds.map(async (child) => {
      const existingRelation = await tx.parentChild.findFirst({
        where: {
          parentId: parentId,
          childId: child.childId,
        },
      });
      if (!existingRelation) {
        await tx.parentChild.create({
          data: {
            parentId: parentId,
            childId: child.childId,
          },
        });
      }
    })
  );
};

// Функция для обработки приглашений и копирования отношений
export const handleInvite = async (tx: Prisma.TransactionClient, parentId: number, inviteId: number) => {
  const inviteParent = await tx.parentUser.findUnique({
    where: { telegram_id: String(inviteId) },
    include: {
      children: true,
    },
  });
  const inviteChild = await tx.childUser.findUnique({
    where: { telegram_id: String(inviteId) },
    include: { parents: true },
  });

  if (inviteParent) {
    const parentChildren = inviteParent.children;
    await createParentChildRelations(tx, parentId, parentChildren);
  } else if (inviteChild && inviteChild.parents.length > 0) {
    const firstParent = await tx.parentUser.findUnique({
      where: { id: inviteChild.parents[0].parentId },
      include: {
        children: true,
      },
    });

    if (firstParent) {
      const parentChildren = firstParent.children;
      await createParentChildRelations(tx, parentId, parentChildren);
    }
  }
};
