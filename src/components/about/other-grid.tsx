import consumerPackage from "@/assets/industry-sector/consumer-package.svg";
import chemical from "@/assets/industry-sector/chemical-goods.svg";
import food from "@/assets/industry-sector/food.svg";
import retail from "@/assets/industry-sector/retail.svg";
import energy from "@/assets/industry-sector/energy.svg";
import Image from "next/image";
import { CircleCheck } from "lucide-react";

function OtherGrid() {
  return (
    <section>
      <div className="relative">
        <div className=" layout grid grid-cols-2">
          <div className="   py-12 md:py-24 md:pr-24 col-span-2 md:col-span-1">
            <div className=" ">
              <div className="mb-3 h-1 w-16 bg-success-main" />
              <p className=" font-bold text-2xl uppercase">
                the trucking brand
              </p>
              <p className="mt-4 text-sm leading-6">
                Cozy sphinx waves quart jug of bad milk. A very bad quack might
                jinx zippy fowls. Few quips galvanized the mock jury box. Quick
                brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and
                my wolves quack! Blowzy red vixens fight for a quick jump.
                Joaquin Phoenix was gazed by MTV for luck. A wizard’s job is to
                vex chumps quickly in fog. Watch ’Jeopardy!’, Alex Trebek’s fun
                TV quiz game. Woven silk pyjamas exchanged for blue quartz.
                Brawny gods just.
              </p>

              <div className="mt-6">
                <p className="text-sm leading-6">
                  <span className="text-succbg-success-main text-sm leading-6">
                    &rarr;
                  </span>{" "}
                  Operating Worldwide
                </p>
                <p className="text-sm leading-6">
                  <span className="text-succbg-success-main text-sm leading-6">
                    &rarr;
                  </span>{" "}
                  Professional personnel
                </p>{" "}
                <p className="text-sm leading-6">
                  <span className="text-succbg-success-main text-sm leading-6">
                    &rarr;
                  </span>{" "}
                  End-to-end solutions
                </p>{" "}
                <p className="text-sm leading-6">
                  <span className="text-succbg-success-main text-sm leading-6">
                    &rarr;
                  </span>{" "}
                  Flexible services
                </p>
              </div>
            </div>
          </div>

          <div className=""></div>
        </div>
        <div className="absolute top-0 left-0 -z-30 bg-[#F6F6F6] h-full w-full md:w-1/2"></div>

        <div className="hidden md:block absolute top-0 right-0  -z-30 bg-success-secondary/80 h-full w-1/2 "></div>
      </div>
      {/* sedcond */}

      <div className="relative">
        <div className="grid layout grid-cols-2">
          <div className=""></div>

          <div className="bg-[#F6F6F6] layout  py-12 md:py-24 md:pl-24 col-span-2 md:col-span-1">
            <div className="">
              <div className="mb-3 h-1 w-16 bg-success-main" />
              <p className=" font-bold text-2xl uppercase">
                safety and security
              </p>
              <p className="mt-4 text-sm leading-6">
                Cozy sphinx waves quart jug of bad milk. A very bad quack might
                jinx zippy fowls. Few quips galvanized the mock jury box. Quick
                brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and
                my wolves quack! Blowzy red vixens fight for a quick jump.
                Joaquin Phoenix was gazed by MTV for luck. A wizard’s job is to
                vex chumps quickly in fog. Watch &apos;Jeopardy!&apos;, Alex
                Trebek&apos;s fun TV quiz game. Woven silk pyjamas exchanged for
                blue quartz. Brawny gods just.
              </p>

              <p className="mt-4 text-sm leading-6 ">
                Cozy sphinx waves quart jug of bad milk. A very bad quack might
                jinx zippy fowls. Few quips galvanized the mock jury box. Quick
                brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and
                my wolves quack! Blowzy red vixens fight for a quick jump.
                Joaquin Phoenix was gazed by MTV for luck.
              </p>
            </div>
          </div>
        </div>

        <div className="hidden md:block absolute top-0 left-0  -z-30 bg-success-secondary/80 h-full   md:w-1/2 "></div>

        <div className=" absolute top-0 right-0  -z-30 bg-[#F6F6F6] h-full w-full md:w-1/2"></div>
      </div>

      {/* third */}

      <div className="relative">
        <div className="layout grid grid-cols-2">
          <div className="bg-[#F6F6F6] layout  py-12 md:py-24 md:pr-24 col-span-2 md:col-span-1">
            <div className="">
              <div className="mb-3 h-1 w-16 bg-success-main" />
              <p className=" font-bold text-2xl uppercase">
                WHY CHOOSE TRUCKING
              </p>
              <div className="mt-4 flex flex-col gap-4">
                <div>
                  <div className="flex gap-3 items-start">
                    <CircleCheck
                      className="text-success-main shrink-0"
                      size={24}
                    />
                    <div>
                      <p className="font-bold text-2xl">
                        Fast Worldwide delivery
                      </p>
                      <p className="mt-4 text-sm leading-6">
                        Quick brown dogs jump over the lazy fox. The jay, pig,
                        fox, zebra, and my wolves quack! Blowzy red vixens fight
                        for a quick jump. Joaquin Phoenix was gazed by MTV for
                        luck.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex gap-3 items-start">
                    <CircleCheck
                      className="text-success-main shrink-0"
                      size={24}
                    />
                    <div>
                      <p className="font-bold text-2xl">
                        End-to-end solution available
                      </p>
                      <p className="mt-4 text-sm leading-6">
                        Quick brown dogs jump over the lazy fox. The jay, pig,
                        fox, zebra, and my wolves quack! Blowzy red vixens fight
                        for a quick jump. Joaquin Phoenix was gazed by MTV for
                        luck.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex gap-3 items-start">
                    <CircleCheck
                      className="text-success-main shrink-0"
                      size={24}
                    />
                    <div>
                      <p className="font-bold text-2xl">Safety & Compliance</p>
                      <p className="mt-4 text-sm leading-6">
                        Quick brown dogs jump over the lazy fox. The jay, pig,
                        fox, zebra, and my wolves quack! Blowzy red vixens fight
                        for a quick jump. Joaquin Phoenix was gazed by MTV for
                        luck.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=""></div>
        </div>

        <div className="absolute top-0 left-0  -z-30 bg-[#F6F6F6] h-full w-full  md:w-1/2 "></div>

        <div className="hidden md:block absolute top-0 right-0  -z-30 bg-success-secondary/80 h-full w-1/2 "></div>
      </div>
    </section>
  );
}

export default OtherGrid;
