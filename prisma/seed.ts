import { PrismaClient } from "./prisma/client";

const prisma = new PrismaClient();

async function down() {
  try {
    await prisma.$executeRaw`TRUNCATE TABLE "task_completions" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "tasks" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "parent_children" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "children_users" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "parent_users" RESTART IDENTITY CASCADE`;

    console.log("Tables truncated successfully.");
  } catch (error) {
    console.error("Error truncating tables:", error);
    throw error;
  }
}

async function seed() {
  try {
    // Seed Parent Users
    const parent1 = await prisma.parentUser.upsert({
      where: { telegram_id: 123456789 },
      update: {},
      create: {
        telegram_id: 123456789,
        name: "Родитель 1",
        gender: "MALE",
      },
    });
    const parent2 = await prisma.parentUser.upsert({
      where: { telegram_id: 987654321 },
      update: {},
      create: {
        telegram_id: 987654321,
        name: "Родитель 2",
        gender: "FEMALE",
      },
    });

    // Seed Child Users
    const child1 = await prisma.childUser.upsert({
      where: { telegram_id: 111111111 },
      update: {},
      create: {
        telegram_id: 111111111,
        name: "Ребенок 1",
        gender: "MALE",
      },
    });
    const child2 = await prisma.childUser.upsert({
      where: { telegram_id: 222222222 },
      update: {},
      create: {
        telegram_id: 222222222,
        name: "Ребенок 2",
        gender: "FEMALE",
      },
    });
    const child3 = await prisma.childUser.upsert({
      where: { telegram_id: 33333333 },
      update: {},
      create: {
        telegram_id: 33333333,
        name: "Ребенок 3",
        gender: "MALE",
      },
    });

    // Seed Parent-Child Relations
    const existingRelation1 = await prisma.parentChild.findFirst({
      where: {
        parentId: parent1.id,
        childId: child1.id,
      },
    });
    if (!existingRelation1) {
      await prisma.parentChild.create({
        data: { parentId: parent1.id, childId: child1.id },
      });
    }

    const existingRelation2 = await prisma.parentChild.findFirst({
      where: {
        parentId: parent2.id,
        childId: child2.id,
      },
    });
    if (!existingRelation2) {
      await prisma.parentChild.create({
        data: { parentId: parent2.id, childId: child2.id },
      });
    }
    const existingRelation3 = await prisma.parentChild.findFirst({
      where: {
        parentId: parent2.id,
        childId: child3.id,
      },
    });
    if (!existingRelation3) {
      await prisma.parentChild.create({
        data: { parentId: parent2.id, childId: child3.id },
      });
    }

    // Seed Tasks
    const task1 = await prisma.task.create({
      data: {
        title: "Уборка",
        description: "Убрать комнату",
        type: "DAILY",
        dayOfWeek: ["MONDAY", "WEDNESDAY", "FRIDAY"],
        reward: 250,
        childUserId: child1.id,
      },
    });

    const task2 = await prisma.task.create({
      data: {
        title: "Duolingo",
        description: "Пройти урок",
        type: "FLEXIBLE",
        dayOfWeek: [],
        frequency: 3,
        reward: 350,
        childUserId: child1.id,
      },
    });

    // Seed Task Completions
    await prisma.taskCompletion.create({
      data: { taskId: task1.id, userId: child1.id, completionDate: "2025-01-13T00:00:00.000Z" },
    });

    await prisma.taskCompletion.create({
      data: { taskId: task2.id, userId: child1.id, completionDate: "2025-01-15T00:00:00.000Z" },
    });
    await prisma.taskCompletion.create({
      data: { taskId: task2.id, userId: child1.id, completionDate: "2025-01-16T00:00:00.000Z" },
    });

    console.log("Seed data inserted successfully");
  } catch (error) {
    console.error("Error seeding data:", error);
    throw error; // Rethrow the error to be caught by the main function
  }
}

async function main() {
  try {
    await down();
    await seed();
  } catch (e) {
    console.error(e);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .then(() => {
    console.log("Seed process completed.");
  })
  .catch((e) => {
    console.error("Seed process failed:", e);
    process.exit(1);
  });
