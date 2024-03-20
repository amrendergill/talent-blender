import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { HiPlus } from "react-icons/hi";
import { HiMiniUserGroup } from "react-icons/hi2";
import { IoBookmarkSharp } from "react-icons/io5";
import { Card } from "./ui/card";
import Image from "next/image";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import PeopleYouMayKnow from "./PeopleYouMayKnow";
import { Button } from "./ui/button";

const data = [
  { name: "Pitch N Hire", role: "Company",src:"images/Ellipse 4@2x.png", task: "Follow" },
  { name: "Appsierra", role: "Company",src:"images/Ellipse 5@2x.png", task: "Follow" },
  { name: "Umang Sharma", role: "UI/UX Designer",src:"images/Ellipse 6@2x.png", task: "Connect" },
  {
    name: "Business Development",
    role: "Community Development",
   src:"images/Ellipse 7@2x.png", task: "Join",
  },
];

export default function RightSidebar() {
  return (
    <>
      <div className="px-3 py-4">
        <div className="space-y-4">
          <div className="flex justify-between items-center ">
            <p className="text-xs ">Suggestions</p>
            <Button className="text-[10px] rounded-[10px] bg-[#FFF0F0] text-black h-[20px] hover:bg-blue-200">
              See All
            </Button>
          </div>
          {data.map((item, index) => (
            <div className="flex justify-between items-center ">
              <div className="flex items-center gap-x-2">
                <Avatar className=" h-[34px]  w-[34px]  !bg-[#E6FFDE]">
                  <AvatarImage src={item.src} />
                </Avatar>
                <div className="space-y-[0.5px]">
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="#868686 text-[10px]">{item.role}</p>
                </div>
              </div>
              <Button className="bg-white text-[#0472F4] border-[0.5px] rounded-[13px] px-3 h-[25px] text-xs space-x-1 border-[#0472F4] hover:bg-blue-200">
                <span>+</span>
                <span>{item.task}</span>
              </Button>
            </div>
          ))}
        </div>
        <hr className="border-t-[0.5px]  border-gray-200 w-full my-4"></hr>
        <div className="flex justify-between items-center ">
          <p className="text-xs ">Suggested Community</p>
          <Button className="text-[10px] rounded-[10px] bg-[#FEF0FF] text-black h-[20px] hover:bg-blue-200">
            See All
          </Button>
        </div>

        <Card className="p-2 rounded-[5px] space-y-3 border-[0.5px] border-gray-200 mt-4">
          <Image
            src="/images/group.png"
            alt="post"
            priority
            width={0}
            height={0}
            sizes="100%"
            style={{ width: "100%", height: "auto" }}
          />

          <p className="text-base font-medium">UI/UX Designer</p>
          <div className="flex text-xs text-[#868686] items-center gap-x-2">
            <p>1425 Members</p>
            <p>32 post/Day</p>
          </div>
          <Button className="text-xs w-full mt-4 h-[31px] rounded-[3px]">
            Complete your Profile
          </Button>
        </Card>
      </div>
    </>
  );
}
