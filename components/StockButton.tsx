const StockButton = () => {
  return (
    <div className="rounded-full bg-orange hover:bg-orange dark:bg-orange text-white dark:text-white hover:text-white text-center w-12 h-12 flex items-center justify-center text-xs absolute top-3 right-5 capitalize leading-none">
      <span>
        stock <br /> out
      </span>
    </div>
  );
};

export default StockButton;
