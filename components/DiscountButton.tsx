const DiscountButton = ({ text }: { text: string }) => {
  return (
    <div className="rounded-full bg-orange hover:bg-orange dark:bg-orange text-white dark:text-white hover:text-white text-center w-12 h-12 flex items-center justify-center text-sm absolute top-3 left-5 uppercase leading-none">
      <span>{text}</span>
    </div>
  );
};

export default DiscountButton;
