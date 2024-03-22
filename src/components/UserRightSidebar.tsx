import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

const data = [
    { name: "Arpit Singhal", role: "Founder & CEO at AppSierra Group | Specialized in Strategic", src: "images/Ellipse 4@2x.png", task: "Follow" },
    { name: "Umang Sharma", role: "UI/UX Designer at Appsierra", src: "images/Ellipse 5@2x.png", task: "Follow" },
    { name: "Krishna Shrivastava", role: "Senior Frontend Developer", src: "images/Ellipse 6@2x.png", task: "Connect" },
    {
      name: "Sourabh Singh",
      role: "Associate Developer",
      src: "images/Ellipse 7@2x.png", task: "Join",
    },
  ];

export default function UserRightSidebar() {
  return (
    <>
       <Card className="p-[20px]">
              <h2 className="font-semibold text-sm text-[#212529]">People may you know</h2>
              {data.map((item, index) => (
                <div key={`data${index}`} className="flex mt-[20px] border-b pb-[20px] justify-between  gap-x-10">
                  <div className="flex items-center gap-x-2">
                    <Avatar className=" h-[49px]  w-[49px]  !bg-[#E6FFDE]">
                      <AvatarImage src={item?.src} />
                    </Avatar>
                    <div className="space-y-[0.5px]">
                      <p className="text-sm font-medium text-[#000000]">
                        {item?.name}
                      </p>
                      <p className="text-[#868686] font-regular text-xs">
                        {item?.role}
                        </p>
                    </div>
                  </div>
                  <Button className="bg-white text-[#0472F4] border-[0.5px] rounded-[13px] px-3 h-[25px] text-xs space-x-1 border-[#0472F4] hover:bg-blue-200">
                    <span>+</span>
                    <span>Follow</span>
                  </Button>
                </div>
              ))}
              <p className="text-xs mt-[10px] underline justify-center flex font-regular text-[#212529]">See all</p>
            </Card>
    </>
  );
}
