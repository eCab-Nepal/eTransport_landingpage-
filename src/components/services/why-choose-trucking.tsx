import Image from "next/image";
import land from "@/assets/land.jpg";
import { CircleCheck } from "lucide-react";
import aboutThree from "@/assets/About Us/Section-03-03.png";

function WhyChooseTrucking() {
  return (
    <section className="py-12">
      <div className="flex flex-col md:flex-row gap-6 layout">
        <div className=" flex flex-col gap-4 q-full md:w-[45%]">
          <div>
            <div className="mb-3 h-1 w-16 bg-success-main" />
            <p className=" font-bold text-2xl uppercase">Why Choose Trucking</p>
          </div>

          <div className="mt-2">
            <div className="flex gap-3 items-start">
              <CircleCheck className="text-success-main shrink-0" size={24} />
              <div>
                <p className="font-bold text-2xl">Fast Worldwide delivery</p>
                <p className="mt-4 text-sm leading-6">
                  Quick brown dogs jump over the lazy fox. The jay, pig, fox,
                  zebra, and my wolves quack! Blowzy red vixens fight for a
                  quick jump. Joaquin Phoenix was gazed by MTV for luck.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex gap-3 items-start">
              <CircleCheck className="text-success-main shrink-0" size={24} />
              <div>
                <p className="font-bold text-2xl">
                  End-to-end solution available
                </p>
                <p className="mt-4 text-sm leading-6">
                  Quick brown dogs jump over the lazy fox. The jay, pig, fox,
                  zebra, and my wolves quack! Blowzy red vixens fight for a
                  quick jump. Joaquin Phoenix was gazed by MTV for luck.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex gap-3 items-start">
              <CircleCheck className="text-success-main shrink-0" size={24} />
              <div>
                <p className="font-bold text-2xl">Safety & Compliance</p>
                <p className="mt-4 text-sm leading-6">
                  Quick brown dogs jump over the lazy fox. The jay, pig, fox,
                  zebra, and my wolves quack! Blowzy red vixens fight for a
                  quick jump. Joaquin Phoenix was gazed by MTV for luck.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Image src={aboutThree} alt="land" className="w-full md:w-[55%]" />
      </div>
    </section>
  );
}

export default WhyChooseTrucking;
