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
    imageUrl: "/Slider.png",
  },
  {
    title: "International Air Freight",
    description: "Fast International Air Delivery",
    imageUrl: "/Slider.png",
  },
  {
    title: "Freight Services",
    description: "Road, air & Logistic Web Solution",
    imageUrl: "/Slider.png",
  },
  {
    title: "TRUCKING",
    description: "Powerful Platform & Logistics Services",
    imageUrl: "/Slider.png",
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
                backgroundPosition: "center",
              }}
              className={`relative h-[calc(100vh-70px)] flex  flex-col items-center  z-20 text-white bg-blend-overlay`}
            >
              <div className="mt-28 layout flex flex-col items-center ">
                <h1 className="font-extrabold text-center uppercase text-4xl md:text-6xl tracking-wider">
                  {item.title}
                </h1>
                <div className="w-32 mt-2 h-1 md:h-[6px] bg-success-main" />
                <p className="mt-2 text-lg md:text-3xl font-medium capitalize">
                  {item.description}
                </p>
              </div>

              <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.6)] -z-30"></div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default Hero;
