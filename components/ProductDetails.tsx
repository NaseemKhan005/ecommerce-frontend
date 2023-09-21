"use client";

import { AiFillStar, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import CommonButton from "./CommonButton";
import { useStateContext } from "@/context/StateContext";
import { cn } from "@/lib/utils";

const ProductDetails = ({
  product: {
    name,
    stock,
    details,
    actualPrice,
    discountPrice,
    discount,
    category,
    rating,
    review,
  },
}: any) => {
  const starsArray = Array.from(
    { length: rating },
    (item: any, index: number) => <AiFillStar key={index} />
  );

  const { incQty, decQty, qty }: any = useStateContext();

  return (
    <div className="w-full h-full flex flex-col gap-1 lg:gap-2 text-light-black">
      <span>{category}</span>
      <h2 className="text-2xl md:text-3xl font-bold">{name}</h2>
      <div className="flex items-center gap-[1px] text-lg text-orange">
        {starsArray.map((star, index) => (
          <span key={index}>{star}</span>
        ))}
        <p className="text-sm ml-1 text-light-black/70">{review}+ Reviews</p>
      </div>
      <h3 className="font-semibold mt-2">Details:</h3>
      <p className="text-sm text-light-black lg:text-base">{details}</p>

      <div className="flex items-end gap-2 my-2">
        <p className="text-xl font-semibold">${discountPrice}.00</p>
        <s className="text-sm text-light-black/80">${actualPrice}.00</s>
        {stock && discount && discount.length && (
          <p
            className={cn(
              "text-xs w-fit text-white py-1 px-2",
              discount.includes("%") ? "bg-green-500" : "bg-orange"
            )}
          >
            {discount}
          </p>
        )}
      </div>

      <div className="flex items-center gap-3 mt-1 lg:mt-3 mb-3 lg:mb-6">
        <h3 className="font-semibold text-xl">Quantity:</h3>

        <div className="flex items-center justify-between w-[120px] border rounded-full">
          <AiOutlineMinus
            onClick={() => incQty()}
            className="cursor-pointer text-red-600 hover:bg-red-600/20 text-3xl p-1 pl-2 rounded-l-full"
          />
          <span>{qty}</span>
          <AiOutlinePlus
            onClick={() => decQty()}
            className="text-green-500 hover:bg-green-500/20 cursor-pointer text-3xl p-1 pr-2 rounded-r-full"
          />
        </div>
      </div>

      <div className="flex items-center gap-8">
        <CommonButton
          text="Buy now"
          customClasses="w-fit py-6 before:w-4 after:w-0 rounded text-base capitalize"
        />

        <CommonButton
          text="Add to cart"
          customClasses="w-fit bg-orange text-white py-6 rounded before:w-4 after:w-0"
        />
      </div>
    </div>
  );
};

export default ProductDetails;
