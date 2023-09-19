"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formSchema } from "@/lib/validations/search";
import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { cn } from "@/lib/utils";

const Search = ({ searchIsOpen, setSearchIsOpen }: any) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>, e: any) {
    console.log(values);
    e.preventDefault();
  }

  return (
    <div
      className={cn(
        "bg-black/80 top-0 w-full z-[100] absolute left-0  transition-all duration-500",
        searchIsOpen ? "h-screen" : "h-0 overflow-hidden"
      )}
    >
      <div className="relative flex items-center justify-center w-full h-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="relative w-full px-5 sm:w-[28rem] py-20"
          >
            <FormField
              control={form.control}
              name="search"
              render={({ field }: any) => (
                <FormItem className="relative">
                  <FormControl>
                    <Input
                      placeholder="Search"
                      {...field}
                      className="bg-transparent border-0 border-b-2 border-b-white rounded-none pl-0 pr-14 py-6 outline-0 w-full text-base sm:text-lg text-white placeholder:text-white placeholder:text-lg sm:placeholder:text-xl"
                    />
                  </FormControl>
                  <FormMessage className="absolute sm:text-base text-sm" />
                </FormItem>
              )}
            />
            <button
              type="submit"
              className="rounded-full text-white text-2xl sm:text-3xl hover:bg-white/10 hover:text-orange p-2 absolute top-[48%] right-5 sm:right-2 -translate-y-1/2"
            >
              <FiSearch />
            </button>
          </form>
        </Form>
        <button
          type="submit"
          onClick={() => setSearchIsOpen(false)}
          className="rounded-full text-white text-3xl sm:text-4xl hover:bg-white hover:text-black p-2 absolute top-16 sm:right-14 right-5 hover:rotate-180 transition-all duration-500"
        >
          <IoClose />
        </button>
      </div>
    </div>
  );
};

export default Search;
