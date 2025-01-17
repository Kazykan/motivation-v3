"use client";

import { TestCard } from "@/components/test-card";
import React from "react";

const MyComponent: React.FC = () => {
  return (
    <>
      <div className="grid gap-4 mt-5">
        <TestCard title="Уборка" description="Уборка комнаты..." weekdays_need={["Пн", "Вт", "Ср"]} sum="34" />
        <TestCard
          title="Тренировка"
          description="You have 3 unread messages."
          weekdays_need={["Пн", "Ср", "Чт", "Сб", "Вс"]}
          sum="34"
        />
        <TestCard title="Duolingo" description="Уборка комнаты..." weekdays_need={["Чт", "Пт", "Сб", "Вс"]} sum="144" />
        <TestCard title="Уборка" description="Уборка комнаты..." weekdays_need={["Пн", "Вт", "Ср", "Вс"]} sum="74" />
      </div>
    </>
  );
};

export default MyComponent;
