import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import { gsap } from "@/utils/gsap";

export const animatePageIn = () => {
  const mainContent = document.getElementById("mainContent");

  if (mainContent) {
    gsap.to(mainContent, {
      opacity: 1,
      y: 0,
      duration: 1,
    });
  }
};

export const animatePageOut = (href: string, router: AppRouterInstance) => {
  const mainContent = document.getElementById("mainContent");

  if (mainContent) {
    const tl = gsap.timeline({});
    tl.to(
      mainContent,
      {
        opacity: 0,
        y: 100,
        onComplete: () => {
          router.push(href);
        },
      },
      0,
    )

      .to(
        mainContent,
        {
          opacity: 1,
          y: 0,
          duration: 1,
        },
        1,
      );
  }
};
