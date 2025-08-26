import { cn } from "@/utils/cn";

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isDark?: boolean;
}

const BurgerButton: React.FC<Props> = ({ isOpen, setIsOpen, isDark = false }) => {
  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <button type="button" className="relative size-6 cursor-pointer transition-all duration-300" onClick={toggleMenu}>
      <span
        className={cn(
          "absolute bottom-1/2 left-0 mb-1 h-0.5 w-full translate-y-1/2 transition-all duration-300",
          isOpen && "mb-0 rotate-45",
          isDark ? "bg-gray-400" : "bg-gray-800",
        )}
      />
      <span
        className={cn(
          "absolute bottom-0 bottom-1/2 left-0 -mb-1 h-0.5 w-full translate-y-1/2 transition-all duration-300",
          isOpen && "mb-0 -rotate-45",
          isDark ? "bg-gray-400" : "bg-gray-800",
        )}
      />
    </button>
  );
};

export default BurgerButton;
