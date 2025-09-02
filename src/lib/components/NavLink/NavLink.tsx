import type { LinkProps } from "next/link";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type React from "react";

import { ArrowRightSVG } from "@/assets/icons";
import { cn } from "@/utils/cn";
import { animatePageOut } from "@/utils/pageAnimations";

export type NavLinkProps = {
  title: React.ReactNode;
  href: string;
  className?: string | undefined;
  onClick?: () => void;
  external?: boolean;
  isActive?: boolean;
  showArrow?: boolean;
} & LinkProps;

const NavLink: React.FC<NavLinkProps> = ({
  title,
  href,
  className,
  onClick,
  external,
  isActive,
  showArrow,
  ...rest
}) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    animatePageOut(href, router);
  };

  return (
    <Link target={external ? "_blank" : undefined} onClick={handleClick} href={href} {...rest}>
      <div className={cn(showArrow && "flex items-center gap-10 max-sm:gap-2")}>
        <span className={cn("max-sm:text-h4-mobile max-sm:font-h4-mobile text-h4 font-h4 text-grey-800", className)}>
          {title}
        </span>
        {showArrow && <ArrowRightSVG className="w-[28px] shrink-0 fill-[#504C4A]" />}
      </div>
    </Link>
  );
};

export default NavLink;
