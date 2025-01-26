import { Gender } from "@/prisma/prisma/client";
import { z } from "zod";

export type IWeekdays = "Пн" | "Вт" | "Ср" | "Чт" | "Пт" | "Сб" | "Вс";

export const ParentCreateSchema = z.object({
  name: z.string().min(1, "Имя обязательно"),
  telegram_id: z.number(),
  photo_url: z.string().nullable().optional(),
  gender: z.nativeEnum(Gender),
  invite_id: z.number().nullable().optional(),
});
