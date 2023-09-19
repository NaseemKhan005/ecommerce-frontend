"use client";

import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri";

import { cn } from "@/lib/utils";
import CommonButton from "./CommonButton";

const Cart = ({ isCartOpen, setIsCartOpen }: any) => {
  const [addItems, setAddItems] = useState(1);

  return (
    <div className="relative">
      <span
        className={cn(
          "block dark:bg-black bg-white shadow-lg drop-shadow shadow-black/10 rotate-45 absolute right-2 w-4 transition-all duration-500",
          isCartOpen ? "h-4 top-8" : "h-0 top-20"
        )}
      ></span>
      <div
        className={cn(
          "w-[22rem] bg-white shadow-lg shadow-black/10 absolute top-10 -right-5 overflow-y-auto overflow-hidden transition-all duration-500",
          isCartOpen ? "h-[29rem]" : "h-0"
        )}
      >
        <div className="cart w-full h-full overflow-y-auto relative">
          <div className="relative p-5">
            <div className="flex items-center justify-between border-b-2 py-2 mb-5">
              <p className="uppercase text-sm font-light">your cart</p>
              <IoClose
                onClick={() => setIsCartOpen(false)}
                className="text-lg hover:text-orange text-light-black cursor-pointer"
              />
            </div>

            <div className="flex flex-col justify-between gap-8 w-full min-h-[22.85rem] select-none">
              <div className="flex flex-col gap-5 w-full h-[90px]">
                <div className="flex gap-3 w-full h-full">
                  <div className="bg-[#F6F8FA] w-[90px] h-full rounded-md">
                    <Image
                      src="/logo.png"
                      alt="logo"
                      width={80}
                      height={80}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-1">
                    <p className="text-[.9rem]">Golden eye spot chair.</p>
                    <span className="font-semibold">$99.00</span>
                    <div className="flex items-center gap-3 justify-between">
                      <div className="flex items-center justify-between w-[120px] border">
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
                      </div>
                      <RiDeleteBinLine className="hover:text-red-600 cursor-pointer text-xl" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-5 mt-5">
                <div className="flex items-center justify-between text-light-black select-none">
                  <h2 className="font-semibold text-lg capitalize">
                    subtotal:
                  </h2>
                  <h2 className="font-semibold text-lg capitalize">$49.00</h2>
                </div>
                <CommonButton
                  text="pay with stripe"
                  customClasses="w-full bg-orange text-white hover:bg-[#e94848] py-6 rounded before:w-4 after:w-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
