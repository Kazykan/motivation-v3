import { ChildUser, ParentUser, Task, TaskCompletion } from "@/prisma/prisma/client";

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

export interface ParentResponseWithChildren {
  exists: boolean;
  parentUser?: ParentUserResponse | null;
  message?: string;
  status?: number;
}

export interface ParentUserResponse extends ParentUser {
  children: ChildUser[];
}

export interface TasksResponse extends Task {
  taskCompletions: TaskCompletion[];
}

export interface TaskWithCompletionsResponse {
  exists: boolean;
  task?: TasksResponse[];
  message?: string;
  status?: number;
}

export interface TaskResponse {
  exists: boolean;
  task?: Task;
  message?: string;
  status?: number;
}

export interface TaskCompletionResponse {
  exists: boolean;
  taskCompletion?: TaskCompletion[];
  message?: string;
  status?: number;
}
