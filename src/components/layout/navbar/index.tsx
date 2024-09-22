"use client";

import logo from "@/assets/logo.png";
import Image from "next/image";
import { navigation } from "./navigation";
import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

function Navbar() {
  const pathname = usePathname();

  return (
    <header className=" bg-white shadow-lg">
      <nav className="flex items-center justify-between layout p-4">
        <Link href={"/"}>
          {" "}
          <Image src={logo} alt="logo" />
        </Link>
        <div className="md:flex gap-6 items-center hidden ">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={cn("font-semibold uppercase text-sm", {
                "text-success-main border-b-2  border-success-main":
                  pathname === item.path,
              })}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <Sheet>
          <SheetTrigger>
            {" "}
            <Menu className="cursor-pointer inline-block md:hidden" size={32} />
          </SheetTrigger>
          <SheetContent>
            <div className="mt-8 flex flex-col gap-4 items-center">
              {" "}
              <SheetClose asChild>
                <Link href={"/"} className="text-lg font-medium">
                  Home
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href={"/services"} className="text-lg font-medium">
                  Services
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href={"/about"} className="text-lg font-medium">
                  About Us
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href={"/contact"} className="text-lg font-medium">
                  Contact
                </Link>
              </SheetClose>
            </div>
            <div className="mt-8 flex justify-center">
              <SheetClose asChild>
                <Link href={"/"}>
                  <Image src={logo} alt="logo" />
                </Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}

export default Navbar;
