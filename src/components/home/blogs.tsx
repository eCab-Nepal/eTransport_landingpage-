import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

import blogOne from "@/assets/Home Page/Home-Section-02_01.png";
import blogTwo from "@/assets/Home Page/Home-Section-02_03.png";
import blogThree from "@/assets/Home Page/Home-Section-02_04.png";
import Image from "next/image";

function Blogs() {
  return (
    <section className="bg-[#1B2936] py-12">
      <div className="layout grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="rounded-none">
          <Image src={blogOne} alt="blog one" />
          <CardHeader>
            <div className="h-1 w-16 mb-3 bg-success-secondary" />
            <CardTitle className="mt-2 uppercase text-success-main">
              Group Shipping
            </CardTitle>
            <CardDescription>
              We have a wide experience in overland industry specific logistic
              solutions like pharmaceutical logistics, retail and automotive
              logistics by train or road.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="rounded-none">
          <Image src={blogTwo} alt="blog one" />

          <CardHeader>
            <div className="h-1 w-16 mb-3 bg-success-secondary" />
            <CardTitle className=" uppercase text-success-main">
              LARGE PROJECTS
            </CardTitle>
            <div>
              <CardDescription>
                We bring your goods safely to worldwide destinations with our
                great sea fright services. We offer LLC and FLC shipments that
                are fast and effective with no delays.
              </CardDescription>
            </div>
          </CardHeader>
        </Card>

        <Card className="rounded-none">
          <Image src={blogThree} alt="blog one" />

          <CardHeader>
            <div className="h-1 w-16 mb-3 bg-success-secondary" />
            <CardTitle className="mt-2 uppercase text-success-main">
              INTERNATIONAL AIR FREIGHT
            </CardTitle>
            <CardDescription>
              We provide full supply chain management package including cost
              effective and fast sea freight. You can also combine this package
              with other means of transportation.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="mt-6 layout flex justify-center">
        <Button
          variant={"success"}
          size={"3xl"}
          className="text-lg tracking-wide"
        >
          View Details
        </Button>
      </div>
    </section>
  );
}

export default Blogs;
