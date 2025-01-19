"use client"

import { CarouselCard } from "@/components/carousel-card";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

export default function Register() {
  const images = [
    "/parent/1 parent.png",
    "/parent/2 parent.png",
    "/parent/3 parent.png",
    "/parent/4 parent.png",
    "/parent/5 parent.png",
    "/parent/6 parent.png",
  ];

  const descriptions = [
    "Ребенок сам решает, учиться или нет",
    "Понятные цены и правила, как в реальном мире",
    "Дети учатся выбирать, как распределить свои усилия",
    "Оценка работы — объективная, не зависит от настроения",
    "Система стимулирует дисциплину и активность",
    "Фокус на результат: Сделал - получил, не сделал - не получил.",
  ];

  return (
    <main className="flex min-h-screen flex-col items-center p-14">
      <h1 className="text-lg font-bold mb-8 text-center">Добро пожаловать в новое измерение воспитания!</h1>
      <CarouselCard images={images} descriptions={descriptions} />
      <Button><Rocket /> Начать</Button>
    </main>
  );
}
