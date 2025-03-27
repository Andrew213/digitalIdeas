import { useState } from "react";

import { cn } from "@/utils/cn";

const BurgerButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <button type="button" className="relative size-6 cursor-pointer transition-all duration-300" onClick={toggleMenu}>
      <span
        className={cn(
          "absolute bottom-1/2 left-0 h-0.5 w-full translate-y-1/2 bg-gray-800 transition-all duration-300",
          isOpen && "rotate-45",
        )}
      />
      <span
        className={cn(
          "absolute bottom-0 bottom-1/2 left-0 -mb-1 h-0.5 w-full translate-y-1/2 bg-gray-800 transition-all duration-300",
          isOpen && "mb-0 -rotate-45",
        )}
      />
    </button>
  );
};

export default BurgerButton;
