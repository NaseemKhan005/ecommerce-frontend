import { FooterLinks } from "@/constants/FooterLinks";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div className="bg-[#F6F8FA] pt-16 sm:pt-20 pb-5">
      <div className="container px-5 md:px-10 mx-auto">
        <div className="flex items-start flex-col md:flex-row md:gap-5 gap-10">
          <div className="w-full md:w-72 flex flex-col gap-5 lg:gap-8">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="logo"
                width={200}
                height={200}
                className="w-[170px] h-full -ml-2 -mt-2 object-contain"
              />
            </Link>
            <p className="text-xs">
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms.
            </p>
          </div>

          <div className="w-full capitalize">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-10 sm:gap-3 lg:gap-5">
              {FooterLinks.map(({ title, links }) => (
                <div className="flex flex-col gap-5 lg:gap-10">
                  <h3 className="font-semibold whitespace-nowrap">{title}</h3>
                  <div className="flex flex-col gap-3 sm:gap-5">
                    {links.map(({ name, link }) => (
                      <Link
                        href={link}
                        target="_blank"
                        className="text-sm hover:text-orange whitespace-nowrap"
                      >
                        {name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full text-center text-xs sm:text-sm border-t text-light-black/90 py-5 sm:mt-16 mt-10">
        <p>
          Copyright © All rights reserved -{" "}
          <Link href="https://shopcheck.vercel.app/" className="text-orange">
            ShopCheck
          </Link>{" "}
          {date}
        </p>
      </div>
    </div>
  );
};

export default Footer;
