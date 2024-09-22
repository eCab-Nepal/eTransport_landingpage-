import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const heroData = [
  {
    title: "Strongest Distribution Network",
    description: "Powerful Platform & Logistics Services",
    imageUrl: "/slide01.jpg",
  },
  {
    title: "International Air Freight",
    description: "Fast International Air Delivery",
    imageUrl: "/slide02.jpg",
  },
  {
    title: "Freight Services",
    description: "Road, air & Logistic Web Solution",
    imageUrl: "/slide02.jpg",
  },
  {
    title: "TRUCKING",
    description: "Powerful Platform & Logistics Services",
    imageUrl: "/slide04.jpg",
  },
];

function Hero() {
  return (
    <Carousel>
      <CarouselContent>
        {heroData.map((item) => (
          <CarouselItem key={item.title}>
            <div
              style={{
                backgroundImage: `url(${item.imageUrl})`,
              }}
              className={`h-[calc(100vh-70px)] flex  flex-col items-center justify-center text-white`}
            >
              <div className="layout flex flex-col items-center justify-center">
                <h1 className="font-extrabold text-center uppercase text-4xl md:text-6xl tracking-wider">
                  {item.title}
                </h1>
                <div className="w-32 mt-2 h-1 md:h-[6px] bg-success-main" />
                <p className="mt-2 text-lg md:text-3xl font-medium capitalize">
                  {item.description}
                </p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default Hero;
