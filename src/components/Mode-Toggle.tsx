"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme } = useTheme()

  console.log("toggle");

  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild  >
        <Button   variant="outline" size="icon" className="bg-slate-200 dark:bg-slate-500 ">
          <Sun className="h-[1rem] w-[1rem] rotate-0 scale-100 transition-all  dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent   align="center"  >
        <DropdownMenuItem className="font-bold text-lg   " onClick={() => setTheme("light")}>
          <div className=" m-auto hover:text-cyan-300 transition-all ease-in-out duration-100">وضع فاتح</div>
        </DropdownMenuItem>
        <DropdownMenuItem className="font-bold text-lg  " onClick={() => setTheme("dark")}>
          <div className="m-auto hover:text-cyan-300 transition-all ease-in-out duration-100">وضع مضلم</div>
        </DropdownMenuItem>
        <DropdownMenuItem className="font-bold text-lg  " onClick={() => setTheme("system")}>
          <div className="m-auto hover:text-cyan-300 transition-all ease-in-out duration-100">وضع النظام</div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
