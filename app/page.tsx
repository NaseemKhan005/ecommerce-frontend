import AllProducts from "@/components/AllProducts";
import BestSell from "@/components/BestSell";
import FeaturedProduct from "@/components/FeaturedProduct";
import HeroBanner from "@/components/HeroBanner";
import Sale from "@/components/Sale";
import { client } from "@/lib/client";

export default async function Home() {
  const bannerData = await client.fetch("*[_type == 'banner']");
  const productData = await client.fetch("*[_type == 'product']");
  const saleData = await client.fetch("*[_type == 'sale']");

  return (
    <main className="flex flex-col gap-24">
      <HeroBanner bannerData={bannerData.length && bannerData} />

      <div className="container px-5 md:px-10 xl:px-20 mx-auto flex flex-col gap-24 pt-20">
        <FeaturedProduct productData={productData} />
      </div>

      <BestSell productData={productData} />
      <Sale saleData={saleData} />
      <AllProducts productData={productData} />

      {/* <div className="container px-5 md:px-10 xl:px-20 mx-auto flex flex-col gap-24">
      </div> */}
    </main>
  );
}
