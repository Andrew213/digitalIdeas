import { useState } from "react";

import { cn } from "@/utils/cn";

const BurgerButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <button
      type="button"
      className="relative cursor-pointer size-6 transition-all duration-300"
      onClick={toggleMenu}
    >
      <span
        className={cn(
          "absolute w-full bg-gray-800 h-0.5 left-0 bottom-1/2 transition-all translate-y-1/2   duration-300",
          isOpen && "rotate-45"
        )}
      />
      <span
        className={cn(
          "absolute w-full bg-gray-800 h-0.5 left-0 bottom-0 bottom-1/2 -mb-1  translate-y-1/2 transition-all duration-300",
          isOpen && "-rotate-45 mb-0"
        )}
      />
    </button>
  );
};

export default BurgerButton;
