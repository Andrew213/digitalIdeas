import type { LinkProps } from "next/link";
import Link from "next/link";
import type React from "react";

import { ArrowRightSVG } from "@/assets/icons";
import { cn } from "@/utils/cn";

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
  return (
    <Link target={external ? "_blank" : undefined} onClick={onClick} href={href} {...rest}>
      <div className={cn(showArrow && "flex items-center gap-2")}>
        <span className={cn("max-sm:text-h4-mobile max-sm:font-h4-mobile text-h4 font-h4 text-gray-800", className)}>
          {title}
        </span>
        {showArrow && <ArrowRightSVG className="shrink-0 max-sm:w-[28px]" />}
      </div>
    </Link>
  );
};

export default NavLink;
