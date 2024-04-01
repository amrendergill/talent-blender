import React from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { UserData } from "@/app/data";
import { Info, Phone, Video } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface ChatTopbarProps {
  selectedUser: UserData;
}

export const TopbarIcons = [
  // { icon: Phone }, { icon: Video },
  { icon: Info }];

export default function ChatTopbar({ selectedUser }: ChatTopbarProps) {
  return (
    <div className="w-full h-20 flex p-4 justify-between items-center border-b">
      <div className="flex w-full justify-between items-center gap-2">
        <div className="flex gap-[15px]">
          <Avatar className="flex justify-center  items-center">
            <AvatarImage
              src={selectedUser?.avatar}
              alt={selectedUser?.name}
              width={6}
              height={6}
              className="w-10 h-10 "
            />
          </Avatar>
          <div className="flex flex-col">
            <span className="font-medium">{selectedUser.name}</span>
            <span className="text-xs">Active 2 mins ago</span>
          </div>
        </div>
        <div className="relative">
          <Dialog >
            <DialogTrigger asChild>
              <Button
                variant="link"
                className="text-[#000000] bg-[#F9F9F9] text-xs font-regular px-[10px] py-[7px]"
              >
                Candidate Info.
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[394px] absolute top-[270px] left-[1110px]">
              <div className="flex gap-[15px]">
                <Avatar className="flex justify-center  items-center">
                  <AvatarImage
                    src={selectedUser?.avatar}
                    alt={selectedUser?.name}
                    width={6}
                    height={6}
                    className="w-10 h-10 "
                  />
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-sm text-[#000000] font-medium">{selectedUser.name}</span>
                  <span className="text-xs font-normal text-[#0472F4]">Senior Frontend Developer</span>
                  <span className="text-[10px] font-normal text-[#000000]">Noida, Uttar Pradesh</span>
                </div>
              </div>
              <div>
                <div className="border-t flex justify-between pt-5 ">
                  <span className="text-[10px] font-normal text-[#868686]">Applied for</span>
                  <span className="text-[10px] font-normal text-[#868686]">16 Sep 2024</span>
                </div>
                <p className="w-[75%] text-sm font-normal text-[#000000]">Software Engineer - MLOps - France or Remote EMEA</p>
              </div>
              <div className="border-t pt-5">
                <span className="text-[10px] font-normal text-[#868686]">Resume</span>
                <div className="flex gap-1 justify-between items-center">
                  <div className="flex gap-1 items-center">
                    <div>
                      <img
                        src="/images/globe.svg"
                        alt="globe"
                        className="h-[10px] w-[10px]"
                      />
                    </div>
                    <p className="text-sm font-normal text-[#0472F4]">
                      www.appsierra.com
                    </p>
                  </div>
                  <div className="flex gap-5">
                  <img src='/images/linkedin (1).svg' alt='linked' className="h-[15px] w-[15px]"/>
                  <img src='/images/twitter-alt (1).svg' alt='twitter' className="h-[15px] w-[15px]"/>
                  <img src='/images/behance.png' alt='behance' className="h-[15px] w-[15px]"/>
                  <img src='/images/github.png' alt='github' className="h-[17px] w-[17px]"/>
                  <img src='/images/brand-dribbble.png' alt='brand' className="h-[17px] w-[17px]"/>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* <div>
        {TopbarIcons.map((icon, index) => (
          <Link
            key={index}
            href="#"
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "h-7 w-9",
              "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
            )}
          >
            <icon.icon size={20} className="text-muted-foreground" />
          </Link>
        ))}
      </div> */}
    </div>
  );
}
