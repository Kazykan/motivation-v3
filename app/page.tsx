import { Header } from "@/components/header";
import { TestCard } from "@/components/test-card";
import { TaskType } from "@prisma/client";

export default function Home() {
  return (
    <main>
      <Header />

      <div className="grid gap-4 mt-5">
        <TestCard task_id={1} frequency={3} taskType={TaskType.DAILY} title="Уборка" description="Уборка комнаты..." sum={34} />
        <TestCard
        task_id={2}
          taskType={TaskType.FLEXIBLE}
          title="Тренировка"
          description="You have 3 unread messages."
          weekdays_need={["Пн", "Ср", "Чт", "Сб", "Вс"]}
          sum={34}
        />
        <TestCard task_id={3} frequency={6} taskType={TaskType.DAILY} title="Duolingo" description="Уборка комнаты..." sum={144} />
        <TestCard task_id={4} frequency={6} taskType={TaskType.DAILY} title="Уборка" description="Уборка комнаты..." sum={74} />
      </div>
    </main>
  );
}
