import land from "@/assets/land.jpg";
import Image from "next/image";

function TruckingLogistics() {
  return (
    <section className="bg-[#F4FCFC] py-12">
      <div className="flex flex-col md:flex-row gap-6 layout">
        <Image src={land} alt="land" className="w-full md:w-1/2" />

        <div className="w-full md:w-1/2">
          <div>
            <div className="mb-3 h-1 w-16 bg-success-main" />
            <p className=" font-bold text-2xl uppercase">
              TRUCKING - YOUR LOGISTICS PARTNER
            </p>
          </div>
          <p className="mt-4 font-xl font-medium">
            Welcome, we are Trucking, experienced logistics company operating in
            over 150 countries across the world.
          </p>
          <p className="text-neutral-600 text-sm leading-6">
            This is one more option for a homepage. As you can see there are
            different styles for each company size and requirement. You can
            choose from eight homepage styles or create your own, the choices
            are unlimited. We have investigated this industry and tried to
            provide you everything you need in a website design for a logistics
            company.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TruckingLogistics;
