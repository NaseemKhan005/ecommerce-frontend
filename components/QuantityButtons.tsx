"use client";

import { useStateContext } from "@/context/StateContext";
import { cn } from "@/lib/utils";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const QuantityButtons = ({ customClasses }: { customClasses?: string }) => {
  const { qty, decQty, incQty }: any = useStateContext();

  return (
    <div
      className={cn(
        "select-none flex items-center justify-between w-[120px] border rounded-full",
        customClasses
      )}
    >
      <AiOutlineMinus
        onClick={() => decQty()}
        className="cursor-pointer text-red-600 hover:bg-red-600/20 text-3xl p-1 pl-2 rounded-l-full"
      />
      <span>{qty}</span>
      <AiOutlinePlus
        onClick={() => incQty()}
        className="text-green-500 hover:bg-green-500/20 cursor-pointer text-3xl p-1 pr-2 rounded-r-full"
      />
    </div>
  );
};

export default QuantityButtons;
