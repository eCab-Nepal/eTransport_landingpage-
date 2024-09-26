import { whatWeOfferData } from "@/data/what-we-offer-data";
import Image from "next/image";

function WhatWeOffer() {
  return (
    <section className="py-12 layout">
      <div className="flex flex-col items-center">
        <p className="text-3xl font-semibold">What we Offer</p>
        <p className="text-neutral-400 text-xs">TAILORED LOGISTIC SERVICES</p>
        <div className="mt-3 h-1 w-16 bg-success-secondary" />
      </div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {whatWeOfferData.map((element) => (
          <div
            className="flex gap-6 items-center p-8 bg-neutral-50"
            key={element.title}
          >
            <Image
              width={75}
              height={75}
              className="object-cover"
              src={element.image}
              alt={element.title}
            />

            <div>
              <p className="text-xl font-semibold text-success-main">
                {element.title}
              </p>
              <p className="mt-3 text-sm text-neutral-700">
                {element.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhatWeOffer;
