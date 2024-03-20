import Image from "next/image";
import {
  Card,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import dynamic from "next/dynamic";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import HomePost from "@/components/HomePost";

const AppEditor = dynamic(() => import("@/components/Editor"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className=" flex gap-x-4 bg-[#F7F7F7]">
      <div className=" w-[245px]  min-w-[225px] flex flex-col gap-4 pt-4 pr-4 bg-white">
        <LeftSidebar></LeftSidebar>
      </div>
      <div className="flex min-h-screen flex-col items-center w-full gap-4 mt-4">
        <Card className="w-full !rounded-[5px]">
          <div className="flex items-center gap-4 w-full">
            <Avatar className="h-[39px] w-[39px]">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>MD</AvatarFallback>
            </Avatar>
            <div className="w-full">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="h-12 px-4 flex justify-between items-center py-5 w-full rounded-[5px] border-[0.5px] cursor-pointer bg-[#F9F9F9]">
                    <p className="text-[#868686] text-xs">
                      What’s on your mind
                    </p>
                    <div className="flex items-center gap-x-4">
                      <Image
                        src={"/images/camera@2x.png"}
                        alt="Logo"
                        width={17}
                        height={17}
                        priority
                        className="z-50 object-fit"
                      />
                      <Image
                        src={"/images/photo-scan@2x.png"}
                        alt="Logo"
                        width={17}
                        height={17}
                        priority
                        className="z-50 object-fit"
                      />
                      <Image
                        src={"/images/paperclip@2x.png"}
                        alt="Logo"
                        width={17}
                        height={17}
                        priority
                        className="z-50 object-fit"
                      />
                    </div>
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
        </Card>
        <div className="flex justify-center items-center gap-x-2 w-full">
          <span className="text-xs whitespace-nowrap font-medium">
            My Community
          </span>
          <hr className="border-t-[0.5px]  border-gray-200 w-full "></hr>
        </div>
        <div className="mb-10 space-y-4">
          <HomePost />
          <HomePost />
        </div>
      </div>

      <div className=" w-[300px] max-w-[300px] min-w-[300px] flex flex-col gap-4 bg-white">
        <RightSidebar />
      </div>
    </main>
  );
}
