import { DayOfWeek, Gender, TaskType } from "@/prisma/prisma/client";
import { z } from "zod";

export type IWeekdays = "Пн" | "Вт" | "Ср" | "Чт" | "Пт" | "Сб" | "Вс";

export const ParentCreateSchema = z.object({
  name: z.string().min(1, "Имя обязательно"),
  telegram_id: z.number(),
  photo_url: z.string().nullable().optional(),
  gender: z.nativeEnum(Gender),
  invite_id: z.number().nullable().optional(),
});

export const TaskCreateSchema = z
  .object({
    title: z.string().min(1, "Название задания обязательно"),
    description: z.string().nullable().optional(),
    type: z.nativeEnum(TaskType),
    dayOfWeek: z.array(z.nativeEnum(DayOfWeek)).optional(),
    frequency: z.number().nullable().optional(),
    reward: z.number().min(1, "Стоимость за выполнение обязательно"),
    childUserId: z.number(),
    createdAt: z.date().default(new Date()),
    updatedByUserId: z.number().nullable().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.type === "DAILY" && (!data.dayOfWeek || data.dayOfWeek.length === 0)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Для типа задания 'регулярные' необходимо выбрать хотя бы один день недели",
        path: ["dayOfWeek"],
      });
    }
    if (data.type === "FLEXIBLE" && (!data.frequency || data.frequency < 1 || data.frequency > 7)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Для типа задания 'гибкие' необходимо указать кол-во повторений от 1 до 7",
        path: ["frequency"],
      });
    }
  });
