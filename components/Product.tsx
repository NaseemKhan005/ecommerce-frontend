"use client";

import { AiFillStar, AiOutlineEye, AiOutlinePlus } from "react-icons/ai";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

import { urlFor } from "@/lib/client";
import DiscountButton from "./DiscountButton";
import StockButton from "./StockButton";
import { cn } from "@/lib/utils";

const Product = ({ product }: any) => {
  const [showIcons, setShowIcons] = useState(false);
  const [showImage, setShowImage] = useState(false);

  const {
    image,
    category,
    name,
    discountPrice,
    actualPrice,
    stock,
    discount,
    slug,
    rating,
    review,
  } = product;

  const starsArray = Array.from(
    { length: rating },
    (item: any, index: number) => <AiFillStar key={index} />
  );

  return (
    <Link href={`/product/${slug.current}`}>
      <div
        onMouseEnter={() => setShowIcons(true)}
        onMouseLeave={() => setShowIcons(false)}
        className="relative w-full flex flex-col gap-3 cursor-pointer overflow-hidden"
      >
        <div
          onMouseEnter={() => setShowImage(true)}
          onMouseLeave={() => setShowImage(false)}
          className="bg-[#F6F8FA]"
        >
          {showImage ? (
            <Image
              src={`${urlFor(image[1].asset)}`}
              alt="featured image"
              width={500}
              height={500}
              className="h-[280px] w-full object-center object-contain 2xl:object-contain mix-blend-multiply"
            />
          ) : (
            <Image
              src={`${urlFor(image[0].asset)}`}
              alt="featured image"
              width={500}
              height={500}
              className="h-[280px] w-full object-center object-contain 2xl:object-contain mix-blend-multiply"
            />
          )}
        </div>
        <div>
          <span className="text-sm text-light-black/60 dark:text-white/60 capitalize">
            {category}
          </span>
          <p className="font-[500] capitalize hover:text-orange">{name}</p>
          <div className="flex items-center gap-[1px] text-orange my-[1px]">
            {starsArray.map((star, index) => (
              <span key={index}>{star}</span>
            ))}
          </div>
          {!(discountPrice && discountPrice.length) ? (
            <div className="flex items-center gap-4">
              <p className="font-semibold text-light-black/80 dark:text-white">
                ${discountPrice}.00
              </p>
              <s className="text-sm text-light-black/60 dark:text-white/60">
                ${actualPrice}.00
              </s>
            </div>
          ) : (
            <p className="font-semibold text-light-black/80">
              ${actualPrice}.00
            </p>
          )}
        </div>
        <Link
          href="/"
          className={cn(
            "text-orange hover:text-light-black capitalize text-sm flex items-center gap-1 absolute bottom-1 transition-all duration-500",
            showIcons ? "right-2 opacity-100" : "-right-8 opacity-0"
          )}
        >
          <AiOutlinePlus className="text-base" /> Add to cart
        </Link>

        {stock && discount && discount.length && (
          <DiscountButton
            text={discount}
            customClasses={
              discount.includes("%")
                ? "bg-green-500 hover:bg-green-500"
                : "bg-orange"
            }
          />
        )}
        {!stock && <StockButton />}

        <AiOutlinePlus
          className={cn(
            "bg-white border rounded-full text-light-black/80 hover:text-white hover:bg-orange p-2 text-[2.5rem] cursor-pointer absolute bottom-36 transition-all duration-500",
            showIcons ? "left-5 opacity-100" : "-left-5 opacity-0"
          )}
        />
        <AiOutlineEye
          className={cn(
            "bg-white border rounded-full text-light-black/80 hover:text-white hover:bg-orange p-2 text-[2.5rem] cursor-pointer absolute bottom-24 transition-all duration-500 delay-150",
            showIcons ? "left-5 opacity-100" : "-left-5 opacity-0"
          )}
        />
      </div>
    </Link>
  );
};

export default Product;
