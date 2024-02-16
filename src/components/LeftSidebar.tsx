import Image from "next/image";
import { Card } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { IoBookmarkSharp } from "react-icons/io5";
import { HiMiniUserGroup } from "react-icons/hi2";
import { HiPlus } from "react-icons/hi";

export default function LeftSidebar() {
    return (
        <>
            <Card className="p-0 ">
                <div className="mb-10 relative z-0">

                    <div className="">

                        <Image src={'/images/ken-cheung-0F2nvpob0_c-unsplash.jpg'} className="rounded-t-lg" alt="cover image" priority width={0} height={0} objectFit="cover" sizes="100%"
                            style={{ width: '100%', height: '60px' }} />
                    </div>
                    <div className="border-2 rounded-full border-white w-fit absolute top-5 left-16" >
                        <Avatar className="h-[72px] w-[72px]">
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>MD</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
                <div className="w-full divide-y">
                    <div className="mt-16 mb-4 w-full flex flex-wrap items-center justify-center">
                        <p className="font-bold ">Mark Davidson</p>
                        <p className="text-xs w-fit text-gray-500">
                            Software Engineer | Content Creator | Educator | Mentor | Freelancer
                        </p>
                    </div>
                    <div className="py-4 px-3 flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                            <p className="text-xs text-gray-500 font-medium">Profile viewers</p>
                            <p className="text-xs text-[#0a66c2] font-medium">300</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-xs text-gray-500 font-medium">Post impressions</p>
                            <p className="text-xs text-[#0a66c2] font-medium">10</p>
                        </div>

                    </div>
                    <div className="py-4 px-3">
                        <p className="text-xs text-gray-500 font-normal">Strengthen your profile with an AI writing assisstant</p>

                    </div>
                    <div className="py-4 px-3">
                        <div className="flex items-center gap-3">
                            <div>
                                <IoBookmarkSharp color="#6b7280" />
                            </div>
                            <p className="text-xs text-gray-500 font-semibold">My Items</p>

                        </div>
                    </div>
                </div>



            </Card>
            <Card className="px-3 py-4 ">
                <div>
                    <p className="text-sm text-gray-500 font-semibold">Recent</p>
                    <div className="py-3 flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                            <div>
                                <HiMiniUserGroup color="#3d3f43" />
                            </div>
                            <p className="text-xs text-gray-500 font-medium">JavaScript</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div>
                                <HiMiniUserGroup color="#3d3f43" />
                            </div>
                            <p className="text-xs text-gray-500 font-medium">AI & ML</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div>
                                <HiMiniUserGroup color="#3d3f43" />
                            </div>
                            <p className="text-xs text-gray-500 font-medium">Data Science</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div>
                                <HiMiniUserGroup color="#3d3f43" />
                            </div>
                            <p className="text-xs text-gray-500 font-medium">React Native</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div>
                                <HiMiniUserGroup color="#3d3f43" />
                            </div>
                            <p className="text-xs text-gray-500 font-medium">Automation</p>
                        </div>

                    </div>
                </div>

                <div className=" mt-5">
                    <p className="text-sm text-[#0a66c2] font-semibold">Groups</p>
                    <div className="py-3 flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                            <div>
                                <HiMiniUserGroup color="#3d3f43" />
                            </div>
                            <p className="text-xs text-gray-500 font-medium">JavaScript</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div>
                                <HiMiniUserGroup color="#3d3f43" />
                            </div>
                            <p className="text-xs text-gray-500 font-medium">AI & ML</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div>
                                <HiMiniUserGroup color="#3d3f43" />
                            </div>
                            <p className="text-xs text-gray-500 font-medium">Data Science</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div>
                                <HiMiniUserGroup color="#3d3f43" />
                            </div>
                            <p className="text-xs text-gray-500 font-medium">React Native</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div>
                                <HiMiniUserGroup color="#3d3f43" />
                            </div>
                            <p className="text-xs text-gray-500 font-medium">Automation</p>
                        </div>

                    </div>

                    <div>
                        <div className="flex items-center justify-between mt-5 ">

                        <p className="text-sm  text-[#0a66c2] font-semibold">
                            Events
                        </p>
                        <div>
                            <HiPlus color="#0a66c2" />
                        </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between mt-5 ">

                        <p className="text-sm text-[#0a66c2] font-semibold">
                            Followed Hashtags
                        </p>
                        
                        </div>
                    </div>
                </div>
            </Card>
        </>
    )
}