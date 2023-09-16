import React from "react";
import { Button } from "./ui/button";

const CommonButton = ({ text }: { text: string }) => {
  return (
    <Button
      variant="outline"
      className="uppercase px-7 py-5 font-semibold text-orange border-orange border-[1px] w-fit rounded-none bg-transparent relative before:absolute after:absolute after:w-2 before:w-2 after:rotate-12 before:rotate-12 before:top-0 after:top-0 before:transition-all after:transition-all after:duration-200 before:duration-500 hover:bg-orange transition-all duration-500 before:h-full before:bg-white/50 after:h-full after:bg-white/50 after:delay-100 before:delay-100 before:-left-full hover:text-white hover:before:left-[150%]  after:-left-[150%] hover:after:left-[130%] overflow-hidden"
    >
      {text}
    </Button>
  );
};

export default CommonButton;
