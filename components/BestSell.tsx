"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";

import Title from "./Title";
import { urlFor } from "@/lib/client";
import DiscountButton from "./DiscountButton";
import StockButton from "./StockButton";

interface bestSellInterface {
  productData: [];
}

const BestSell = ({ productData }: bestSellInterface) => {
  return (
    <div className="flex flex-col gap-10">
      <Title
        title="Best Sell"
        desc=" Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text"
      />

      <div>
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            1580: {
              slidesPerView: 4,
              spaceBetween: 35,
            },
          }}
          className="mySwiper"
          modules={[Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          {productData.map((product: any) => {
            const {
              bestSell,
              image,
              category,
              name,
              discountPrice,
              actualPrice,
              stock,
              discount,
            } = product;

            return (
              bestSell && (
                <SwiperSlide>
                  <div className="relative w-full flex flex-col gap-5 cursor-pointer">
                    <div className="bg-black/5">
                      <Image
                        src={`${urlFor(image[0].asset)}`}
                        alt="featured image"
                        width={500}
                        height={500}
                        className="w-full h-full object-contain object-center mix-blend-multiply"
                      />
                    </div>
                    <div>
                      <span className="text-sm text-light-black/60 dark:text-white/60 capitalize">
                        {category}
                      </span>
                      <p className="font-[500] capitalize">{name}</p>
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

                    {stock && discount && discount.length && (
                      <DiscountButton text={discount} />
                    )}
                    {!stock && <StockButton />}
                  </div>
                </SwiperSlide>
              )
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default BestSell;
