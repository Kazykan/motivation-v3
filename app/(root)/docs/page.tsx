"use client";

import React from "react";
import Image from "next/image";
import { ParentImages } from "@/lib/constants";

export default function TestChildTask() {
  return (
    <main>
      <header className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] py-8 px-4">
        <h1 className="text-3xl font-bold text-center mb-6">
          Уважаемые родители, добро пожаловать в новое измерение воспитания!
        </h1>
      </header>

      <section className="mx-auto p-2">
        <div className="bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] p-3 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-bold mb-4">
            Вы стремитесь к тому, чтобы ваш ребенок вырос самостоятельным, ответственным и мотивированным? Тогда вы
            попали по адресу!
          </h2>
          <p className="text-[hsl(var(--muted-foreground))] mb-4">
            Наше приложение — это не просто инструмент, это партнер в воспитании, который поможет вам перейти от нотаций
            и принуждения к взрослым и понятным отношениям с вашим ребенком.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-4">Что получает ваш ребенок:</h3>
          <ul className="list-disc list-inside text-[hsl(var(--muted-foreground))] mb-6">
            <li className="mb-2">
              <span className="font-bold">✅</span> Получит <b>свободу выбора</b>, а вместе с ней —{" "}
              <b>ответственность за свои решения</b>.
            </li>
            <li className="mb-2">
              <span className="font-bold">✅</span> Научится самостоятельно управлять своим временем и усилиями.
            </li>
            <li className="mb-2">
              <span className="font-bold">✅</span> Увидит связь между своими действиями и результатом.
            </li>
            <li className="mb-2">
              <span className="font-bold">✅</span> Будет мотивирован <b>достижениями</b>, а не страхом наказания.
            </li>
            <li className="mb-2">
              <span className="font-bold">✅</span> Развиет <b>дисциплину</b>, <b>ответственность</b>,{" "}
              <b>финансовую грамотность</b>.
            </li>
          </ul>
        </div>

        <div className="bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] p-3 rounded-lg shadow-md mb-6">
          <h3 className="text-xl font-bold mt-6 mb-4">Ваша роль:</h3>
          <p className="text-[hsl(var(--muted-foreground))] mb-4">
            Мы создали среду, где нет места эмоциям, есть только четкие правила и “цены”, как в реальной жизни. Вы, как
            родитель, становитесь архитектором этой среды, устанавливаете правила и наблюдаете за ростом вашего ребенка.
          </p>
          <p className="text-[hsl(var(--muted-foreground))] mb-4">Вы больше не “полицейский”, а наставник и партнер.</p>
        </div>

        <div className="bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] p-3 rounded-lg shadow-md mb-6">
          <h3 className="text-xl font-bold mt-6 mb-4">Важный результат:</h3>
          <p className="text-[hsl(var(--muted-foreground))] mb-4">
            Это ваш шанс воспитать успешного человека, который умеет принимать решения, нести ответственность и
            добиваться своих целей.
          </p>

          <p className="text-xl font-bold mt-6 mb-4">
            <span className="text-[hsl(var(--primary))]">Начните строить будущее своего ребенка уже сегодня!</span>
          </p>
        </div>

        <div className="bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] p-3 rounded-lg shadow-md mb-6 flex justify-center items-center">
          <Image
            width={200}
            height={200}
            src={ParentImages[0]}
            alt="Ваше изображение"
            className="object-cover rounded-lg"
          />
        </div>
      </section>

      <blockquote className="bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))] p-4 rounded-lg shadow-md mt-8 mx-auto max-w-lg">
        Наше приложение — это не просто инструмент, это партнер в воспитании, который поможет вам перейти от нотаций и
        принуждения к взрослым и понятным отношениям с вашим ребенком.
      </blockquote>
    </main>
  );
}
