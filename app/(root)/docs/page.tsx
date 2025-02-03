"use client";

import React from "react";
import { DocsDescription, DocsImage } from "@/lib/constants";
import { CarouselCard } from "@/components/carousel-card";

export default function TestChildTask() {
  const [welcome, setWelcome] = React.useState(true);
  return (
    <main>
      <header className="py-2 px-3">
        <h1 className="text-xl font-bold text-center mb-1">
          Уважаемые родители, добро пожаловать в новое измерение воспитания!
        </h1>
      </header>

      <CarouselCard images={DocsImage} descriptions={DocsDescription} setWelcome={setWelcome} />

      {!welcome && (
        <blockquote className="bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))] p-4 rounded-lg shadow-md mt-8 mx-auto max-w-lg">
          Наше приложение — это не просто инструмент, это партнер в воспитании, который поможет вам перейти от нотаций и
          принуждения к взрослым и понятным отношениям с вашим ребенком.
        </blockquote>
      )}
    </main>
  );
}
