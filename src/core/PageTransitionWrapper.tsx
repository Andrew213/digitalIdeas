"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

import { gsap } from "@/utils/gsap";

interface PageTransitionWrapperProps {
  children: React.ReactNode;
}

const PageTransitionWrapper: React.FC<PageTransitionWrapperProps> = ({ children }) => {
  const pathname = usePathname();
  const [previousPathname, setPreviousPathname] = useState(pathname); // Состояние для хранения предыдущего пути
  const pageContent = useRef(null);

  useEffect(() => {
    if (pathname !== previousPathname && pageContent.current) {
      console.log(1);
      // 1. Анимация выхода (исчезновение) предыдущей страницы
      gsap.to(pageContent.current, {
        opacity: 0,
        y: -50, // Смещение вверх (можно изменить)
        duration: 0.3,
        onComplete: () => {
          // 2. После завершения анимации выхода:
          //    - Обновляем previousPathname
          //    - Запускаем анимацию входа (появление) новой страницы
          setPreviousPathname(pathname);

          gsap.fromTo(
            pageContent.current,
            { opacity: 0, y: 50 }, // Начальное состояние для новой страницы
            { opacity: 1, y: 0, duration: 0.3, clearProps: "all" }, // Конечное состояние
          );
        },
      });
    } else {
      // 3. При первой загрузке страницы (или если pathname не изменился)
      gsap.fromTo(pageContent.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.3, clearProps: "all" });
    }
  }, [pathname, previousPathname]);

  return <div ref={pageContent}>{children}</div>;
};

export default PageTransitionWrapper;
