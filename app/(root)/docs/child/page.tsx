import { CarouselCard } from "@/components/carousel-card";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

export default function Register() {
  const images = [
    "/child/1 child.png",
    "/child/2 child.png",
    "/child/3 child.png",
    "/child/4 child.png",
    "/child/5 child.png",
    "/child/6 child.png",
  ];

  const descriptions = [
    "Привет, юный лидер! Готов взять свою жизнь в свои руки?",
    "Здесь ты сам решаешь, как и когда тебе учиться, заниматься спортом и следить за порядком",
    "Это не скучные уроки и нотации, это игра, где ты сам устанавливаешь правила и сам получаешь награды",
    "Нет криков и ругани, есть понятные “цены” на каждый вид деятельности. Твои усилия не останутся незамеченными: ты получишь честное вознаграждение за свою работу",
    "Ты сам контролируешь свой успех: чем больше ты делаешь, тем больше получаешь. Ты сам учишься быть ответственным и самостоятельным, как настоящий взрослый. Ты сам решаешь, что для тебя важнее: учиться, заниматься спортом или что-то еще",
    "Ты — главный герой своей истории, и только от тебя зависит, какой будет ее концовка. Готов стать хозяином своей жизни? Тогда начни играть!",
  ];

  return (
    <main className="flex min-h-screen flex-col items-center p-14">
      <h1 className="text-lg font-bold mb-8 text-center">Привет, юный лидер! Готов взять свою жизнь в свои руки?</h1>
      <CarouselCard images={images} descriptions={descriptions} />
      <Button>
        <Rocket /> Начать
      </Button>
    </main>
  );
}