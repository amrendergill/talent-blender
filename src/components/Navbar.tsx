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

export default function Navbar() {
  const pathname = usePathname();
  const notifications = [
    {
      logo: "/images/olu-famule-kYx_g4YBfLI-unsplash.jpg",
      notificationTitle: "Joseph Mcfall appied to your job",
      time: "10 minutes ago"
    },
    {
      logo: "/images/olu-famule-kYx_g4YBfLI-unsplash.jpg",
      notificationTitle: "Joseph Mcfall appied to your job",
      time: "10 minutes ago"
    },
    {
      logo: "/images/olu-famule-kYx_g4YBfLI-unsplash.jpg",
      notificationTitle: "Joseph Mcfall appied to your job",
      time: "10 minutes ago"
    },
    {
      logo: "/images/olu-famule-kYx_g4YBfLI-unsplash.jpg",
      notificationTitle: "Joseph Mcfall appied to your job",
      time: "10 minutes ago"
    },
    {
      logo: "/images/olu-famule-kYx_g4YBfLI-unsplash.jpg",
      notificationTitle: "Joseph Mcfall appied to your job",
      time: "10 minutes ago"
    },
    {
      logo: "/images/olu-famule-kYx_g4YBfLI-unsplash.jpg",
      notificationTitle: "Joseph Mcfall appied to your job",
      time: "10 minutes ago"
    },
    {
      logo: "/images/olu-famule-kYx_g4YBfLI-unsplash.jpg",
      notificationTitle: "Joseph Mcfall appied to your job",
      time: "10 minutes ago"
    },
  ];

  return (
    <header className="border-b shadow-sm h-[70px] sticky top-0 bg-white w-full z-[100] ">
      <nav>
        <div className="container py-3 flex items-center justify-between">
          <Link href={"/"}>
            <div className="w-fit">
              <Image
                src={"/images/PNH-logo.png"}
                alt="Logo"
                width={150}
                height={100}
                priority
                className="z-50 object-fit"
              />
            </div>
          </Link>
          <div>
            <ul className="flex items-center gap-10">
              <Link href={"/chat"}>
                <li
                  className={`flex items-center text-sm flex-col ${
                    pathname.includes("/chat") ? "text-blue-500" : "text-black"
                  }`}
                >
                  <IoChatbubbleEllipsesOutline size={18} />
                  Chat
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
                    <IoMdNotificationsOutline size={18} />
                    Notifications
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
                    <CgProfile size={18} />
                    Profile
                  </li>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 z-[100]">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <Link href={"/profile?status=basic-details"}>
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
