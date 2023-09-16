"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { urlFor } from "@/lib/client";

interface bestSellInterface {
  productData: [];
}

const FeaturedProduct = ({ productData }: bestSellInterface) => {
  return (
    <div className="w-full mx-auto cursor-pointer">
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
          1500: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        loop={true}
      >
        {productData.map(
          (product: any) =>
            product.featuredProduct && (
              <SwiperSlide>
                <div className="relative w-full h-80 bg-[#EEF6FF]">
                  <Image
                    src={`${urlFor(product.image[0].asset)}`}
                    alt="featured image"
                    width={500}
                    height={500}
                    className="w-full h-full object-contain object-center mix-blend-multiply"
                  />
                  <div className="absolute bottom-5 left-10 dark:text-black">
                    <h2 className="font-semibold">{product.name}</h2>
                    <p className="text-xs">{product.hashtag}</p>
                  </div>
                </div>
              </SwiperSlide>
            )
        )}
      </Swiper>
    </div>
  );
};

export default FeaturedProduct;
