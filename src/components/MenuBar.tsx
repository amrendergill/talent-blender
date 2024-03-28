import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

  const personal = [
    {
      src: "/images/users (2)@2x.png",
      name: "Following & Followers",
    },
    {
      src: "/images/employees@2x.png",
      name: "Community",
    },
    {
      src: "/images/calendar-star@2x.png",
      name: "Events",
    },
    {
      src: "/images/employee-man-alt@2x.png",
      name: "Job Applications",
    },
  ];
  const account = [
    {
      src: "/images/chart-pie-alt (2)@2x.png",
      name: "Dashboard",
    },
    {
      src: "/images/settings (5)@2x.png",
      name: "Settings",
    },
    {
      src: "/images/lock (1)@2x.png",
      name: "Privacy Policy",
    },
  ];

const MenuBar = () => {
  return (
    <div>
      {" "}
      <div className="space-y-6 mt-4">
        <div className="flex items-center gap-x-2">
          <Avatar className="h-[45px] w-[45px]">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>MD</AvatarFallback>
          </Avatar>
          <div className="w-full">
            <div>
              <div className="">
                <p className="font-medium hover:text-[#0a66c2] text-lg hover:underline hover:cursor-pointer">
                  Umang Sharma
                </p>
                <p className="text-xs font-medium text-[#0472F4]">
                  View Profile
                </p>
              </div>
              <div className="flex items-center gap-x-1 "></div>
            </div>
          </div>
        </div>
        <Button className="text-xs w-full rounded-[3px] h-8 !font-normal">
          Switch to Recruiter Mode
        </Button>
        <div className="space-y-2">
          <p className="text-[#868686] text-xs">Personal</p>
          {personal.map((item) => (
            <div className="p-2 hover:bg-[#F9F9F9] cursor-pointer rounded-[5px] flex items-center gap-x-2 ">
              <Image
                src={item.src}
                alt="Logo"
                width={11}
                height={11}
                priority
                className="z-50 object-fit"
              />
              <p className="text-sm">{item.name}</p>
            </div>
          ))}
        </div>
        <hr className="border-t-[0.5px]  border-gray-200 w-full "></hr>
        <div className="space-y-2">
          <p className="text-[#868686] text-xs">Account</p>
          {account.map((item) => (
            <div className="p-2 hover:bg-[#F9F9F9] cursor-pointer rounded-[5px] flex items-center gap-x-2 ">
              <Image
                src={item.src}
                alt="Logo"
                width={11}
                height={11}
                priority
                className="z-50 object-fit"
              />
              <p className="text-sm">{item.name}</p>
            </div>
          ))}
        </div>
        <hr className="border-t-[0.5px]  border-gray-200 w-full "></hr>
        <div className="space-y-2">
          <p className="text-[#868686] text-xs">Support</p>

          <div className="p-2 hover:bg-[#F9F9F9] cursor-pointer rounded-[5px] flex items-center gap-x-2 ">
            <Image
              src={"/images/interrogation@2x.png"}
              alt="Logo"
              width={11}
              height={11}
              priority
              className="z-50 object-fit"
            />
            <p className="text-sm">Help</p>
          </div>
        </div>
        <hr className="border-t-[0.5px]  border-gray-200 w-full "></hr>
        <div className="space-y-2">
          <div className="p-2 hover:bg-[#F9F9F9] cursor-pointer rounded-[5px] flex items-center gap-x-2 ">
            <Image
              src={"/images/exit@2x.png"}
              alt="Logo"
              width={11}
              height={11}
              priority
              className="z-50 object-fit"
            />
            <p className="text-sm">Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuBar