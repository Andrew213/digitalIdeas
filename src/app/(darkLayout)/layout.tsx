"use client";

import { PropsWithChildren, useRef, useState } from "react";

import Header from "@/components/Header/Header";
import MainMenu from "@/components/MainMenu/MainMenu";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mainContentRef = useRef<HTMLDivElement>(null);

  return (
    <div id="wrapper" className="flex flex-col overflow-hidden bg-gray-800 bg-[url(/Texture2.png)] px-32 max-xl:px-4">
      <Header isMenuOpen={isMenuOpen} isDark setIsMenuOpen={setIsMenuOpen} />
      <main className="min-h-0 flex-1 grow">
        <div id="mainContent" ref={mainContentRef}>
          {children}
        </div>
        <MainMenu isDark isActive={isMenuOpen} setIsActive={setIsMenuOpen} mainContentRef={mainContentRef} />
      </main>
    </div>
  );
};

export default Layout;
