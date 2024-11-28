import BreadCumb from "@/components/services/breadcrumb";
import InternationalLogistics from "@/components/services/international-logistics";
import OurServices from "@/components/services/our-services";
import TruckingLogistics from "@/components/services/trucking-logistics";
import WhyChooseTrucking from "@/components/services/why-choose-trucking";
import ServiceComponent from "@/components/services/services";

function Services() {
  return (
    <main>
      <BreadCumb />
      <ServiceComponent />
      <InternationalLogistics />
      <TruckingLogistics />
      <WhyChooseTrucking />
      <OurServices />
    </main>
  );
}

export default Services;
