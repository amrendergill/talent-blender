"use client";

import Image from "next/image";
import Link from "next/link";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import {
  CreditCard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  PlusCircle,
  Settings,
  User,
  UserPlus,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Input } from "./ui/input";

export default function Navbar() {
  const pathname = usePathname();
  const notifications = [
    {
      logo: "/images/olu-famule-kYx_g4YBfLI-unsplash.jpg",
      notificationTitle: "Joseph Mcfall appied to your job",
      time: "10 minutes ago",
    },
    {
      logo: "/images/olu-famule-kYx_g4YBfLI-unsplash.jpg",
      notificationTitle: "Joseph Mcfall appied to your job",
      time: "10 minutes ago",
    },
    {
      logo: "/images/olu-famule-kYx_g4YBfLI-unsplash.jpg",
      notificationTitle: "Joseph Mcfall appied to your job",
      time: "10 minutes ago",
    },
    {
      logo: "/images/olu-famule-kYx_g4YBfLI-unsplash.jpg",
      notificationTitle: "Joseph Mcfall appied to your job",
      time: "10 minutes ago",
    },
    {
      logo: "/images/olu-famule-kYx_g4YBfLI-unsplash.jpg",
      notificationTitle: "Joseph Mcfall appied to your job",
      time: "10 minutes ago",
    },
    {
      logo: "/images/olu-famule-kYx_g4YBfLI-unsplash.jpg",
      notificationTitle: "Joseph Mcfall appied to your job",
      time: "10 minutes ago",
    },
    {
      logo: "/images/olu-famule-kYx_g4YBfLI-unsplash.jpg",
      notificationTitle: "Joseph Mcfall appied to your job",
      time: "10 minutes ago",
    },
  ];
  console.log("path", pathname);
  return (
    <header className="  sticky top-0  w-full z-[100] ">
      <nav className="bg-white border-b-[0.5px] border-gray-200">
        <div className="container  flex items-center justify-between  bg-white">
          <div className="flex gap-x-4 my-3 items-center ">
            <div className="w-fit">
              <Image
                src={"/images/menu.svg"}
                alt="Logo"
                width={24}
                height={24}
                priority
                className="z-50 object-fit"
              />
            </div>
            <Link href={"/"}>
              <div className="text-xl font-semibold">
                <span>Talent </span>
                <span className="text-[#0472F4]">Blender</span>
              </div>
            </Link>
          </div>
          <div className="flex gap-x-10 items-center ">
            <Link href={"/"}>
              <div
                className={`w-fit flex flex-col justify-center items-center gap-y-[2px]  py-4 px-3 ${
                  pathname === "/" && "border-b-[2px] border-[#0472F4]"
                }  `}
              >
                {pathname === "/" ? (
                  <>
                    <Image
                      src={"/images/home-blue.png"}
                      alt="Logo"
                      width={15}
                      height={15}
                      priority
                      className="z-50 object-fit"
                    />
                    <p className="text-[#0472F4] text-[10px] ">Home</p>
                  </>
                ) : (
                  <>
                    <Image
                      src={"/images/home.svg"}
                      alt="Logo"
                      width={15}
                      height={15}
                      priority
                      className="z-50 object-fit"
                    />
                    <p className="text-[#B7B7B7] text-[10px]">Home</p>
                  </>
                )}
              </div>
            </Link>
            <Link href={"/jobs"}>
              <div
                className={`w-fit flex flex-col justify-center items-center gap-y-[2px] px-3 py-4 ${
                  pathname.includes("jobs") &&
                  "border-b-[2px] border-[#0472F4]  "
                }  `}
              >
                {pathname.includes("jobs") ? (
                  <>
                    <Image
                      src={"/images/briefcase (1).svg"}
                      alt="Logo"
                      width={15}
                      height={15}
                      priority
                      className="z-50 object-fit"
                    />
                    <p className="text-[#0472F4] text-[10px]">Jobs</p>
                  </>
                ) : (
                  <>
                    <Image
                      src={"/images/briefcase.svg"}
                      alt="Logo"
                      width={15}
                      height={15}
                      priority
                      className="z-50 object-fit"
                    />
                    <p className="text-[#B7B7B7] text-[10px]">Jobs</p>
                  </>
                )}
              </div>
            </Link>
            <Link href={"/explore"}>
              <div
                className={`w-fit flex flex-col justify-center items-center gap-y-[2px] px-3 py-4 ${
                  pathname.includes("explore") &&
                  "border-b-[2px] border-[#0472F4]  "
                }  `}
              >
                {pathname.includes("explore") ? (
                  <>
                    <Image
                      src={"/images/navigation (1).svg"}
                      alt="Logo"
                      width={15}
                      height={15}
                      priority
                      className="z-50 object-fit"
                    />
                    <p className="text-[#0472F4] text-[10px]">Explore</p>
                  </>
                ) : (
                  <>
                    <Image
                      src={"/images/navigation.svg"}
                      alt="Logo"
                      width={15}
                      height={15}
                      priority
                      className="z-50 object-fit"
                    />
                    <p className="text-[#B7B7B7] text-[10px]">Explore</p>
                  </>
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-center gap-x-1 my-3  text-sm px-3  bg-[#F9F9F9] border-[0.5px] border-gray-200 rounded-[5px]">
            <Image
              src={"/images/search.svg"}
              alt="Logo"
              width={15}
              height={15}
              priority
              className="z-50 object-fit "
            />
            <Input
              type="text"
              placeholder="Search"
              className="  text-sm !outline-none !ring-0 bg-inherit border-none  "
            />
          </div>
          <div className="my-3">
            <ul className="flex items-center gap-10">
              <Link href={"/chat"}>
                <li
                  className={`flex items-center text-sm flex-col ${
                    pathname.includes("/chat") ? "text-blue-500" : "text-black"
                  }`}
                >
                  <Image
                    src={"/images/comment.svg"}
                    alt="Logo"
                    width={15}
                    height={15}
                    priority
                    className="z-50 object-fit  "
                  />
                </li>
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <li
                    className={`flex items-center text-sm flex-col cursor-pointer ${
                      pathname.includes("/notification")
                        ? "text-blue-500"
                        : "text-black"
                    }`}
                  >
                    <Image
                      src={"/images/bell.svg"}
                      alt="Logo"
                      width={15}
                      height={15}
                      priority
                      className="z-50 object-fit  "
                    />
                  </li>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-80 z-[100]">
                  <DropdownMenuLabel>My Notifications</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <div className="flex flex-col gap-5 px-3 py-3">
                      {notifications?.map((el: any, index: any) => {
                        return (
                          <>
                            <div className="flex items-center gap-3">
                              <div>
                                <Avatar className="h-10 w-10">
                                  <AvatarImage src={el?.logo} alt="logo" />
                                  <AvatarFallback>MD</AvatarFallback>
                                </Avatar>
                              </div>
                              <div className="flex flex-col gap-1">
                                <p className="text-sm font-semibold flex flex-wrap">
                                  {el?.notificationTitle}
                                </p>
                                <p className="text-xs text-blue-500">
                                  {el?.time}
                                </p>
                              </div>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </DropdownMenuGroup>

                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-center flex items-center justify-center">
                    <Link href={"/notification"}>
                      <span className=" text-blue-500">See All</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <li className="flex text-sm items-center flex-col cursor-pointer">
                    <Image
                      src={"/images/ellipse.png"}
                      alt="Logo"
                      width={24}
                      height={24}
                      priority
                      className="z-50 object-fit  "
                    />
                  </li>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 z-[100]">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <Link href={"/user"}>
                      <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                      </DropdownMenuItem>
                    </Link>
                    <DropdownMenuItem>
                      <CreditCard className="mr-2 h-4 w-4" />
                      <span>Billing</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>
                        <UserPlus className="mr-2 h-4 w-4" />
                        <span>Invite users</span>
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                          <DropdownMenuItem>
                            <Mail className="mr-2 h-4 w-4" />
                            <span>Email</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <MessageSquare className="mr-2 h-4 w-4" />
                            <span>Message</span>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <PlusCircle className="mr-2 h-4 w-4" />
                            <span>More...</span>
                          </DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LifeBuoy className="mr-2 h-4 w-4" />
                    <span>Support</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
