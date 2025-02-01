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
import { FilePenLine } from "lucide-react";

interface Props {
  taskId?: number; // для обновления
  initialValues?: z.infer<typeof TaskCreateSchema> | z.infer<typeof TaskUpdateSchema>; // данные для обновления
}

export function DrawerEditTask({ taskId, initialValues}: Props) {
  const drawerCloseRef = React.useRef<HTMLButtonElement>(null);

  const handleClose = () => {
    drawerCloseRef.current?.click();
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button className="w-5 h-5 inline-flex items-center justify-center">
          <FilePenLine className="w-5 h-5" />
        </button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Редактировать задание</DrawerTitle>
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
