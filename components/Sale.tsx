"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { urlFor } from "@/lib/client";

interface saleDataProps {
  saleData: [];
}

const Deals = ({ saleData }: saleDataProps) => {
  return (
    <div className="relative w-full h-96 2xl:container 2xl:px-10 2xl:mx-auto px-2 my-20">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        className="mySwiper"
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {saleData.map((item: any) => {
          const {
            _id,
            bgColor,
            textColor,
            image,
            discount,
            dealName,
            time,
            season,
            productName,
            aboutDeal,
            btnText,
          } = item;

          return (
            <SwiperSlide>
              <div
                key={_id}
                className="w-full h-full p-5 md:p-10 rounded-xl relative flex flex-col sm:flex-row cursor-pointer gap-5 md:gap-10 justify-between sm:mt-20 md:mt-28 sm:mb-10 text-white"
                style={{ backgroundColor: bgColor, color: textColor }}
              >
                <div className="w-full sm:w-fit absolute left-[75%] sm:left-[40%] -translate-x-1/2 top-5 sm:top-[25%] sm:-translate-y-1/2 h-full z-[1]">
                  <Image
                    src={`${urlFor(image.asset)}`}
                    alt="featured image"
                    width={500}
                    height={500}
                    className="mix-blend-multiply w-[300px] sm:w-[400px] lg:w-[480px]"
                  />
                </div>
                <div className="pt-5 md:pt-10 lg:pt-16 w-1/2 sm:w-1/3 h-full flex flex-col gap-5 justify-end z-[1]">
                  <span className="text-lg">{discount}</span>
                  <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase">
                    {dealName}
                  </h2>
                  <p>{time}</p>
                </div>

                <div className="sm:w-[40%] lg:w-[45%] h-full flex flex-col gap-2 sm:gap-5 z-[1]">
                  <span className="capitalize">{productName}</span>
                  <h2 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[4rem] font-extrabold capitalize leading-tight relative">
                    {season}
                    <span className="text-orange bg-white rounded-full w-14 h-14 p-2 text-center capitalize leading-none flex items-center justify-center font-semibold absolute -top-5 right-2 rotate-12 text-sm">
                      hot deal
                    </span>
                  </h2>
                  <p className="text-xs">{aboutDeal}</p>
                  <Link
                    href={"/"}
                    className="capitalize text-orange bg-white rounded-full text-sm md:text-base py-2 px-3 md:py-3 md:px-5 w-fit border-0 hover:border-2 hover:border-white hover:bg-transparent hover:text-white"
                  >
                    {btnText}
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Deals;
