import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import { StateContext } from "@/context/StateContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShopCheck | Naseem Khan",
  description:
    "Shop Check is an ecommerce site where customers can buy the chairs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StateContext>
          <Toaster />
          <Navbar />
          <main>{children}</main>
        </StateContext>
        <ScrollToTop />
      </body>
    </html>
  );
}
