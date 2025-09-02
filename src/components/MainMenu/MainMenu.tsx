import { useRef } from "react";

import { navLinks } from "@/components/MainMenu/constants";
import NavLink from "@/lib/components/NavLink/NavLink";
import { cn } from "@/utils/cn";
import { gsap, useGSAP } from "@/utils/gsap";

interface Props {
  isActive?: boolean;
  mainContentRef?: React.RefObject<HTMLDivElement | null>;
  setIsActive?: React.Dispatch<React.SetStateAction<boolean>>;
  isDark?: boolean;
}

const MainMenu: React.FC<Props> = ({ isActive, mainContentRef, setIsActive, isDark = false }) => {
  const linksRef = useRef<HTMLLIElement[]>([]);

  const tl = useRef<GSAPTimeline>(null);

  const navWrapper = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      if (!tl.current && mainContentRef) {
        tl.current = gsap
          .timeline({ paused: true })
          .to(mainContentRef.current, { xPercent: -50, autoAlpha: 0, duration: 0.2 })
          .set(mainContentRef.current, { display: "none" })
          .set(navWrapper.current, { display: "block" })
          .fromTo(
            linksRef.current,
            { xPercent: 100, autoAlpha: 0 },
            { xPercent: 0, autoAlpha: 1, duration: 0.2, stagger: 0.05, ease: "power2.out" },
            "<",
          );

        // очистка инлайнов после закрытия (reverse завершён)
        tl.current.eventCallback("onReverseComplete", () => {
          gsap.set([mainContentRef.current, navWrapper.current, ...linksRef.current], {
            clearProps: "all",
          });
        });
      }
    }, navWrapper); // scope — корень меню, можно root div

    // ВАЖНО: cleanup useGSAP — тут, снаружи
    return () => {
      tl.current?.kill();
      ctx.revert();
    };
  }, [mainContentRef]); // deps по желанию

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
    <div className="hidden overflow-hidden p-20 max-md:p-10" ref={navWrapper}>
      <nav>
        <ul className="grid grid-cols-2 grid-cols-[200px_100px] gap-x-[221px] gap-y-5 max-xl:gap-x-20 max-md:grid-cols-1 max-md:gap-y-4">
          {navLinks.map(({ href, title }, i) => {
            return (
              <li
                key={i}
                className="opacity-0"
                onClick={() => {
                  setIsActive?.(false);
                }}
                ref={(el) => {
                  if (el) {
                    linksRef.current[i] = el;
                  }
                }}
              >
                <NavLink
                  title={title?.toString().toUpperCase()}
                  href={href}
                  className={cn("h2 max-md:h2-mobile", {
                    "text-blue-100": isDark,
                  })}
                />
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default MainMenu;
