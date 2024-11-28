import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-[#25272E]">
      <div className="layout grid grid-cols-1 lg:grid-cols-4 gap-10 md:gap-16  py-12">
        <div className="flex flex-col gap-4 col-span-1 sm:col-span-2">
          <p className="uppercase font-bold text-neutral-100">
            newsletter subscribe
          </p>

          <p className="text-neutral-200 text-sm font-light">
            Subscribe to our newsletter and we will inform you about newest
            projects and promotions.
          </p>

          <div className="relative">
            <Input className="h-12 bg-neutral-400" placeholder="Your Email" />
            <div className="absolute  top-0 right-0 flex flex-col py-2 px-4 h-full bg-success-secondary rounded-md">
              <Mail size={32} className="shrink-0 rounded-md text-white" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="uppercase font-bold text-neutral-100">quick links</p>

          <div className="flex flex-col gap-4">
            <Link
              href={"/"}
              className="text-sm text-neutral-200 hover:text-blue-200 transition-all"
            >
              Home
            </Link>

            <Link
              href={"/services"}
              className="text-sm text-neutral-200 hover:text-blue-200 transition-all"
            >
              Services
            </Link>
            <Link
              href={"/about"}
              className="text-sm text-neutral-200 hover:text-blue-200 transition-all"
            >
              About Us
            </Link>

            <Link
              href={"/contact"}
              className="text-sm text-neutral-200 hover:text-blue-200 transition-all"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="uppercase font-bold text-neutral-100">contact us</p>

          <div className="flex text-neutral-200 flex-col gap-1">
            <p className="text-sm font-light">
              Tilottama-13, Patthardadha, 
            </p>
            <p className="text-sm font-light">Rupandehi, Lumbini</p>
            <p>9857029740</p>
            <p className="text-sm font-light">lokraj@nepalets.com</p>
          </div>
        </div>
      </div>

      <div className="layout py-4">
        <p className="text-neutral-50 text-center">
          ETS Nepal – Empowering Seamless Transportation in Nepal.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
