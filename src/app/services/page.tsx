import BreadCumb from "@/components/services/breadcrumb";
import InternationalLogistics from "@/components/services/international-logistics";
import OurServices from "@/components/services/our-services";
import TruckingLogistics from "@/components/services/trucking-logistics";
import WhyChooseTrucking from "@/components/services/why-choose-trucking";

function Services() {
  return (
    <main>
      <BreadCumb />
      <InternationalLogistics />
      <TruckingLogistics />
      <WhyChooseTrucking />
      <OurServices />
    </main>
  );
}

export default Services;
