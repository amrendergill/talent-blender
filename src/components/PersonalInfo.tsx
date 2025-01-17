"use client";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import Image from "next/image";
import { LuSend } from "react-icons/lu";
import { Button } from "./ui/button";
import { IoCheckmarkSharp } from "react-icons/io5";
import { PiDotsThreeCircleThin } from "react-icons/pi";
import { HiPlus } from "react-icons/hi";
import { usePathname } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function PersonalInfo(props: any) {
  const pathname = usePathname();
  return (
    <>
      <div className="relative ">
        <div>
          <Image
            src={props.coverImage}
            className="rounded-[10px]"
            alt="cover image"
            priority
            width={0}
            height={200}
            sizes="100%"
            style={{ width: "100%", height: "200px" }}
          />
        </div>
        <div className="flex items-center justify-between mt-6">
          <p></p>
          <div className="flex items-center gap-x-2">
            <Select>
              <SelectTrigger className="w-full px-6 py-1 text-[#259427] text-sm rounded-[18px] ">
                <SelectValue placeholder=" Prepared for interviews" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="linkedIn-audio-event">
                    Prepared for interviews
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Button className="flex items-center gap-x-2  text-black border-[0.5px] border-[#868686] bg-[#F9F9F9] rounded-[18px]  px-6 py-1">
              <Image
                src={"/images/share@2x.png"}
                alt="Logo"
                width={17}
                height={17}
                priority
                className="object-fit"
              />
              <p className="text-sm">Share</p>
            </Button>
          </div>
        </div>
        <div
          className={` w-fit absolute top-32 left-8 ${
            pathname?.includes("/company") ? " rounded-none " : "rounded-full"
          }`}
        >
          <Avatar
            className={`h-[128px] w-[128px] ${
              pathname?.includes("/company") ? "rounded-none" : "rounded-full"
            }`}
          >
            <AvatarImage src={props.avatar} alt="@shadcn" />
            <AvatarFallback>MD</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div className="">
        {pathname?.includes("/company") ? (
          <h1 className="text-[24px] font-medium">{props.name}</h1>
        ) : (
          <>
            <div className="flex items-center justify-between">
              <h1 className="text-[24px] font-medium">{props.name}</h1>
            </div>
          </>
        )}
        <p className="text-base my-1">{props.bio}</p>

        <div className="flex items-center gap-2">
          <p
            className={`text-sm text-gray-500 my-1 ${
              pathname?.includes("/company") ? "block" : "hidden"
            }`}
          >
            IT Services and IT Consulting
          </p>
          <p
            className={`text-sm text-gray-500 my-1 ${
              pathname?.includes("/company") ? "block" : "hidden"
            }`}
          >
            .
          </p>
          <div className="flex gap-[4px]">
            <Image
              src={"/images/map-pin.svg"}
              alt="Logo"
              width={15}
              height={15}
              priority
              className="object-fit"
            />
            <p className="text-sm text-[#868686] my-1">{props.address}</p>
          </div>
          {/* <p className="text-sm text-[#868686] my-1">{props.address}</p> */}
          <p className="text-sm text-gray-500 my-1">.</p>
        </div>
        <div>
          <span
            className={`text-sm text-[#0472F4]  my-1 hover:text-[#0472F4] hover:underline hover:cursor-pointer flex gap-x-1 ${
              pathname?.includes("/company") ? "hidden" : "block"
            }`}
          >
            <div className="flex gap-[19px] items-center">
              <div className="flex gap-2 items-center ml-[2px]">
                <img
                  src="/images/globe.svg"
                  alt="globe"
                  className="h-[10px] w-[10px]"
                />
                <p>
                  www.appsierra.com | www.gigde.com |
                  <span className="text-[#212529]"> and 2 more links</span>
                </p>
              </div>
              <div>
                <img
                  src="/images/linkedin.svg"
                  alt="linked"
                  className="h-[15px] w-[15px]"
                />
              </div>
              <div>
                <img
                  src="/images/twitter-alt (1).svg"
                  alt="twitter"
                  className="h-[13px] w-[15px]"
                />
              </div>
            </div>
          </span>
        </div>
        <div className="mt-3 my-1 flex gap-2 items-center">
          <div className="text-sm flex gap-x-1 items-center">
            <p className="font-medium ">4.3K</p>
            <p className={`text-[#868686] ${props.underlineStyle}`}>
              Followers
            </p>
          </div>
          <div className="text-sm flex gap-x-1 items-center">
            <p className="font-medium ">532</p>
            <p className={`text-[#868686] ${props.underlineStyle}`}>
              Following
            </p>
          </div>
        </div>

        <div className="my-4 flex items-center gap-2">
          {pathname?.includes("/company") ? (
            <>
              <Button className="bg-[#0a66c2] text-sm text-white rounded-full flex items-center gap-1 px-9">
                <div>
                  <HiPlus size={18} />
                </div>
                Follow
              </Button>
              <Button
                variant={"outline"}
                className="bg-whte text-sm text-[#0a66c2] border-[#0a66c2] rounded-full flex items-center gap-1 px-9"
              >
                <div>
                  <LuSend size={16} />
                  {/* <IoCheckmarkSharp size={20} /> */}
                </div>
                Message
              </Button>
              <div>
                <PiDotsThreeCircleThin size={40} color="#6b7280" />
              </div>
            </>
          ) : (
            <>
              <Button className=" text-sm text-white rounded-full  flex items-center gap-1 px-5">
                Update Profile
              </Button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
