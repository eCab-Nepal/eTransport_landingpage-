import { Button } from "../ui/button";

const servicesData = [
  "LESS-THAN-TRUCKLOAD (ltl)",
  "RAIL INTERNATIONAL SHIPPING",
  "AIR FREIGHT",
  "FROST SHIPPING",
  "OCEAN FREIGHT",
  "FAST DELIVERY",
  "END-TO-END SOLUTIONS",
  "WAREHOUSING",
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
          {servicesData.map((item) => (
            <div
              key={item}
              className="flex flex-col overflow-hidden bg-[#DDDDDD] hover:bg-neutral-500/60 group items-center justify-between h-[450px] py-12"
            >
              <div className="flex-col flex items-center">
                <p className="text-2xl z-30 font-extrabold text-white ">
                  {item}
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurServices;
