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
import { Badge } from "./ui/badge";

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
    <Card className="bg-[#F9F9F9] space-y-6 border-none">
      <p className="text-base font-medium">Company Status</p>
      <div className="space-y-1">
        <p className="text-sm font-medium">Website</p>
        <p className="text-sm text-[#0472F4]">http://www.pitchnhire.com/</p>
      </div>
      <div className="space-y-1">
        <p className="text-sm font-medium">Industry</p>
        <p className="text-sm text-[#868686]">
          Technology, Information & Internet
        </p>
      </div>
      <div className="space-y-1">
        <p className="text-sm font-medium">Company size</p>
        <p className="text-sm text-[#868686]">201 - 500 employees</p>
      </div>
      <div className="space-y-1">
        <p className="text-sm font-medium">Company type</p>
        <p className="text-sm text-[#868686]">Private Company</p>
      </div>
      <div className="space-y-1">
        <p className="text-sm font-medium">Location</p>
        <p className="text-sm text-[#868686]">Noida, Uttar Pradesh</p>
      </div>
      <div className="space-y-1">
        <p className="text-sm font-medium">Total Raised</p>
        <p className="text-sm text-[#868686]">$250K</p>
      </div>
      <div className="space-y-1">
        <p className="text-sm font-medium">Specialities</p>
        <div className="flex flex-wrap gap-1">
          <Badge className="bg-[#F5F5F5] text-xs text-black !font-normal whitespace-nowrap border-[0.5px] border-gray-300 ">
            Recruitment
          </Badge>
          <Badge className="bg-[#F5F5F5] text-xs text-black !font-normal whitespace-nowrap border-[0.5px] border-gray-300 ">
            Hiring
          </Badge>
          <Badge className="bg-[#F5F5F5] text-xs text-black !font-normal whitespace-nowrap border-[0.5px] border-gray-300 ">
            Interviews & Assessments
          </Badge>
          <Badge className="bg-[#F5F5F5] text-xs text-black !font-normal whitespace-nowrap border-[0.5px] border-gray-300 ">
            ATS
          </Badge>
          <Badge className="bg-[#F5F5F5] text-xs text-black !font-normal whitespace-nowrap border-[0.5px] border-gray-300 ">
            Job Board
          </Badge>
          <Badge className="bg-[#F5F5F5] text-xs text-black !font-normal whitespace-nowrap border-[0.5px] border-gray-300 ">
            Candidate Database
          </Badge>
        </div>
      </div>
      <div className="space-y-1">
        <p className="text-sm font-medium">Founded</p>
        <p className="text-sm text-[#868686]">Year 2021</p>
      </div>
    </Card>
  );
}
