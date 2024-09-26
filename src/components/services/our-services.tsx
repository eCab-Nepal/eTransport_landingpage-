import { Button } from "../ui/button";
import serviceOne from "@/assets/Services/Service-01.png";
import serviceTwo from "@/assets/Services/Service-02.png";
import serviceThree from "@/assets/Services/Service-03.png";
import serviceFour from "@/assets/Services/Service-04.png";
import serviceFive from "@/assets/Services/Service-05.png";
import serviceSix from "@/assets/Services/Service-06.png";
import serviceSeven from "@/assets/Services/Service-07.png";
import serviceEight from "@/assets/Services/Service-08.png";
import Image from "next/image";

// const servicesData = [
//   "LESS-THAN-TRUCKLOAD (ltl)",
//   "RAIL INTERNATIONAL SHIPPING",
//   "AIR FREIGHT",
//   "FROST SHIPPING",
//   "OCEAN FREIGHT",
//   "FAST DELIVERY",
//   "END-TO-END SOLUTIONS",
//   "WAREHOUSING",
// ];

const serviceData = [
  {
    title: "LESS-THAN-TRUCKLOAD (ltl)",
    image: serviceOne,
  },
  {
    title: "RAIL INTERNATIONAL SHIPPING",
    image: serviceTwo,
  },
  {
    title: "AIR FREIGHT",
    image: serviceThree,
  },
  {
    title: "FROST SHIPPING",
    image: serviceFour,
  },
  {
    title: "OCEAN FREIGHT",
    image: serviceFive,
  },
  {
    title: "FAST DELIVERY",
    image: serviceSix,
  },
  {
    title: "END-TO-END SOLUTIONS",
    image: serviceSeven,
  },
  {
    title: "WAREHOUSING",
    image: serviceEight,
  },
];

function OurServices() {
  return (
    <div className="py-2">
      <div className="flex flex-col items-center">
        <p className="text-3xl font-semibold">Our services</p>
        <p className="text-neutral-400 text-xs">TAILORED LOGISTIC SERVICES</p>
        <div className="mt-3 h-1 w-16 bg-success-main" />
      </div>

      <div className="mt-8">
        <div className="items-center grid grid-cols-1 md:grid-cols-2 ">
          {serviceData.map((item) => (
            <div
              key={item.title}
              className="flex flex-col relative overflow-hidden  group items-center justify-between h-[450px] py-12"
            >
              <div className="flex-col flex items-center">
                <p className="text-2xl z-30 font-extrabold text-white ">
                  {item.title}
                </p>
                <div className="mt-3 h-1 w-16 bg-success-main" />
              </div>

              <Button
                size={"3xl"}
                variant={"success-outline"}
                className="transition-all ease-linear duration-300 group-hover:translate-y-0 text-lg font-semibold translate-y-[300%]"
              >
                View Details
              </Button>

              <Image
                className="h-full -z-30 w-full absolute top-0 left-0"
                src={item.image}
                alt="image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurServices;
