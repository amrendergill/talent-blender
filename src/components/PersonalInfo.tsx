"use client"
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import Image from "next/image";
import { LuSend } from "react-icons/lu";
import { Button } from "./ui/button";
import { IoCheckmarkSharp } from "react-icons/io5";
import { PiDotsThreeCircleThin } from "react-icons/pi";
import { HiPlus } from "react-icons/hi";
import { IoPersonAddSharp } from "react-icons/io5";
// import { headers } from "next/headers";
import { usePathname } from "next/navigation";

export default function PersonalInfo(props: any) {
  const pathname = usePathname()
  return (
    <>
      <div className="relative mb-20">
        <div>
          <Image
            src={props.coverImage}
            className="rounded-t-lg"
            alt="cover image"
            priority
            width={0}
            height={200}
            sizes="100%"
            style={{ width: "100%", height: "200px" }}
          />
        </div>
        <div
          className={`border-4 border-white w-fit absolute top-32 left-8 ${
            pathname?.includes('/company') ? " rounded-none " : "rounded-full"
          }`}
        >
          <Avatar
            className={`h-[128px] w-[128px] ${
              pathname?.includes('/company') ? "rounded-none" : "rounded-full"
            }`}
          >
            <AvatarImage src={props.avatar} alt="@shadcn" />
            <AvatarFallback>MD</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="px-7">
        {pathname?.includes('/company') ? (
          <h1 className="text-[32px] font-bold">{props.name}</h1>
        ) : (
          <>
            <div className="flex items-center justify-between">
              <h1 className="text-[32px] font-bold">{props.name}</h1>
              <div className="flex items-center w-fit gap-2">
                <Avatar className={`h-[48px] w-[48px] rounded-none`}>
                  <AvatarImage src={props.collegeLogo} alt="@shadcn" />
                  <AvatarFallback>MD</AvatarFallback>
                </Avatar>
                <div className=" flex flex-wrap w-[200px]">
                  <p className="font-bold text-sm text-gray-600">
                    {props.collegeName}
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
        <p className="text-base mb-1">{props.bio}</p>

        <div className="flex items-center gap-2">
          <p
            className={`text-sm text-gray-500 mb-1 ${
              pathname?.includes('/company') ? "block" : "hidden"
            }`}
          >
            IT Services and IT Consulting
          </p>
          <p
            className={`text-sm text-gray-500 mb-1 ${
              pathname?.includes('/company') ? "block" : "hidden"
            }`}
          >
            .
          </p>
          <p className="text-sm text-gray-500 mb-1">{props.address}</p>
          <p className="text-sm text-gray-500 mb-1">.</p>
          {pathname?.includes('/company') ? (
            <>
              <p className={`text-sm text-gray-500 mb-1 `}>18K Followers</p>
              <p className={`text-sm text-gray-500 mb-1 `}>.</p>
              <p className={`text-sm text-gray-500 mb-1`}>201-500 employees</p>
            </>
          ) : (
            <>
              <p className="text-sm text-[#0a66c2] font-bold mb-1 hover:text-[#0a66c2] hover:underline hover:cursor-pointer">
                Contact info
              </p>
            </>
          )}
        </div>
        <div>
          <p
            className={`text-sm text-[#0a66c2] font-bold mb-1 hover:text-[#0a66c2] hover:underline hover:cursor-pointer ${
              pathname?.includes('/company') ? "hidden" : "block"
            }`}
          >
            500+ connections
          </p>
        </div>
        <div className="mt-3 mb-1 flex gap-2 items-center">
          <div>
            <Avatar className="h-[24px] w-[24px] rounded-full">
              <AvatarImage src={props.mutualFollowerProfilePic} alt="@shadcn" />
              <AvatarFallback>MD</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <p className="text-base font-semibold text-gray-600">
              {props.mutualFollowerName} & {props.mutalFollowerCount} other {""}
              {pathname?.includes('/company')
                ? `connections follow this page`
                : `mutual connections`}
            </p>
          </div>
        </div>

        <div className="my-4 flex items-center gap-2">
          {pathname?.includes('/company') ? (
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
              <Button className="bg-[#0a66c2] text-sm text-white rounded-full flex items-center gap-1 px-5">
                <div>
                  <IoPersonAddSharp size={18} />
                </div>
                Connect
              </Button>
              <Button
                variant={"outline"}
                className="bg-whte text-sm text-[#0a66c2] border-[#0a66c2] rounded-full flex items-center gap-1 px-5"
              >
                <div>
                  <LuSend size={16} />
                  {/* <IoCheckmarkSharp size={20} /> */}
                </div>
                Message
              </Button>
              <Button
                variant={"outline"}
                className="bg-whte text-sm text-gray-600 border-gray-600 rounded-full flex items-center gap-1 px-5"
              >
                More
              </Button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
