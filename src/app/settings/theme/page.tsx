"use client";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import Image from "next/image";

const page = () => {
  const [selectedValue, setSelectedValue] = useState("option-one");

  const handleRadioChange = (event: any) => {
    setSelectedValue(event);
  };
  return (
    <Card className="bg-[#F9F9F9] border-0  rounded-[10px] space-y-3 my-4">
      <div className="mb-[80px] space-y-1">
        <p className="font-medium text-base text-[#000000]">
          Theme preferences
        </p>
        <p className="text-xs font-regular text-[#868686]">
          Customisation according to your preferences.
        </p>
      </div>
      <div className="border-b pb-[20px]">
        <p className="font-medium text-base text-[#000000]">Select Theme</p>
      </div>
      <div className="pt-[40px]">
        <RadioGroup
          defaultValue="option-one"
          className="flex relative items-center border-[#0472F4] gap-10"
          onValueChange={handleRadioChange}
        >
          <div className="flex flex-col gap-3 items-end">
              <Label htmlFor="option-one">
            <div
              className={`${
                selectedValue == "option-one"
                  ? "border-[#0472F4] bg-[#DCEFFD]"
                  : " bg-white"
              } border-[0.2px]  w-[430px] h-[332px] rounded-[10px] flex items-end justify-end`}
            >
            

              <Image
                src={"/images/Mask Group 2.png"}
                alt={"upload profile"}
                height={250}
                width={370}
                className=" "
                priority
                />
            </div>
                </Label>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <p>
                
              Light Mode
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 items-end">
             <Label htmlFor="option-two">
            <div
              className={`${
                selectedValue === "option-two"
                  ? "border-[#0472F4] bg-[#DCEFFD]"
                  : " bg-white"
              } border-[0.2px] w-[430px] h-[332px] rounded-[10px] flex items-end justify-end`}
            >
             

              <Image
                src={"/images/Mask Group 1.png"}
                alt={"upload profile"}
                height={250}
                width={370}
                className=" "
                priority
                />
            </div>
                </Label>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="option-two"
                id="option-two"
                onChange={handleRadioChange}
              />
            <p>
               Dark Mode
              </p>
            </div>
          </div>
        </RadioGroup>
      </div>
    </Card>
  );
};

export default page;
