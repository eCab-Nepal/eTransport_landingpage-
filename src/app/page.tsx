import Hero from "@/components/home/hero";
import Blogs from "@/components/home/blogs";
import WhatWeOffer from "@/components/home/what-we-offer";
import IndustrySector from "@/components/home/industry-sector";
import Info from "@/components/home/info";

function Home() {
  return (
    <main>
      <Hero />
      <Info />
      <IndustrySector />
      <WhatWeOffer />
    </main>
  );
}

export default Home;
