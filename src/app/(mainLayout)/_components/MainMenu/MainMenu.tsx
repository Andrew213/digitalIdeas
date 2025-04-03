import { useEffect, useRef } from "react";

import { navLinks } from "@/app/(mainLayout)/_components/MainMenu/constants";
import { gsap, useGSAP } from "@/utils/gsap";
import NavLink from "@/lib/components/NavLink/NavLink";

interface Props {
  isActive?: boolean;
  mainContentRef?: React.RefObject<HTMLDivElement | null>;
}

const MainMenu: React.FC<Props> = ({ isActive, mainContentRef }) => {
  const linksRef = useRef<HTMLLIElement[]>([]);

  const tl = useRef<GSAPTimeline>(null);

  const navWrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!tl.current) {
      tl.current = gsap.timeline({ paused: true });
    }
  }, []);

  useEffect(() => {
    if (tl.current && mainContentRef?.current) {
      const timeLine = tl.current;
      const mainContent = mainContentRef.current;

      tl.current.clear();

      timeLine
        .to(mainContent, {
          xPercent: -50,
          opacity: 0,
          display: "none",
          delay: 0,
          duration: 0.2,
        })
        .to(navWrapper.current, {
          display: "block",
          delay: 0,
          duration: 0,
        })
        .fromTo(
          linksRef.current,
          { xPercent: 100, opacity: 0 },
          {
            xPercent: 0,
            opacity: 1,
            duration: 0.2,
            stagger: 0.05,
            ease: "power2.out",
          },
          "<",
        );
      return (): void => {
        tl.current!.kill();
      };
    }
  }, []);

  useGSAP(() => {
    const timeLine = tl.current;
    if (timeLine && mainContentRef?.current) {
      if (isActive) {
        timeLine.play();
      } else {
        timeLine.reverse();
      }
    }
  }, [isActive]);

  return (
    <div className="hidden p-20 max-md:p-10" ref={navWrapper}>
      <nav>
        <ul className="grid grid-cols-2 grid-cols-[200px_100px] gap-x-[221px] gap-y-5 max-xl:gap-x-20 max-md:grid-cols-1 max-md:gap-y-4">
          {navLinks.map(({ href, title }, i) => {
            return (
              <li
                key={i}
                className="opacity-0"
                ref={(el) => {
                  if (el) {
                    linksRef.current[i] = el;
                  }
                }}
              >
                <NavLink title={title?.toString().toUpperCase()} href={href} className="h2 max-md:h2-mobile" />
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default MainMenu;
