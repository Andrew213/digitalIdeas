"use client";

import { use, useRef } from "react";
import Marquee from "react-fast-marquee";

import { gsap, useGSAP } from "@/utils/gsap";

const Page: React.FC = () => {
  const root = useRef<HTMLDivElement>(null);
  const sections = useRef<HTMLElement[]>([]);
  const s1 = useRef<HTMLElement>(null);
  const s2 = useRef<HTMLElement>(null);

  const text1 = useRef<HTMLDivElement>(null);
  const text2 = useRef<HTMLDivElement>(null);
  const text3 = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: s1.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        // markers: true,
      },
    });
  }, []);

  // тут остановился. сделать анимацию секций

  return (
    <div className="text-blue-100" ref={root}>
      <section className="min-h-[calc(100dvh-102px)] border-b-[2px] border-gray-400 p-20">
        <div ref={text1}>
          <h2 className="text-h1 font-h1 leading-h1 mb-2.5 max-w-[535px]">
            ПРИВЕТ! МЫ — СООБЩЕСТВО <br /> <span className="inline-block w-full text-right"> IT-ВОЛОНТЕРОВ</span>
          </h2>
          <span className="text-h4 font-h4 uppercase">в сфере цифровизации</span>
        </div>
        <div className="absolute bottom-10 left-0 w-full">
          <Marquee autoFill className="pointer-events-none tracking-[6.4px] whitespace-nowrap">
            <span className="mr-2 flex items-center gap-2">
              ЦЦСИ ЦИФРОИДЕИ <span className="">•</span>
            </span>
          </Marquee>
          <Marquee autoFill direction="right" className="pointer-events-none mt-6 tracking-[6.4px] whitespace-nowrap">
            <span className="mr-2 flex items-center gap-2">
              АВТОНОМНАЯ НЕКОММЕРЧЕСКАЯ ОРГАНИЗАЦИЯ <span className="">•</span>
            </span>
          </Marquee>
        </div>
      </section>

      {/* <section
        ref={(el) => {
          if (el) sections.current[1] = el;
        }}
        className="relative min-h-[100dvh] border-b-[2px] border-gray-400 p-20"
      >
        <div ref={text2}>
          <h2 className="text-h1 font-h1 leading-h1 mb-2.5 max-w-[535px]">
            Секция 2! МЫ — Вторая секция <br /> <span className="inline-block w-full text-right"> IT-ВОЛОНТЕРОВ</span>
          </h2>
          <span className="text-h4 font-h4 uppercase">в сфере цифровизации</span>
        </div>
      </section>

      <section
        ref={(el) => {
          if (el) sections.current[2] = el;
        }}
        className="relative min-h-[100dvh] border-b-[2px] border-gray-400 p-20"
      >
        <div ref={text3}>
          <h2 className="text-h1 font-h1 leading-h1 mb-2.5 max-w-[535px]">
            Секция 3! МЫ — Третья секция <br /> <span className="inline-block w-full text-right"> IT-ВОЛОНТЕРОВ</span>
          </h2>
          <span className="text-h4 font-h4 uppercase">в сфере цифровизации</span>
        </div>
      </section> */}
    </div>
  );
};

export default Page;
