"use client";
import Image from "next/image";
import Link from "next/link";

import { LogoLightPNG, LogoPNG } from "@/assets/img";
import BurgerButton from "@/components/Header/components/Burger";
import { cn } from "@/utils/cn";

interface Props {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  isDark?: boolean;
}

const Header: React.FC<Props> = ({ isMenuOpen, setIsMenuOpen, isDark = false }) => {
  return (
    <header
      className={cn(
        "flex items-center justify-between border-b-[2px] py-2.5 max-md:py-[15px]",
        isDark ? "border-grey-400" : "border-grey-800",
      )}
    >
      <Link href="/" className="flex items-center gap-4">
        {/* <LogoSVG className="max-sm:h-10 max-sm:w-8" /> */}
        <Image src={isDark ? LogoLightPNG : LogoPNG} priority alt="Your Logo" className="max-sm:w-[114px]" />
      </Link>
      <BurgerButton isDark={isDark} isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
    </header>
  );
};

export default Header;
