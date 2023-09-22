"use client";

import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";

type Product = {
  _id: string;
  name: string;
  discountPrice: number;
  quantity: number;
};

// Defining a type for the context data
type ContextType = {
  showNavbar: boolean;
  setShowNavbar: React.Dispatch<React.SetStateAction<boolean>>;
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
  cartItems: Product[];
  totalQuantities: number;
  totalPrice: number;
  qty: number;
  incQty: () => void;
  decQty: () => void;
  onAdd: (product: Product, quantity: number) => void;
};

// Create a React context with an initial empty object of type ContextType
const Context = createContext<ContextType | undefined>(undefined);

export const StateContext = ({ children }: { children: React.ReactNode }) => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [totalQuantities, setTotalQuantities] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [qty, setQty] = useState(1);

  const onAdd = (product: any, quantity: number) => {
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    );

    setTotalQuantities((prevTotalQuantity) => prevTotalQuantity + quantity);
    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.discountPrice * quantity
    );

    if (checkProductInCart) {
      // If the product is already in the cart, update its quantity
      const updatedCartItems = cartItems.map((item) =>
        item._id === product._id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );

      setCartItems(updatedCartItems);
    } else {
      // If the product is not in the cart, add it
      const updatedProduct = { ...product, quantity };
      setCartItems([...cartItems, updatedProduct]);
    }

    toast.success(`${quantity} ${product.name} added to cart.`);
  };

  const incQty = () => {
    setQty((prevQty: number) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty: number) => {
      if (prevQty - 1 < 1) return 1;

      return prevQty - 1;
    });
  };

  return (
    <Context.Provider
      value={{
        showNavbar,
        setShowNavbar,
        showCart,
        setShowCart,
        cartItems,
        totalQuantities,
        totalPrice,
        qty,
        incQty,
        decQty,
        onAdd,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
