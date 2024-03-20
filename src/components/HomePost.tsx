
import { BsThreeDots } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { LuDot } from "react-icons/lu";
import { FaGlobeAmericas } from "react-icons/fa";
import { HiPlus } from "react-icons/hi";
import { SlLike } from "react-icons/sl";
import { AiOutlineComment } from "react-icons/ai";
import { BiRepost } from "react-icons/bi";
import { LuSend } from "react-icons/lu";
import Link from "next/link";
import RecentGroups from "@/components/RecentGroups";
import SuggestedGroups from "@/components/SuggestedGroups";
import Events from "@/components/Events";
import FollowedHashTags from "@/components/FollowedHashTags";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import AppEditor from "./Editor";
import { Button } from "./ui/button";

const HomePost = () => {
  return (
    <Card className="">
      <div className="flex gap-4 w-full">
        <Avatar className="h-[39px] w-[39px]">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>MD</AvatarFallback>
        </Avatar>
        <div className="w-full">
          <div>
            <div className="flex items-center justify-between">
              <Link href={"/company?status=home"}>
                <p className="font-bold hover:text-[#0a66c2] text-base hover:underline hover:cursor-pointer">
                  Umang Sharma
                </p>
              </Link>
            </div>
            <div className="flex items-center gap-x-1 ">
              <Image
                src={"/images/clock-hour-3@2x.png"}
                alt="Logo"
                width={11}
                height={11}
                priority
                className="z-50 object-fit"
              />
              <p className="flex items-center gap-x-1">
                <span className="text-xs text-[#868686]">
                  12 minutes ago on
                </span>
                <span className="text-xs font-medium">Pitch N Hire</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <p className="py-5  text-xs w-[75%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="">
          <div>
            <Image
              src="/images/post.png"
              alt="post"
              priority
              width={0}
              height={0}
              sizes="100%"
              style={{ width: "100%", height: "auto" }}
            />
          </div>

          <div className="flex items-center gap-x-16 mt-4">
            <div className="flex items-center gap-2 ">
              <Image
                src="/images/thumb-up@2x.png"
                alt="post"
                priority
                width={18}
                height={18}
                className="object-fit"
              />
              <div className="flex items-center gap-[7px]">
                <p className="text-[10px]">Like</p>
                <Badge className="bg-[#E3F0FF] text-[#0472F4] text-[10px] rounded-[10px]">
                  1.1 K
                </Badge>
              </div>
            </div>
            <div className="flex items-center gap-2 ">
              <Image
                src="/images/message@2x.png"
                alt="post"
                priority
                width={18}
                height={18}
                className="object-fit"
              />
              <div className="flex items-center gap-[7px]">
                <p className="text-[10px]">Comment</p>
                <Badge className="bg-[#E3F0FF] text-[#0472F4] text-[10px] rounded-[10px]">
                  23
                </Badge>
              </div>
            </div>
            <div className="flex items-center gap-2 ">
              <Image
                src="/images/share@2x.png"
                alt="post"
                priority
                width={18}
                height={18}
                className="object-fit"
              />
              <div className="flex items-center gap-[7px]">
                <p className="text-[10px]">Share</p>
                <Badge className="bg-[#E3F0FF] text-[#0472F4] text-[10px] rounded-[10px]">
                  321
                </Badge>
              </div>
            </div>
          </div>
          <hr className="border-t-[0.5px]  border-gray-200 w-full my-4"></hr>
          <div className="flex items-center gap-4 w-full">
            <Avatar className="h-[39px] w-[39px]">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>MD</AvatarFallback>
            </Avatar>
            <div className="w-full">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="h-12 px-4 flex items-center py-5 w-full rounded-[5px] border-[0.5px] cursor-pointer bg-[#F9F9F9]">
                    <p className="text-[#868686] text-xs">Add a Comment…</p>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[800px]">
                  <DialogHeader>
                    <div className="flex gap-3 items-center">
                      <div>
                        <Avatar className="h-16 w-16">
                          <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                          />
                          <AvatarFallback>MD</AvatarFallback>
                        </Avatar>
                      </div>
                      <div>
                        <DialogTitle>Mark Davidson</DialogTitle>
                        <p className="text-sm">Post to Anyone</p>
                      </div>
                    </div>

                    <div className="py-10">
                      <AppEditor className="" />
                    </div>
                  </DialogHeader>

                  <DialogFooter>
                    <div className="flex w-full justify-end">
                      <Button
                        type="submit"
                        className="bg-[#0a66c2] text-white text-xs "
                      >
                        Post
                      </Button>
                    </div>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <hr className="border-t-[0.5px]  border-gray-200 w-full my-4"></hr>
        </div>
      </div>
      <div className="w-full  flex justify-center items-center">
        <p className="text-xs text-[#0472F4]">View all Comments</p>
      </div>
    </Card>
  );
}

export default HomePost