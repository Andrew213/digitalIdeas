"use client";
import Image from "next/image";
import Link from "next/link";

import { LogoSVG, LogoTextSVG } from "@/assets/icons";
import BurgerButton from "@/components/Header/components/Burger";

const Header: React.FC = () => {
  return (
    <header className="py-2.5 border-b-[2px] flex justify-between items-center border-gray-800">
      <Link href="/" className="flex items-center gap-4">
        <Image src={LogoSVG} alt="Your Logo" />
        <Image src={LogoTextSVG} alt="Your Logo" />
      </Link>
      <BurgerButton />
    </header>
  );
};

export default Header;
