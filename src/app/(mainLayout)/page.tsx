"use client";

import Link from "next/link";

import { data, mainLinks } from "@/app/(mainLayout)/constants";
import { InstaSVG, MailSVG, VkSVG } from "@/assets/icons";
import NavLink from "@/lib/components/NavLink/NavLink";
import { cn } from "@/utils/cn";

const Home: React.FC = () => {
  return (
    <>
      <div className="flex size-full flex-col">
        <div className="border-grey-800 flex size-full flex-col border-b-[2px] p-20 max-md:p-10">
          <div className="flex h-full justify-between max-xl:flex-col">
            <h1 className="max-xl:font-h1-mobile font-h1 text-h1 max-xl:text-h1-mobile leading-h1 max-xl:leading-h1-mobile text-grey-800 z-10 max-w-[49px]">
              {data.mainTitle.toUpperCase()}
            </h1>
            <div className="z-10 flex flex-col gap-10 max-xl:flex-row md:-mr-20">
              <Link href="#">
                <InstaSVG width={20} className="text-grey-800" />
              </Link>
              <Link href="#">
                <VkSVG width={20} className="text-grey-800" />
              </Link>
              <Link href="#">
                <MailSVG width={20} className="text-grey-800" />
              </Link>
            </div>
          </div>
        </div>
        <ul className="flex flex-row gap-[clamp(32px,10vw,15rem)] p-20 max-xl:flex-col max-xl:gap-4 max-md:p-[42px]">
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
