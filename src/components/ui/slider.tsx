"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1 w-full grow overflow-hidden rounded-full bg-[#EBEBEB]">
      <SliderPrimitive.Range className="absolute h-full bg-[#0472F4]" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className=" focus:outline-none ">
      <div className="  h-5 w-5 rounded-full  bg-white  shadow-xl  flex justify-center items-center">
        <div className="w-2 h-2 bg-[#0472F4] rounded-full shrink-0"></div>
      </div>
    </SliderPrimitive.Thumb>
     <SliderPrimitive.Thumb className=" focus:outline-none ">
      <div className="  h-5 w-5 rounded-full  bg-white  shadow-xl  flex justify-center items-center">
        <div className="w-2 h-2 bg-[#0472F4] rounded-full shrink-0"></div>
      </div>
    </SliderPrimitive.Thumb>
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
