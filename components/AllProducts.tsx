import Product from "./Product";

interface AllProductProps {
  productData: [];
}

const AllProducts = ({ productData }: AllProductProps) => {
  return (
    <div className="flex flex-col gap-10 relative w-full 2xl:container px-5 md:px-10 2xl:mx-auto">
      <div className="flex flex-col gap-12 mt-10">
        <div className="flex items-center sm:flex-row flex-col gap-5 justify-between capitalize">
          <h2 className="text-4xl font-semibold"> All Product</h2>
          <div className="flex items-center gap-5 capitalize">
            <p>all</p>
            <p>wooden</p>
            <p>furnished</p>
            <p>table</p>
          </div>
        </div>

        <div className="grid items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 sm:gap-y-10 gap-y-5">
          {productData.slice(0, 8).map((product: any) => {
            return (
              product && <Product key={product._id} product={...product} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
