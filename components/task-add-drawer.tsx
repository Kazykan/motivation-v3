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
import { CirclePlus } from "lucide-react";

export function DrawerAddTask() {
  const drawerCloseRef = React.useRef<HTMLButtonElement>(null);

  const handleClose = () => {
    drawerCloseRef.current?.click();
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button><CirclePlus className="mr-0.5" />Добавить задание</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Добавить задание</DrawerTitle>
          </DrawerHeader>
          <div className="p-0">
            <div className="mt-2 h-min-[400px]">
              <TaskModalForm onClose={handleClose} />
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
