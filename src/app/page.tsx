'use client'
import Image from "next/image";
import {
  Card, CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import dynamic from 'next/dynamic';
import {
  Dialog, DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BsThreeDots } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { LuDot } from "react-icons/lu";
import { FaGlobeAmericas } from "react-icons/fa";
import { HiPlus } from "react-icons/hi";
import { SlLike } from "react-icons/sl";
import { AiOutlineComment } from "react-icons/ai";
import { BiRepost } from "react-icons/bi";
import { LuSend } from "react-icons/lu";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import Link from "next/link";
const AppEditor = dynamic(() => import('@/components/Editor'), {
  ssr: false
});

export default function Home() {
  return (
    <main className="container flex gap-4">
      <div className="py-24 w-[225px] max-w-[225px] min-w-[225px] flex flex-col gap-4">
        <LeftSidebar />
      </div>
      <div className="flex min-h-screen flex-col items-center w-full gap-4 py-24">

      <Card className="w-full">
        <div className="flex items-center gap-4 w-full">
          <Avatar className="h-16 w-16">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>MD</AvatarFallback>
          </Avatar>
          <div className="w-full">
            <Dialog>
              <DialogTrigger asChild>
                <div className="h-12 px-4 flex items-center py-5 w-full rounded-full border-2 cursor-pointer">
                  <p>Start a post</p>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[800px]">
                <DialogHeader>
                  <div className="flex gap-3 items-center">
                    <div>
                      <Avatar className="h-16 w-16">
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
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

                    <Button type="submit" className="bg-[#0a66c2] text-white text-xs ">Post</Button>
                  </div>
                </DialogFooter>
              </DialogContent>
            </Dialog>

          </div>
        </div>
        <CardFooter className="mt-6 p-0">
          <div className="w-full">
            <ul className="flex items-center justify-between">
              <li className="text-sm font-semibold text-gray-500">Event</li>
              <li className="text-sm font-semibold text-gray-500">Write Article</li>
              <li className="text-sm font-semibold text-gray-500">Media</li>
            </ul>
          </div>
        </CardFooter>

      </Card>
      <Card className="">
        <div className="flex gap-4 w-full">
          <Avatar className="h-16 w-16">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>MD</AvatarFallback>
          </Avatar>
          <div className="w-full">
            <div>
              <div className="flex items-center justify-between">
                <Link href={"/user?status=home"}>
                <p className="font-bold hover:text-[#0a66c2] hover:underline hover:cursor-pointer">AppSierra</p>
                </Link>
                <div className="flex items-center gap-4">
                  <div>
                    <BsThreeDots />
                  </div>
                  <div>
                    <IoClose />
                  </div>
                </div>
              </div>
              <div className="">
                <p className="text-xs text-gray-500">428 Followers</p>
                <div className="flex items-center">
                  <p className="text-xs text-gray-500">5m</p>
                  <div>
                    <LuDot />
                  </div>
                  <div>
                    <FaGlobeAmericas />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <p className="py-5 font-bold text-[#0a66c2] text-sm">#technology #it #datascience</p>
          </div>
          <hr />
          <div className="py-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6" >
                <div>
                  <Avatar className="h-16 w-16 rounded-none">
                    <AvatarImage src="/images/joshua-hanson-e616t35Vbeg-unsplash.jpg" alt="profile" />
                    <AvatarFallback>MD</AvatarFallback>
                  </Avatar>

                </div>
                <p className="font-bold">The Appsierra Weekly</p>
              </div>
              <div className="flex items-center gap-1">
                <div>
                  <HiPlus className="text-[#0a66c2] h-4 w-4" />
                </div>
                <div>
                  <p className="font-bold text-[#0a66c2]">
                    Subscribe
                  </p>
                </div>
              </div>
            </div>
            <div className="py-3">
              <div>
                <Image src="/images/AppsierraWeeklyPost.png" alt="post" priority width={0}
                  height={0}
                  sizes="100%"
                  style={{ width: '100%', height: 'auto' }} />
              </div>
            </div>
            <div className="flex items-center justify-end gap-1 mb-2">
              <p className="text-xs text-gray-500">13 comments</p>
              <p className="text-xs text-gray-500" >.</p>
              <p className="text-xs text-gray-500">25 reposts</p>
            </div>
            <hr />
            <div className="flex items-center justify-evenly mt-2">
              <div className="flex items-center gap-2 ">
                <div>
                  <SlLike size={20} color="#6b7280" />
                </div>
                <p className="text-base font-medium text-gray-500">Like</p>
              </div>
              <div className="flex items-center gap-2">
                <div>
                <AiOutlineComment size={23} color="#6b7280"/>
                </div>
                <p className="text-base font-medium text-gray-500">Comment</p>
              </div>
              <div className="flex items-center gap-2">
                <div>
                <BiRepost size={27} color="#6b7280"/>
                </div>
                <p className="text-base font-medium text-gray-500">Repost</p>
              </div>
              <div className="flex items-center gap-2">
                <div>
                <LuSend size={22} color="#6b7280"/>
                </div>
                <p className="text-base font-medium text-gray-500">Send</p>
              </div>
            </div>
            <div className="py-5">
              {/* Comment Section */}
            </div>
          </div>
        </div>

      </Card>
      </div>

<div className="py-24 w-[300px] max-w-[300px] min-w-[300px] flex flex-col gap-4">
 <RightSidebar/>
</div>
    </main>
  );
}
