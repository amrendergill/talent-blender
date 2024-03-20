import Image from "next/image";
import { Card } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { IoBookmarkSharp } from "react-icons/io5";
import { HiMiniUserGroup } from "react-icons/hi2";
import { HiPlus } from "react-icons/hi";
import Link from "next/link";
import RecentGroups from "./RecentGroups";
import { Button } from "./ui/button";

const data = [
  { initials: "IW", name: "Interview", members: 1231 },
  { initials: "GD", name: "Graphic Designing", members: 343 },
  { initials: "WD", name: "Web Designing", members: 2342 },
  { initials: "BD", name: "Business Development", members: 5464 },
];

export default function LeftSidebar({ children }: any) {
  return (
    <div className="divide-y space-y-4">
      <Card className="p-3 bg-[#F9F9F9] rounded-[5px] !border-none ">
        <div className=" relative z-0  flex flex-col items-center justify-between">
          <span className="text-xl font-medium">
            <p className="whitespace-nowrap">Speed up employer</p>
            <p>discovery.</p>
          </span>
          <p className="text-xs text-[#868686] mt-3">
            Efficiently expedite the process of being found and recognized by
            potential employers.
          </p>
          <Button className="text-xs w-full mt-4 h-[31px] rounded-[3px]">
            Join Community
          </Button>
        </div>
      </Card>
      <div className="pt-4 space-y-4">
        <div className="flex justify-between items-center ">
          <p className="text-xs ">My Communities</p>
          <Button className="text-[10px] rounded-[10px] bg-[#EDE8FF] text-black h-[20px] hover:bg-blue-200">
            See All
          </Button>
        </div>
        {data.map((item, index) => (
          <div className="flex gap-x-2 items-center">
            <Avatar className=" h-[34px]  w-[34px] !rounded-[5px] !bg-[#E6FFDE]">
              <AvatarFallback className="text-sm  !bg-[#E6FFDE]">
                {item.initials}
              </AvatarFallback>
            </Avatar>
            <div className="space-y-[0.5px]">
              <p className="font-medium text-sm">{item.name}</p>
              <p className="text-[10px] text-[#868686]">
                {item.members} members
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
