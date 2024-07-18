"use client";
import Image from "next/image";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

const data = [
  {
    date: "12.2023 – 06.2024",
    position: "Desarrollador FullStack",
    company: "Auttobots SPA",
  },
  {
    date: "05.2023 – 11.2023",
    position: "Desarrollador FrontEnd",
    company: "SOFTIAGO S.A ",
  },
  {
    date: "12.2022 – 04.2023",
    position: "Desarrollador Backend",
    company: "WOM S.A",
  },
  {
    date: "08.2022 – 11.2022",
    position: "Desarrollador Backend",
    company: "UNIVERSIDAD AUTÓNOMA",
  },
];

const Experience = () => {
  const autoplayPlugin = Autoplay({
    delay: 5000,
  });

  return (
    <Carousel
      orientation="vertical"
      className="w-full"
      plugins={[autoplayPlugin]}
    >
      <CarouselContent className="lg:h-[385px]">
        {data.map((item, index) => {
          return (
            <CarouselItem key={index} className="basis-1/3">
              <Card className="bg-secondary shadow-lg mt-0">
                <CardHeader>
                  <CardTitle className="text-muted-foreground text-md text-right">
                    {item.date}
                  </CardTitle>
                  <CardDescription className="flex flex-col">
                    <span className="text-xl text-primary">{item.position}</span>
                    <span className="text-base text-muted-foreground">
                      {item.company}
                    </span>
                  </CardDescription>
                </CardHeader>
              </Card>
            </CarouselItem>
          );
        })}
      </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
    </Carousel>
  );
};

export default Experience;
