"use client";
import Image from "next/image";
import Link from "next/link";

import { LogoSVG } from "@/assets/icons";
import { LogoText } from "@/assets/img";
import BurgerButton from "@/components/Header/components/Burger";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between border-b-[2px] border-gray-800 py-2.5 max-md:py-[15px]">
      <Link href="/" className="flex items-center gap-4">
        <LogoSVG className="max-sm:h-10 max-sm:w-8" />
        <Image src={LogoText} priority alt="Your Logo" className="max-sm:w-[114px]" />
      </Link>
      <BurgerButton />
    </header>
  );
};

export default Header;
