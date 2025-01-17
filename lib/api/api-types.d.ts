import { ChildUser, ParentUser } from "@prisma/client";

export interface ChildCheckResponse {
  exists: boolean;
  childUser?: ChildUser | null; // childUser может отсутствовать если exists: false
  message?: string; // Дополнительное поле для сообщений (например, ошибки)
  status?: number; // Дополнительное поле для HTTP статуса (например, 400, 500)
}

export interface ParentCheckResponse {
  exists: boolean;
  parentUser?: ParentUser | null;
  message?: string;
  status?: number;
}
