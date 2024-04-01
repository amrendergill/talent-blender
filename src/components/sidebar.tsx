"use client";

import Link from "next/link";
import { MoreVertical, SquarePen } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Message } from "@/app/data";
import { Input } from "./ui/input";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


interface SidebarProps {
  isCollapsed: boolean;
  links: {
    // name: string;
    // messages: Message[];
    // avatar: string;
    name:any,
    messages: any[],
    avatar:any,
    variant: "grey" | "ghost";
  }[];
  onClick?: () => void;
  isMobile: boolean;
}

export function Sidebar({ links, isCollapsed, isMobile }: SidebarProps) {
  console.log("links", links)
  return (
    <div
      data-collapsed={isCollapsed}
      className="relative group flex flex-col h-full gap-4 p-2 data-[collapsed=true]:p-2 "
    >
      {!isCollapsed && (
        <>
          <div className="flex justify-between p-2 items-center">
            <div className="flex gap-2 items-center text-2xl">
              <p className="font-medium text-xl text-[#000000]">Messages</p>
              {/* <span className="text-zinc-300">({links.length})</span> */}
            </div>

            <div>
              <Link
                href="#"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "h-9 w-9"
                )}
              >
                <MoreVertical size={20} />
              </Link>
            </div>
          </div>
          <div className="flex items-center text-sm px-3  bg-[#F9F9F9] border-[0.5px] mr-[25px] border-gray-200 rounded-[5px]">
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
              className="text-sm !outline-none !ring-0 bg-inherit border-none  "
            />
          </div>
          <div className=" border-b mr-[25px]"></div>
          <Tabs defaultValue="account" className=''>
            <TabsList>
              <TabsTrigger value="account" className="w-[91px]">All</TabsTrigger>
              <TabsTrigger value="password" className="w-[91px]">Requests</TabsTrigger>
              <TabsTrigger value="other" className="w-[91px]">Other</TabsTrigger>
            </TabsList>
            <TabsContent value="account"></TabsContent>
            <TabsContent value="password"></TabsContent>
          </Tabs>
        </>
      )}
      <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {links?.length > 0 ?
         (links.map((link: any, index) =>
        
          isCollapsed ? (
            <TooltipProvider key={index}>
              <Tooltip key={index} delayDuration={0}>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    className={cn(
                      buttonVariants({ variant: link.variant, size: "icon" }),
                      "h-11 w-11 md:h-16 md:w-16",
                      link.variant === "grey" &&
                      "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                    )}
                  >
                    <Avatar className="flex justify-center items-center">
                      <AvatarImage
                        src={link.avatar}
                        alt={link.avatar}
                        width={6}
                        height={6}
                        className="w-10 h-10 "
                      />
                    </Avatar>{" "}
                    <span className="sr-only">{link.name}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="flex items-center gap-4"
                >
                  {link.name}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : (
            <Link
              key={index}
              href="#"
              className={cn(
                buttonVariants({ variant: link.variant }),
                link.variant === "grey" &&
                "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white shrink",
                "justify-start gap-4"
              )}
            >
              <Avatar className="flex justify-center items-center">
                <AvatarImage
                  src={link.avatar}
                  alt={link.avatar}
                  width={6}
                  height={6}
                  className="w-10 h-10 "
                />
              </Avatar>
              <div className="flex flex-col max-w-28">
                <span>{link.name}</span>
                {link.messages.length > 0 && (
                  <span className="text-zinc-300 text-xs truncate ">
                    {link.messages[link.messages.length - 1].name.split(" ")[0]}
                    : {link.messages[link.messages.length - 1].message}
                  </span>
                )}
              </div>
            </Link>
          )
        
          )):
        (
          <div className="mt-[100px]">
            <h2 className="text-2xl  text-center font-medium text-[#8B8B8B] ">No messages.</h2>
            <p className="text-sm mt-[15px] text-center font-regular text-[#868686]">Take the initiative and start a conversation to enhance your career prospects. </p>
            </div>
        )
       } 
      </nav>
    </div>
  );
}
