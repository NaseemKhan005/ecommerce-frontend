"use client";

import { useStateContext } from "@/context/StateContext";
import CommonButton from "./CommonButton";

interface ProductDetailsButtonsProps {
  stock: boolean;
  product: any;
}

const ProductDetailsButtons = ({
  stock,
  product,
}: ProductDetailsButtonsProps) => {
  const { onAdd, qty }: any = useStateContext();

  return (
    <div className="flex items-center gap-8">
      <CommonButton
        onClick={() => onAdd(product, qty)}
        stock={stock}
        text="Add to cart"
        customClasses="w-44 py-6 before:w-4 after:w-0 rounded text-base capitalize"
      />

      <CommonButton
        onClick={() => onAdd(product, qty)}
        stock={stock}
        text="Buy now"
        customClasses="w-44 hover:bg-[#d93237] bg-orange text-white py-6 rounded before:w-4 text-sm after:w-0"
      />
    </div>
  );
};

export default ProductDetailsButtons;
