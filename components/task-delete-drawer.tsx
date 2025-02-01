"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { TaskCreateSchema, TaskUpdateSchema } from "@/lib/types";
import { z } from "zod";
import { Trash2 } from "lucide-react";
import { useDeleteTask } from "@/hooks/useTask";
import { toast } from "@/hooks/use-toast";

interface Props {
  taskId: number; // для обновления
  initialValues: z.infer<typeof TaskCreateSchema> | z.infer<typeof TaskUpdateSchema>; // данные для обновления
}

export function DrawerDeleteTask({ taskId, initialValues }: Props) {
  const drawerCloseRef = React.useRef<HTMLButtonElement>(null);

  const deleteTask = useDeleteTask();

  const handleClose = () => {
    drawerCloseRef.current?.click();
  };

  async function onSubmit() {
    try {
      await deleteTask.mutateAsync(taskId);
      toast({ title: "Задание удалено" });
      handleClose();
    } catch (error) {
      console.error("Failed to update task", error);
      toast({ title: "Ошибка при удалении задания" });
    }
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button className="w-5 h-5 inline-flex items-center justify-center">
          <Trash2 className="w-5 h-5" />
        </button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className="text-destructive">Удалить задание</DrawerTitle>
          </DrawerHeader>
          <div className="p-4">
            <div className="mt-2 h-min-[400px]">
              <div className="text-justify">
                Задание <span className="font-bold">{initialValues.title}</span> будет удаленно без возможности
                восстановления все выплаты по ней будут удаленны и пересчитаны без нее за все время
              </div>
              <Button className="mt-3 w-full" onClick={onSubmit} variant="destructive" disabled={deleteTask.isPending}>
                <Trash2 className="ml-1" /> Удалить
              </Button>
            </div>
          </div>
          <DrawerFooter>
            <DrawerClose asChild ref={drawerCloseRef}>
              <Button variant="outline">Отмена</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
