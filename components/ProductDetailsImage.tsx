"use client";

import Image from "next/image";

import StockButton from "./StockButton";
import { urlFor } from "@/lib/client";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface productDetailsProps {
  name: string;
  stock: string;
  image: any;
}

const ProductDetailsImage = ({ name, stock, image }: productDetailsProps) => {
  const [index, setIndex] = useState(0);

  return (
    <div className="flex flex-col gap-5">
      <div className="rounded-xl bg-black/10 relative">
        {!stock && <StockButton />}
        <Image
          src={`${urlFor(image && image[index].asset)}`}
          width={500}
          height={500}
          alt={name}
          className="rounded-xl w-full sm:w-[400px] md:w-[500px] lg:w-[600px] aspect-square object-cover object-center mix-blend-multiply"
        />
      </div>

      <div className="productDetails cursor-pointer overflow-x-auto rounded-md relative w-fit flex items-center gap-3">
        {image?.slice(0, 4).map((item: any, i: number) => (
          <Image
            src={`${urlFor(item)}`}
            width={500}
            height={500}
            alt={name}
            className={cn(
              "rounded-md w-20 aspect-square object-cover object-center",
              i === index ? "bg-black/50" : "bg-black/10"
            )}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductDetailsImage;
