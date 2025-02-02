import { Prisma } from "@/prisma/prisma/client";

// Функция для создания связи родитель-ребенок
const createParentChildRelation = async (tx: Prisma.TransactionClient, parentId: number, childId: number) => {
  // 1. Проверяем, существует ли уже такая связь
  const existingRelation = await tx.parentChild.findFirst({
    where: {
      parentId: parentId,
      childId: childId,
    },
  });

  // 2. Если связи нет, создаем ее
  if (!existingRelation) {
    await tx.parentChild.create({
      data: {
        parentId: parentId,
        childId: childId,
      },
    });
  }
};

const addSharedParentRelations = async (
    tx: Prisma.TransactionClient,
    childId: number,
    children: {childId: number}[]
) => {
    const uniqueParentIds = new Set<number>()
    // Собираем все родительские id, которые есть у детей текущего родителя
    for (const {childId: currentChildId } of children) {
        const currentChild = await tx.childUser.findUnique({
            where: { id: currentChildId }, include: {parents: true}
        })

        //если у него есть родители, а хотя бы один есть это тот кто пригласил ребенка
        // добавляем его в сет
        if (currentChild?.parents) {
            currentChild.parents.forEach((parent) => {
                uniqueParentIds.add(parent.parentId)
            })
        }
    }

    // Создаем связи с каждым уникальным родителем
    for(const parentId of uniqueParentIds){
        await createParentChildRelation(tx, parentId, childId);
     }

}

export const handleInviteChild = async (tx: Prisma.TransactionClient, childId: number, inviteParentId: number) => {
  //Проверяем, существует ребенок и родитель
  const child = await tx.childUser.findUnique({ where: { id: childId } });
  const parent = await tx.parentUser.findUnique({ where: { id: inviteParentId }, include: { children: true } });

  if (!child) {
    console.warn(`Ребенок с ID ${childId} не найден.`);
    return;
  }
  if (!parent) {
    console.warn(`Родитель с ID ${inviteParentId} не найден.`);
    return;
  }

  //Создаем связь между родителем и ребенком
  await createParentChildRelation(tx, inviteParentId, childId);

  //Добавляем связи с другими родителями (если есть)
  if(parent.children && parent.children.length > 0) {
    await addSharedParentRelations(tx, childId, parent.children);
  }
};
