"use client";

import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";

import { Vector9SVG, Vector10SVG } from "@/assets/icons";
import { TexturePNG } from "@/assets/img";
import Header from "@/components/Header/Header";
import { gsap } from "@/gsap";

interface Props {
  children: React.ReactNode;
}

function tweenProperty(el: HTMLElement, width: number, height: number): void {
  const svgWidth = el.offsetWidth;
  const svgHeight = el.offsetHeight;

  const xArea = width > svgWidth ? width - svgWidth : svgWidth - width;
  const yArea = height > svgHeight ? height - svgHeight : svgHeight - height;

  const randomToX = gsap.utils.random(0, xArea);
  const randomToY = gsap.utils.random(0, yArea);

  const randomFromX = gsap.utils.random(0, xArea);
  const randomFromY = gsap.utils.random(0, yArea);
  console.log("window.innerWidth ", window.innerWidth);
  gsap.to(el, {
    motionPath: {
      path: [
        { x: randomFromX, y: randomFromY },
        { x: randomToX, y: randomToY },
      ],
      curviness: 3,
    },
    onComplete: tweenProperty,
    ease: "linear",
    duration: 5,
    onCompleteParams: [el, width, height],
  });
}

const Layout: React.FC<Props> = ({ children }) => {
  const svg1 = useRef<HTMLImageElement>(null);

  const svg2 = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    if (svg1.current && svg2.current) {
      const { width: svg1Width } = svg1.current.getBoundingClientRect();
      console.log("svg1Width ", svg1Width);
      tweenProperty(svg1.current, window.innerWidth, window.innerHeight);
      tweenProperty(svg2.current, window.innerWidth, window.innerHeight);
    }
  });

  return (
    <>
      <Image
        src={Vector9SVG}
        alt=""
        className="-right-100% fixed top-0 z-0 size-[400px] max-w-none"
        objectFit="contain"
        ref={svg1}
      />
      <Image
        src={Vector10SVG}
        alt=""
        className="-right-100% fixed z-0 size-[400px] max-w-none"
        objectFit="contain"
        ref={svg2}
      />
      <Image alt="" src={TexturePNG} objectFit="contain" className="fixed inset-0 h-dvh w-dvw mix-blend-overlay" />

      <div className="relative flex h-dvh flex-col px-32 max-md:px-4">
        <Header />
        <main className="shrink-0 grow basis-auto">{children}</main>
      </div>
    </>
  );
};

export default Layout;
