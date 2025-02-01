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
import { TaskModalForm } from "./form/add-task-form";
import { TaskCreateSchema, TaskUpdateSchema } from "@/lib/types";
import { z } from "zod";

interface Props {
  taskId?: number; // для обновления
  initialValues?: z.infer<typeof TaskCreateSchema> | z.infer<typeof TaskUpdateSchema>; // данные для обновления
  triggerType?: "FilePenLine" | "Trash2" | "Add";
}

export function DrawerAddTask({ taskId, initialValues, triggerType = "Add" }: Props) {
  const drawerCloseRef = React.useRef<HTMLButtonElement>(null);

  const handleClose = () => {
    drawerCloseRef.current?.click();
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Добавить задание</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>
              Добавить задание
              {triggerType === "FilePenLine" && "Редактировать задание"}
              {triggerType === "Trash2" && "Удалить задание"}
            </DrawerTitle>
          </DrawerHeader>
          <div className="p-0">
            <div className="mt-2 h-min-[400px]">
              <TaskModalForm onClose={handleClose} taskId={taskId} initialValues={initialValues} />
            </div>
          </div>
          <DrawerFooter>
            <DrawerClose asChild ref={drawerCloseRef}>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
