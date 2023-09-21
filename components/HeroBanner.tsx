"use client";

import Image from "next/image";
import { Marck_Script } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { urlFor } from "@/lib/client";
import CommonButton from "./CommonButton";

const marckScript = Marck_Script({ subsets: ["latin"], weight: ["400"] });

const HeroBanner = ({ bannerData }: any) => {
  return (
    <Swiper
      slidesPerView={1}
      className="mySwiper w-full h-1/2 lg:min-h-screen relative"
      modules={[Autoplay]}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
    >
      {bannerData.map((item: any, index: number) => (
        <SwiperSlide key={index}>
          <div
            style={{
              backgroundImage: `url('${urlFor(item.bgImage.asset)}')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
          >
            <div className="cursor-pointer py-10 sm:py-16 px-5 w-full h-1/2 lg:min-h-screen flex items-center justify-center gap-10 lg:gap-20 flex-col sm:flex-row lg:container pt-16">
              <div className="w-full h-full xl:w-3/4 flex items-center relative pt-16">
                <Image
                  src={`${urlFor(item.image.asset)}`}
                  alt={item.title}
                  width={500}
                  height={500}
                  className="w-full h-full z-[1]"
                />
              </div>

              <div className="w-full lg:pt-10 flex flex-col gap-5 md:gap-10 text-center sm:text-left md:text-left">
                <h2
                  className={`select-none text-5xl md:text-[5.3rem] text-orange ${marckScript.className}`}
                >
                  {item.discount}
                </h2>
                <div className="text-light-black">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[4.2rem] font-bold capitalize select-none">
                    {item.title}
                  </h1>
                  <p className="text-black text-xl break-words md:text-base lg:text-[1.3rem] 2xl:text-3xl mt-3 select-none">
                    {item.desc}
                  </p>
                </div>
                <div className="mx-auto sm:mx-0">
                  <CommonButton stock={true} text={item.btnText} />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroBanner;
