"use client";

import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

export default function Register() {
  return (
    <main className="flex min-h-screen flex-col items-center p-14">
      <h1 className="text-lg font-bold mb-8 text-center">Добро пожаловать в новое измерение воспитания!</h1>

      <Button>
        <Rocket /> Начать
      </Button>
    </main>
  );
}
