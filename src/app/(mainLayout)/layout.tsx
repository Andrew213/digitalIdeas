"use client";

import Image from "next/image";
import { PropsWithChildren, useEffect, useRef, useState } from "react";

import { Vector9SVG, Vector10SVG } from "@/assets/icons";
import { TexturePNG } from "@/assets/img";
import Header from "@/components/Header/Header";
import MainMenu from "@/components/MainMenu/MainMenu";
import { gsap, useGSAP } from "@/utils/gsap";
import { animatePageIn } from "@/utils/pageAnimations";

function tweenProperty(el: HTMLElement, width: number, height: number): void {
  const svgWidth = el.offsetWidth;
  const svgHeight = el.offsetHeight;

  const maxX = width - svgWidth;
  const maxY = height - svgHeight;

  const randomX1 = gsap.utils.random(-svgWidth, maxX);
  const randomY1 = gsap.utils.random(0, maxY);
  const randomX2 = gsap.utils.random(-svgWidth, maxX);
  const randomY2 = gsap.utils.random(0, maxY);

  gsap.to(el, {
    motionPath: {
      path: [
        { x: randomX1, y: randomY1 },
        { x: randomX2, y: randomY2 },
      ],
      curviness: 3,
    },
    onComplete: tweenProperty,
    ease: "linear",
    duration: 5,
    onCompleteParams: [el, width, height],
  });
}

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const svg1 = useRef<HTMLImageElement>(null);

  const svg2 = useRef<HTMLImageElement>(null);

  const mainContentRef = useRef<HTMLDivElement>(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useGSAP(() => {
    if (svg1.current && svg2.current) {
      tweenProperty(svg1.current, window.innerWidth, window.innerHeight);
      tweenProperty(svg2.current, window.innerWidth, window.innerHeight);
    }
  }, []);

  useEffect(() => {
    animatePageIn();
  }, []);

  return (
    <>
      <Image
        src={Vector9SVG}
        alt=""
        className="fixed top-0 right-[0px] z-0 size-[1400px] max-w-none max-md:left-0"
        objectFit="contain"
        ref={svg1}
      />
      <Image
        src={Vector10SVG}
        alt=""
        className="fixed right-[0px] z-0 size-[1400px] max-w-none max-md:right-0"
        objectFit="contain"
        ref={svg2}
      />
      <Image alt="" src={TexturePNG} objectFit="contain" className="fixed inset-0 h-dvh w-dvw mix-blend-overlay" />

      <div className="relative flex h-dvh flex-col px-32 max-xl:px-4">
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <main className="shrink-0 grow basis-auto">
          {
            <div
              style={{
                height: "calc(100vh - 112px)",
              }}
            >
              <div
                style={{
                  opacity: 0,
                  height: "100%",
                  transform: "translateY(100px)",
                }}
                id="mainContent"
                ref={mainContentRef}
              >
                {children}
              </div>

              <MainMenu isActive={isMenuOpen} setIsActive={setIsMenuOpen} mainContentRef={mainContentRef} />
            </div>
          }
        </main>
      </div>
    </>
  );
};

export default Layout;
