"use client";

import Image from "next/image";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri";

import { cn } from "@/lib/utils";
import CommonButton from "./CommonButton";
import QuantityButtons from "./QuantityButtons";
import { useStateContext } from "@/context/StateContext";
import { urlFor } from "@/lib/client";

const Cart = ({ showCart, setShowCart }: any) => {
  const { totalQuantities, totalPrice, cartItems }: any = useStateContext();

  return (
    <div className="relative">
      <span
        className={cn(
          "block dark:bg-black bg-white shadow-lg drop-shadow shadow-black/10 rotate-45 absolute right-2 w-4 transition-all duration-500",
          showCart ? "h-4 top-8" : "h-0 top-20"
        )}
      ></span>
      <div
        className={cn(
          "w-[330px] sm:w-[22rem] bg-white shadow-lg shadow-black/10 absolute top-10 -right-10 sm:-right-5 overflow-y-auto overflow-hidden transition-all duration-500",
          showCart ? "h-[29rem]" : "h-0"
        )}
      >
        <div className="cart w-full h-full overflow-y-auto relative">
          <div className="relative">
            <div className="sticky top-0 left-0 bg-white z-[1] w-full flex items-center justify-between border-b-2 pt-7 pb-3 px-5 mb-5">
              <p className="uppercase text-sm font-light">
                your cart
                <span className="ml-2 capitalize text-orange font-normal text-[.8rem]">
                  ({totalQuantities} items)
                </span>
              </p>
              <IoClose
                onClick={() => setShowCart(false)}
                className="text-lg hover:text-orange text-light-black cursor-pointer"
              />
            </div>

            {cartItems.length >= 1 ? (
              <div className="flex flex-col justify-between gap-8 w-full min-h-[23.65rem] select-none">
                {cartItems.map((item: any) => (
                  <div
                    key={item._id}
                    className="flex flex-col gap-5 w-full h-[90px] px-5"
                  >
                    <div className="flex gap-3 w-full h-full">
                      <div className="bg-[#F6F8FA] w-[90px] h-full rounded-md">
                        <Image
                          src={`${urlFor(item.image[0])}`}
                          alt={item.name}
                          width={80}
                          height={80}
                          className="w-full h-full object-contain mix-blend-multiply"
                        />
                      </div>
                      <div className="flex flex-col justify-between flex-1">
                        <p className="text-[.9rem] font-semibold">
                          {item.name}
                        </p>
                        <span className="font-semibold text-light-black">
                          ${item.discountPrice}.00
                        </span>
                        <div className="flex items-center gap-3 justify-between">
                          {/* <<div className="flex items-center justify-between w-[120px] border">
                        <AiOutlineMinus
                          onClick={() => setAddItems(addItems - 1)}
                          className="cursor-pointer text-red-600 hover:bg-red-600/20 text-3xl border-r p-1"
                        />
                        <span>
                          {addItems <= 0
                            ? `${setAddItems(addItems + 1)}`
                            : addItems}
                        </span>
                        <AiOutlinePlus
                          onClick={() => setAddItems(addItems + 1)}
                          className="text-green-500 hover:bg-green-500/20 cursor-pointer text-3xl border-l p-1"
                        />
                      </div>> */}
                          <QuantityButtons />
                          <RiDeleteBinLine className="hover:text-red-600 cursor-pointer text-xl" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="py-3 px-5 flex flex-col gap-5 sticky bottom-0 left-0 bg-white w-full">
                  <div className="flex items-center justify-between text-light-black select-none">
                    <h2 className="font-semibold text-lg capitalize">
                      subtotal:
                    </h2>
                    <h2 className="font-semibold text-lg capitalize">
                      ${totalPrice}.00
                    </h2>
                  </div>

                  <button className="w-full" onClick={() => setShowCart(false)}>
                    <CommonButton
                      stock={true}
                      text="pay with stripe"
                      customClasses="w-full bg-orange text-white hover:bg-[#d93237] py-6 rounded before:w-4 after:w-0"
                    />
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center flex-col gap-5 px-5 w-full min-h-[20rem]">
                <Image
                  src="/shopping-bag.png"
                  alt="shopping bar"
                  width={100}
                  height={100}
                  className="object-contain"
                />
                <p className="capitalize text-light-black font-semibold text-sm md:text-base">
                  Your shopping bag is empty.
                </p>
                <Link
                  href={"/"}
                  className="w-full"
                  onClick={() => setShowCart(false)}
                >
                  <CommonButton
                    stock={true}
                    text="continue shopping"
                    customClasses="w-full bg-orange text-white hover:bg-[#d93237] py-6 rounded before:w-4 after:w-0 uppercase"
                  />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
