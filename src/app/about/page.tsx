import BreadCrumb from "@/components/about/breadcrumb";
import Mission from "@/components/about/mission";
import OtherGrid from "@/components/about/other-grid";
import Vision from "@/components/about/vision";
import WhoWeAre from "@/components/about/who-we-are";

function About() {
  return (
    <main>
      <BreadCrumb />
      <WhoWeAre />
      <Vision />
      <Mission />
      <OtherGrid />
    </main>
  );
}

export default About;
