"use client";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "./ui/button";
import { Rocket } from "lucide-react";

interface Props {
  images: string[];
  descriptions: string[];
  setWelcome: React.Dispatch<React.SetStateAction<boolean>>;
}

export function CarouselCard({ images, descriptions, setWelcome }: Props) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="mx-auto max-w-xs">
      <Carousel setApi={setApi} className="w-full max-w-xs">
        <CarouselContent>
          {Array.from(images).map((image, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-0">
                  <Image
                    className="rounded-2xl"
                    src={image}
                    alt={`Carousel Image ${index + 1}`}
                    width={350}
                    height={350}
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
      <div
        className="py-2 text-sm text-muted-foreground text-justify"
        dangerouslySetInnerHTML={{ __html: descriptions[current - 1] }}
      />
      {count - current === 0 && (
        <div className="flex justify-center py-2">
          <Button onClick={() => setWelcome(false)}>
            <Rocket /> Начать
          </Button>
        </div>
      )}
    </div>
  );
}
