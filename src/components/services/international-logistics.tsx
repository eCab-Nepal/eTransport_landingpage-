import Potrait from "@/assets/potrait.jpg";
import Image from "next/image";

function InternationalLogistics() {
  return (
    <div className="py-12">
      <div className="layout flex lg:flex-row flex-col gap-8">
        <div className="">
          <div>
            <div className="mb-3 h-1 w-16 bg-success-main" />
            <p className=" font-bold text-2xl uppercase">
              INTERNATIONAL LOGISTICS & TRANSPORTATION
            </p>
          </div>
          <p className="mt-4 leading-6 text-sm text-neutral-600">
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart. I
            am alone, and feel the charm of existence in this spot, which was
            created for the bliss of souls like mine. I am so happy, my dear
            friend, so absorbed in the exquisite sense of mere tranquil
            existence, that I neglect my talents. I should be incapable of
            drawing a single stroke at the present moment; and yet I feel that I
            never was a greater artist than now.
          </p>

          <p className="mt-4 leading-6 text-sm text-neutral-600">
            I throw myself down among the tall grass by the trickling stream;
            and, as I lie close to the earth, a thousand unknown plants are
            noticed by me: when I hear the buzz of the little world among the
            stalks, and grow familiar with the countless indescribable forms of
            the insects and flies, then I feel the presence of the Almighty, who
            formed us in his own image, and the breath
          </p>

          <div className="mt-4 flex flex-col gap-4">
            <p className="text-sm leading-6">
              <span className="text-success-main text-sm leading-6">
                &rarr;
              </span>{" "}
              Providing high quality transportation services to all of our
              clients
            </p>
            <p className="text-sm leading-6">
              <span className="text-success-main text-sm leading-6">
                &rarr;
              </span>{" "}
              Invest in our employees to provide better service and company
              growth
            </p>{" "}
            <p className="text-sm leading-6">
              <span className="text-success-main text-sm leading-6">
                &rarr;
              </span>{" "}
              Worry about enviroment according to latest industry standards
            </p>{" "}
            <p className="text-sm leading-6">
              <span className="text-success-main text-sm leading-6">
                &rarr;
              </span>{" "}
              Safety as top priority in assuring safe work procedures
            </p>
            <p className="text-sm leading-6">
              <span className="text-success-main text-sm leading-6">
                &rarr;
              </span>{" "}
              Investing in technology to provide fast, acurate and
              cost-effective service
            </p>
            <p className="text-sm leading-6">
              <span className="text-success-main text-sm leading-6">
                &rarr;
              </span>{" "}
              Living up to highest industry standards
            </p>
          </div>

          <p className="mt-4 leading-6 text-sm text-neutral-600">
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart. I
            am alone, and feel the charm of existence in this spot, which was
            created for the bliss of souls like mine. I am so happy, my dear
            friend, so absorbed in the exquisite sense of mere tranquil
            existence, that I neglect my talents. I should be incapable of
            drawing a single stroke at the present moment; and yet I feel that I
            never was a greater artist than now.
          </p>

          <p className="mt-4 leading-6 text-sm text-neutral-600">
            <p className="mt-4 leading-6 text-sm text-neutral-600">
              I throw myself down among the tall grass by the trickling stream;
              and, as I lie close to the earth, a thousand unknown plants are
              noticed by me: when I hear the buzz of the little world among the
              stalks, and grow familiar with the countless indescribable forms
              of the insects and flies, then I feel the presence of the
              Almighty, who formed us in his own image, and the breath
            </p>
          </p>
        </div>

        <Image src={Potrait} className="h-fit" alt="potrait" />
      </div>
    </div>
  );
}

export default InternationalLogistics;
