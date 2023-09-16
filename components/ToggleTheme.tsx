"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ToggleTheme() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      variant="ghost"
      size="icon"
      className="rounded-full text-2xl relative hover:bg-transparent dark:hover:bg-transparent bg-transparent dark:bg-transparent text-light-black hover:text-orange dark:hover:text-orange w-fit"
    >
      <Sun className="md:h-[1.4rem] md:w-[1.4rem] w-[1.25rem] h-[1.25rem] transition-all -rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
      <Moon className="absolute md:h-[1.5rem] md:w-[1.5rem] w-[1.25rem] h-[1.25rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
    </Button>
  );
}
