import consumerPackage from "@/assets/industry-sector/consumer-package.svg";
import chemical from "@/assets/industry-sector/chemical-goods.svg";
import food from "@/assets/industry-sector/food.svg";
import retail from "@/assets/industry-sector/retail.svg";
import energy from "@/assets/industry-sector/energy.svg";
import Image from "next/image";

function IndustrySector() {
  return (
    <div className="relative h-full">
      <section className="layout grid grid-cols-2 z-30">
        <div className="  py-24 pr-24 col-span-2 md:col-span-1">
          <div className="">
            <div className="mb-3 h-1 w-16 bg-success-main" />
            <p className="text-white font-bold text-3xl">
              INDUSTRY SECTORS COVERAGE
            </p>

            <p className="mt-4 text-sm text-white">
              We cover different industry sectors, from food and beverage,
              chemical, retail, durable goods and more. Check the full list.
            </p>

            <div className="flex mt-4 flex-col gap-3">
              <div className="flex gap-3 items-center">
                <Image src={consumerPackage} alt="consumer" />
                <p className="text-white text-lg font-light">
                  Consumer Packaged Goods
                </p>
              </div>

              <div className="flex gap-3 items-center">
                <Image src={chemical} alt="consumer" />
                <p className="text-white text-lg font-light">Chemical Goods</p>
              </div>

              <div className="flex gap-3 items-center">
                <Image src={food} alt="consumer" />
                <p className="text-white text-lg font-light">
                  Food and Beverage
                </p>
              </div>

              <div className="flex gap-3 items-center">
                <Image src={retail} alt="consumer" />
                <p className="text-white text-lg font-light">Retail Goods</p>
              </div>

              <div className="flex gap-3 items-center">
                <Image src={energy} alt="consumer" />
                <p className="text-white text-lg font-light">
                  Energy, Oil and Gas
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=""></div>
      </section>
      <div className="absolute top-0 left-0  -z-30 bg-success-secondary h-full w-full  md:w-1/2 "></div>

      <div className="hidden md:block absolute top-0 right-0  -z-30 bg-success-main/80 h-full w-1/2 "></div>
    </div>
  );
  return (
    <section className="grid grid-cols-2">
      <div className="bg-[#2C3741] layout py-24 pr-24 col-span-2 md:col-span-1">
        <div className="sm:ml-[110px] md:ml-[130px] xl:ml-[180px] 2xl:ml-[376px]">
          <div className="mb-3 h-1 w-16 bg-[#006DB7]" />
          <p className="text-white font-bold text-3xl">
            INDUSTRY SECTORS COVERAGE
          </p>

          <p className="mt-4 text-sm text-white">
            We cover different industry sectors, from food and beverage,
            chemical, retail, durable goods and more. Check the full list.
          </p>

          <div className="flex mt-4 flex-col gap-3">
            <div className="flex gap-3 items-center">
              <Image src={consumerPackage} alt="consumer" />
              <p className="text-white text-lg font-light">
                Consumer Packaged Goods
              </p>
            </div>

            <div className="flex gap-3 items-center">
              <Image src={chemical} alt="consumer" />
              <p className="text-white text-lg font-light">Chemical Goods</p>
            </div>

            <div className="flex gap-3 items-center">
              <Image src={food} alt="consumer" />
              <p className="text-white text-lg font-light">Food and Beverage</p>
            </div>

            <div className="flex gap-3 items-center">
              <Image src={retail} alt="consumer" />
              <p className="text-white text-lg font-light">Retail Goods</p>
            </div>

            <div className="flex gap-3 items-center">
              <Image src={energy} alt="consumer" />
              <p className="text-white text-lg font-light">
                Energy, Oil and Gas
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1B2936]"></div>
    </section>
  );
}

export default IndustrySector;
