import { cn } from "@/lib/utils";

const DiscountButton = ({
  text,
  customClasses,
}: {
  text: string;
  customClasses?: string;
}) => {
  return (
    <div
      className={cn(
        "rounded-full bg-orange hover:bg-orange dark:bg-orange text-white dark:text-white hover:text-white text-center w-12 h-12 flex items-center justify-center text-sm absolute top-3 left-5 uppercase leading-none",
        customClasses
      )}
    >
      <span>{text}</span>
    </div>
  );
};

export default DiscountButton;
