"use client";

import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";
import Marquee from "react-fast-marquee";

import { useGSAP } from "@/utils/gsap";

const Page: React.FC = () => {
  const title1 = useRef(null);
  const root = useRef(null);
  const s1 = useRef<HTMLElement>(null);
  const s2 = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (title1.current) {
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
          scrollTrigger: {
            trigger: ".foo", // Элемент, который будет отслеживаться
            start: "top bottom", // Анимация срабатывает, когда верх элемента достигнет центра экрана
            once: true, // Анимация запускается только один раз
          },
        });
      });

      // const highlight = new SplitText(".highlight-yellow", { type: "chars" });
      // gsap.to(highlight.chars, {
      //   color: "var(--color-yellow-400)",
      //   duration: 0.3,
      //   stagger: 0.05,
      //   ease: "power3.in",
      //   scrollTrigger: {
      //     trigger: ".highlight",
      //     start: "top center",
      //   },
      // });

      // начальные состояния
      // gsap.set(s2.current, { opacity: 0, yPercent: 4 }); // s2 чуть ниже и скрыт
      // gsap.set(s1.current, { autoAlpha: 1, yPercent: 0 });

      // gsap
      //   .timeline({
      //     defaults: { ease: "none" },
      //     scrollTrigger: {
      //       trigger: s1.current,
      //       start: "top top+=102px",
      //       end: "+=100%",
      //       pinSpacing: false,
      //       endTrigger: s2.current,
      //       pin: "#wrapper",
      //       scrub: true,
      //       markers: true,
      //       invalidateOnRefresh: true,
      //     },
      //   })
      //   // s1 уезжает вверх и гаснет
      //   .to(text.chars, { autoAlpha: 0, yPercent: -100, stagger: 0.06 }, 0)
      //   // // s2 одновременно проявляется и поднимается на место
      //   .to(s2.current, { opacity: 1, yPercent: 0 }, 1);
    }

    // const currentIndex = 0;
    // let animating: boolean;
    // const swipePanels: Element[] = gsap.utils.toArray(".swipe-section .sec");

    // const splitMap = new Map<HTMLElement, SplitText>();

    // function ensureSplit(el: NodeListOf<HTMLElement>) {
    //   const animatedTexts: SplitText[] = [];
    //   el.forEach((el) => {
    //     let s = splitMap.get(el);
    //     if (!s) {
    //       s = new SplitText(el, { type: "chars, words" });
    //       splitMap.set(el, s);
    //     }
    //     animatedTexts.push(s);
    //   });
    //   return animatedTexts;
    // }

    // gsap.set(".y-100 .text-anim", { yPercent: 100, opacity: 0 });

    // const animText: NodeListOf<HTMLElement> = document.querySelectorAll(".text-anim:not(.s1 .text-anim)");

    // animText.forEach((text: HTMLElement) => {
    //   const s = new SplitText(text, { type: "chars" });
    //   splitMap.set(text, s);
    //   gsap.set(s.chars, { yPercent: -150, autoAlpha: 0 });
    // });

    // const gotoPanel = (index: number, scrollingDown: boolean) => {
    //   if (animating || index < 0 || index >= swipePanels.length) return;

    //   animating = true;
    //   currentIndex = index;
    //   const prev = scrollingDown ? swipePanels[index - 1] : swipePanels[index];
    //   const target = scrollingDown ? swipePanels[index] : swipePanels[index + 1];

    //   console.log({ prev, target, index, swipePanels });

    //   const prevTextEl = prev.querySelectorAll<HTMLElement>(".text-anim")!;
    //   const targetTextEl = target.querySelectorAll<HTMLElement>(".text-anim")!;
    //   const prevSplit = ensureSplit(prevTextEl);
    //   const targetSplit = ensureSplit(targetTextEl);

    //   const outText = { yPercent: -150, autoAlpha: 0, duration: 0.6, stagger: 0.02 };
    //   const inText = { yPercent: 0, autoAlpha: 1, duration: 0.6, stagger: 0.02 };

    //   const complete = () => {
    //     animating = false;
    //     if (index === swipePanels.length - 1) myObserver.disable();
    //   };

    //   const tl = gsap.timeline();

    //   if (scrollingDown) {
    //     prevSplit.forEach((text) => {
    //       tl.to(text.chars, outText, 0);
    //     });

    //     targetSplit.forEach((text) => {
    //       tl.to(text.chars, inText, 1);
    //     });

    //     tl.to({}, { duration: 0.01, onComplete: complete });

    //     // tl.to(targetSplit.chars, inTextFrom, { ...inTextTo, onComplete: complete })
    //     // tl.to(prevSplit, outText);
    //     // ВНИЗ: prev уходит вниз, target заезжает снизу; текст prev — разлёт, текст target — влёт
    //     // tl.to(prevSplit.chars, outText).to(prev, outPanelDown);
    //     // .fromTo(targetSplit.chars, inTextFrom, { ...inTextTo, onComplete: complete });
    //   } else {
    //     targetSplit.forEach((text) => {
    //       tl.to(text.chars, outText, 1);
    //     });

    //     prevSplit.forEach((text) => {
    //       tl.to(text.chars, inText, 2);
    //     });

    //     tl.to({}, { duration: 0.01, onComplete: complete });
    //   }
    // };

    // const myObserver = ScrollTrigger.observe({
    //   type: "wheel,touch",
    //   onUp: () => !animating && gotoPanel(currentIndex + 1, true),
    //   onDown: () => !animating && gotoPanel(currentIndex - 1, false),
    //   wheelSpeed: -1, // to match mobile behavior, invert the wheel speed
    //   tolerance: 10,
    //   preventDefault: true,
    //   onPress: (self) => {
    //     // on touch devices like iOS, if we want to prevent scrolling, we must call preventDefault() on the touchstart (Observer doesn't do that because that would also prevent side-scrolling which is undesirable in most cases)
    //     // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    //     ScrollTrigger.isTouch && self.event.preventDefault();
    //   },
    // });

    // ScrollTrigger.create({
    //   trigger: ".swipe-section",
    //   pin: true,
    //   start: "top top+=102",
    //   end: "+=5",
    //   markers: true,
    //   onEnterBack: (self) => {
    //     if (myObserver.isEnabled === false) {
    //       self.scroll(self.start);
    //       myObserver.enable();
    //       gotoPanel(currentIndex - 1, false);
    //     }
    //   },
    // });
  }, []);

  return (
    <div className="swipe-section text-blue-100" id="root" ref={root}>
      <section
        ref={s1}
        className="sec s1 height-without-header relative border-b-[2px] border-gray-400 p-20 max-md:flex max-md:flex-col max-md:items-center max-md:justify-center max-md:p-10 max-md:px-0"
      >
        {/** TEXT 1 */}
        <div ref={title1} className="opacity-0 max-md:-mt-[102px] max-md:text-center max-sm:max-w-[216px]">
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

      <section className="flex h-dvh flex-col justify-between py-[120px] max-md:py-10">
        <span className="text-h5 max-md:text-h5-mobile leading-h5 top-0 left-0 text-blue-100">кто мы</span>
        <h2 className="h2 max-md:h2-mobile font-h ml-auto w-full max-w-[674px] uppercase">
          <span className="flex justify-center justify-start max-md:justify-end">
            Мы любим то, <br className="hidden max-md:block" /> что делаем.
          </span>
          <span className="right-0 ml-auto block max-w-[374px] max-md:left-0 max-md:mt-4">
            МЫ ХОТИМ <br /> <span className="highlight-yellow right-0">БЫТЬ ПОЛЕЗНЫМИ.</span>
          </span>
        </h2>
        <div className="flex flex-wrap items-center justify-between gap-10 max-md:flex-col-reverse max-md:justify-center">
          <p className="h2 max-md:h2-mobile w-full max-w-[280px] uppercase">
            Главное — <span className="contetnt right-0 ml-auto w-fit md:block">желание!</span>
          </p>

          <p className="text max-sm:text-mobile max-md:max-[250px] mr-24 max-w-[560px] max-md:mr-0">
            Наша команда работает без финансовой поддержки, но мы уверены, что много хорошего и качественного можно
            сделать и без денег.
          </p>
        </div>
      </section>

      {/* <section className="sec s3 y-100 border-b-[2px] border-gray-400 p-20">
        <h2 className="text-h1 text-anim font-h1 leading-h1 mb-2.5 max-w-[535px]">
          CЕКЦИЯ3 <br /> <span className="inline-block w-full text-right"> IT-ВОЛОНТЕРОВ</span>
        </h2>
        <span className="text-h4 font-h4 text-anim uppercase">в сфере цифровизации</span>
      </section> */}
    </div>
  );
};

export default Page;
