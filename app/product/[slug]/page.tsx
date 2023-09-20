// "use client";

import Image from "next/image";
import { AiFillStar, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
// import { useState } from "react";

import { client, urlFor } from "@/lib/client";
import { cn } from "@/lib/utils";
import StockButton from "@/components/StockButton";
import CommonButton from "@/components/CommonButton";
import Product from "@/components/Product";
import ProductDetailsImage from "@/components/ProductDetailsImage";

const ProductDetails = async ({ params: { slug } }: any) => {
  // const [addItems, setAddItems] = useState(1);

  const productsQuery = '*[_type == "product"]';
  const productQuery = `*[_type == 'product' && slug.current == '${slug}'][0]`;

  const products = await client.fetch(productsQuery);
  const product = await client.fetch(productQuery);

  const {
    name,
    image,
    details,
    stock,
    actualPrice,
    discountPrice,
    discount,
    category,
    rating,
    review,
  } = product;

  const starsArray = Array.from(
    { length: rating },
    (item: any, index: number) => <AiFillStar key={index} />
  );

  return (
    <section className="w-full min-h-screen xl:container px-5 md:px-10 mx-auto mt-28">
      <div className="flex items-start gap-5 sm:gap-10 md:gap-5 w-full md:flex-row flex-col">
        <ProductDetailsImage name={name} stock={stock} image={image} />

        <div className="w-full h-full flex flex-col gap-1 lg:gap-2 text-light-black">
          <span>{category}</span>
          <h2 className="text-2xl md:text-3xl font-bold">{name}</h2>
          <div className="flex items-center gap-[1px] text-lg text-orange">
            {starsArray.map((star, index) => (
              <span key={index}>{star}</span>
            ))}
            <p className="text-sm ml-1 text-light-black/70">
              {review}+ Reviews
            </p>
          </div>
          <h3 className="font-semibold mt-2">Details:</h3>
          <p className="text-sm text-light-black lg:text-base">
            {details} Set your mind ablaze with boAt Rockerz 450 — our slick
            headphones that offer immersive sound quality and add luxury to your
            sound. Propelled by crystal clear 40mm dynamic drivers, slip into an
            alternate HD immersive audio reality. The soft cornered matte black
            finish allows for a comfortable fit, propagated by plush foam in
            adaptive and adjustable design. Choose your mode, go wireless with
            Bluetooth V4.2 or connect an aux wire that doesn't cause any drain
            on the 300mAh rechargeable lithium battery.
          </p>

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
                // onClick={() => setAddItems(addItems - 1)}
                className="cursor-pointer text-red-600 hover:bg-red-600/20 text-3xl p-1 pl-2 rounded-l-full"
              />
              <span>
                {/* {addItems <= 0 ? `${setAddItems(addItems + 1)}` : addItems} */}
                1
              </span>
              <AiOutlinePlus
                // onClick={() => setAddItems(addItems + 1)}
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
      </div>

      <div className="flex flex-col gap-10 lg:gap-16 relative w-full my-16 md:my-28">
        <h2 className="text-3xl md:text-4xl font-semibold capitalize text-center text-light-black">
          You may also like
        </h2>

        <div className="grid items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 sm:gap-y-10 gap-y-5">
          {products.slice(0, 8).map((product: any) => {
            return (
              product && <Product key={product._id} product={...product} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
