"use client";

import Link from "next/link";
import { useRef } from "react";

import { data, mainLinks } from "@/app/(mainLayout)/constants";
import { InstaSVG, MailSVG, VkSVG } from "@/assets/icons";
import NavLink from "@/lib/components/NavLink/NavLink";
import { cn } from "@/utils/cn";

const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className="flex size-full flex-col">
        <div className="flex size-full flex-col border-b-[2px] border-gray-800 max-md:p-10" ref={containerRef}>
          <div className="flex h-full flex-col justify-between">
            <h1 className="max-md:font-h1-mobile font-h1 text-h1 max-md:text-h1-mobile leading-h1 max-md:leading-h1-mobile z-10 text-gray-800">
              {data.mainTitle.toUpperCase()}
            </h1>
            <div className="z-10 flex gap-10">
              <Link href="#">
                <InstaSVG width={20} className="text-gray-800" />
              </Link>
              <Link href="#">
                <VkSVG width={20} className="text-gray-800" />
              </Link>
              <Link href="#">
                <MailSVG width={20} className="text-gray-800" />
              </Link>
            </div>
          </div>
        </div>
        <ul className="flex flex-col gap-4 max-sm:p-[42px]">
          {mainLinks.map(({ href, title }, i) => {
            return (
              <li key={i}>
                <NavLink
                  title={title}
                  href={href}
                  showArrow
                  className={cn(i === 0 && "max-w-[110px]", i === 1 && "max-w-[141px]", i === 2 && "max-w-[97px]")}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Home;
