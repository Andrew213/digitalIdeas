"use client";

import { PropsWithChildren, useRef, useState } from "react";

import Header from "@/components/Header/Header";
import MainMenu from "@/components/MainMenu/MainMenu";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mainContentRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className="flex min-h-screen flex-col bg-gray-800 bg-[url(/Texture2.png)] px-32 max-xl:px-4">
        <Header isMenuOpen={isMenuOpen} isDark setIsMenuOpen={setIsMenuOpen} />
        <main className="min-h-0 flex-1 shrink-0 grow basis-auto" ref={mainContentRef}>
          {children}
          <MainMenu isDark isActive={isMenuOpen} setIsActive={setIsMenuOpen} mainContentRef={mainContentRef} />
        </main>
      </div>
    </>
  );
};

export default Layout;
