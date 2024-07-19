"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { config } from "@/config";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FunctionComponent } from "react";
import logo from "../../public/logo.svg";
import Image from "next/image";
interface MenuItem {
  name: string;
  href: string;
  openInNewTab?: boolean;
}
const menuItems: MenuItem[] = [
  { name: "Blog", href: "/" },
  { name: "About", href: "/about" },
];

export const Header: FunctionComponent = () => {
  return (
    <section className="flex items-center justify-center mt-8 md:mt-16 mb-12">
      <Link href="/">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
          <Image
            src={logo}
            width={100}
            height={100}
            alt={"logo"}
          />
        </h1>
      </Link>
    </section>
  );
};
