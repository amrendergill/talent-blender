import Image from "next/image";
import { Card } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { IoBookmarkSharp } from "react-icons/io5";
import { HiMiniUserGroup } from "react-icons/hi2";
import { HiPlus } from "react-icons/hi";
import Link from "next/link";
import RecentGroups from "./RecentGroups";

export default function LeftSidebar({children}:any) {
  return (
    <>
      <Card className="p-0 ">
        <div className="mb-10 relative z-0">
          <div className="">
            <Image
              src={"/images/ken-cheung-0F2nvpob0_c-unsplash.jpg"}
              className="rounded-t-lg"
              alt="cover image"
              priority
              width={0}
              height={0}
              objectFit="cover"
              sizes="100%"
              style={{ width: "100%", height: "60px" }}
            />
          </div>
          <div className="border-2 rounded-full border-white w-fit absolute top-5 left-[72px]">
            <Avatar className="h-[72px] w-[72px]">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>MD</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className="w-full divide-y">
          <div className="mt-16 mb-4 w-full flex flex-wrap items-center justify-center">
            <Link href={"/user"}>
              <p className="font-bold hover:text-[#0a66c2] hover:underline hover:cursor-pointer">
                Mark Davidson
              </p>
            </Link>
            <p className="text-xs text-gray-500">
              Software Engineer | Content Creator | Educator | Mentor |
              Freelancer
            </p>
          </div>
          <div className="py-4 px-3 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-500 font-medium">
                Profile viewers
              </p>
              <p className="text-xs text-[#0a66c2] font-medium">300</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-500 font-medium">
                Post impressions
              </p>
              <p className="text-xs text-[#0a66c2] font-medium">10</p>
            </div>
          </div>
          <div className="py-4 px-3">
            <p className="text-xs text-gray-500 font-normal">
              Strengthen your profile with an AI writing assisstant
            </p>
          </div>
          <div className="py-4 px-3">
            <div className="flex items-center gap-3">
              <div>
                <IoBookmarkSharp color="#6b7280" />
              </div>
              <p className="text-xs text-gray-500 font-semibold">My Items</p>
            </div>
          </div>
        </div>
      </Card>
      <Card className="px-3 py-4 ">
        {children}
        {/* <RecentGroups title={"Recent"} groupName={"JavaScript"} /> */}
      </Card>
    </>
  );
}
