"use client";

import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";
import Marquee from "react-fast-marquee";

import { works } from "@/app/(darkLayout)/about/_components/constants";
import { ArrowRightSVG } from "@/assets/icons";
import { cn } from "@/utils/cn";
import { useGSAP } from "@/utils/gsap";

const Page: React.FC = () => {
  const title1 = useRef(null);
  const root = useRef(null);
  const s1 = useRef<HTMLElement>(null);

  useGSAP(() => {
    const text = new SplitText(title1.current, { type: "chars, words" });

    gsap.set(text.words, { yPercent: 100, autoAlpha: 0 });
    gsap.set(title1.current, { opacity: 1 });
    gsap.to(text.words, {
      yPercent: 0,
      autoAlpha: 1,
      duration: 1.2,
      stagger: 0.06,
    });

    const highlights = document.querySelectorAll(".highlight-yellow");

    highlights.forEach((highlight) => {
      const splitHighlight = new SplitText(highlight, { type: "chars" });

      gsap.to(splitHighlight.chars, {
        color: "var(--color-yellow-400)",
        duration: 0.3,
        stagger: 0.05,
      });
    });

    gsap
      .timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: s1.current,
          start: "top top",
          pin: s1.current,
          pinSpacing: false,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      })
      .to(text.chars, { autoAlpha: 0, yPercent: -100, stagger: 0.06 }, 0)
      .to(".marquee", { x: "100%", duration: 2 }, 1);

    requestAnimationFrame(() => ScrollTrigger.refresh());

    const sections = gsap.utils.toArray<HTMLElement>(".sec");

    sections.forEach((sect, i) => {
      const isLast = i === sections.length - 1;
      const animLeft = sect.querySelectorAll(".anim-left");
      const animFade = sect.querySelectorAll(".anim-fade");
      const animRight = sect.querySelectorAll(".anim-right");

      const tl = gsap
        .timeline({ defaults: { ease: "power3.in" } })
        .fromTo(animFade, { autoAlpha: 0, duration: 0 }, { autoAlpha: 1 }, 0)
        .fromTo(animLeft, { xPercent: -100, autoAlpha: 0 }, { xPercent: 0, autoAlpha: 1, duration: 0.6 }, 0)
        .fromTo(animRight, { xPercent: 100, autoAlpha: 0 }, { xPercent: 0, autoAlpha: 1, duration: 0.6 }, 0);

      ScrollTrigger.create({
        trigger: sect,
        start: isLast ? "top-=10 top" : "top top",
        pinSpacing: isLast,
        pin: isLast ? false : sect,
        toggleActions: "play reverse play reverse",
        animation: tl,
      });
    });
  }, []);

  return (
    <div className="swipe-section text-blue-100" id="root" ref={root}>
      <section
        ref={s1}
        className="s1 height-without-header relative p-20 max-md:flex max-md:flex-col max-md:items-center max-md:justify-center max-md:p-10 max-md:px-0"
      >
        <div ref={title1} className="anim-top opacity-0 max-md:-mt-[102px] max-md:text-center max-sm:max-w-[216px]">
          <h1 className="text-anim h1 max-md:h1-mobile mb-2.5 max-md:mb-2 max-md:max-w-full max-md:text-left md:max-w-[535px]">
            ПРИВЕТ! МЫ —
            <span className="highlight-yellow">
              СООБЩЕСТВО <br /> <span className="inline-block w-full md:text-right"> IT-ВОЛОНТЕРОВ</span>
            </span>
          </h1>

          <span className="text-h4 font-h4 max-md:text-h4-mobile text-anim uppercase">в сфере цифровизации</span>
        </div>

        <div className="marquee absolute bottom-20 left-1/2 w-screen -translate-x-1/2 max-md:text-[12px]">
          <Marquee autoFill className="pointer-events-none tracking-[6.4px] whitespace-nowrap">
            <span className="marc-text mr-2 flex items-center gap-2">
              ЦЦСИ ЦИФРОИДЕИ <span className="">•</span>
            </span>
          </Marquee>
          <Marquee
            autoFill
            direction="right"
            className="pointer-events-none mt-6 tracking-[6.4px] whitespace-nowrap max-md:mt-4"
          >
            <span className="mr-2 flex items-center gap-2">
              АВТОНОМНАЯ НЕКОММЕРЧЕСКАЯ ОРГАНИЗАЦИЯ <span className="">•</span>
            </span>
          </Marquee>
        </div>
      </section>

      <section className="sec flex h-dvh flex-col justify-between py-[120px] max-md:py-10">
        <span className="text-h5 max-md:text-h5-mobile anim-fade leading-h5 top-0 left-0 text-blue-100">Кто мы</span>
        <h2 className="h2 max-md:h2-mobile anim-right font-h ml-auto w-full max-w-[674px] uppercase">
          <span className="flex justify-center justify-start max-md:justify-end">
            Мы любим то, <br className="hidden max-md:block" /> что делаем.
          </span>
          <span className="right-0 ml-auto block max-w-[374px] max-md:left-0 max-md:mt-4">
            МЫ ХОТИМ <br /> <span className="highlight-yellow right-0">БЫТЬ ПОЛЕЗНЫМИ.</span>
          </span>
        </h2>
        <div className="flex flex-wrap items-center justify-between gap-10 max-md:flex-col-reverse max-md:justify-center">
          <p className="h2 max-md:h2-mobile anim-left w-full max-w-[280px] uppercase">
            Главное — <span className="contetnt right-0 ml-auto w-fit md:block">желание!</span>
          </p>

          <p className="text max-sm:text-mobile max-md:max-[250px] anim-right mr-24 max-w-[560px] max-md:mr-0">
            Наша команда работает без финансовой поддержки, но мы уверены, что много хорошего и качественного можно
            сделать и без денег.
          </p>
        </div>
      </section>

      <section className="sec relative grid h-dvh py-[120px] max-md:py-10">
        <span className="text-h5 anim-fade absolute top-[120px] left-0 text-blue-100 max-md:top-10">Что мы делаем</span>

        <ul className="anim-fade m-auto w-full">
          {works.map((el, i) => {
            return (
              <li
                key={i}
                className={cn("border-i border-grey-600 flex w-full items-center gap-5 border-t py-10", {
                  "border-b": i === works.length - 1,
                })}
              >
                <div className="flex w-full max-w-[480px] items-center gap-[30px]">
                  <ArrowRightSVG className="anim-left size-[35px] shrink-0 fill-amber-500 text-white max-md:w-[27px]" />
                  <span className="h3 max-md:h3-mobile">{el.title}</span>
                </div>
                <span className="text max-sm:text-mobile">{el.text}</span>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default Page;
