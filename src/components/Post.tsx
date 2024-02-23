import { AiOutlineComment } from "react-icons/ai";
import { BiRepost } from "react-icons/bi";
import { LuDot, LuSend } from "react-icons/lu";
import { SlLike } from "react-icons/sl";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { BsThreeDots } from "react-icons/bs";
import { FaGlobeAmericas } from "react-icons/fa";
import Image from "next/image";
import { usePathname } from "next/navigation";





export default function Post(props:any) {
    const pathname = usePathname()

    return (
        <>
            <div>
                <div className="flex gap-4 w-full p-4">
                    <Avatar className={`h-10 w-10 ${pathname.includes('/company') ? "rounded-none" : "rounded-full"}`}>
                        <AvatarImage src={props.logo}alt="@shadcn" />
                        <AvatarFallback>MD</AvatarFallback>
                    </Avatar>
                    <div className="w-full">
                        <div>
                            <div className="flex items-center justify-between">
                                <Link href={"/user?status=home"}>
                                    <p className="font-bold hover:text-[#0a66c2] hover:underline hover:cursor-pointer">{props.companyName}</p>
                                </Link>
                                <div className="flex items-center gap-4">
                                    <div>
                                        <BsThreeDots />
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <p className="text-xs text-gray-500">{props.followers} followers</p>
                                <div className="flex items-center">
                                    <p className="text-xs text-gray-500">{props.timeOfPost}</p>
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
                        <p className="px-5 text-sm">{props.content}</p>
                    </div>

                    <div className="py-1">

                        <div className="py-3">
                            <div>
                                <Image src="/images/AppsierraWeeklyPost.png" alt="post" priority width={0}
                                    height={0}
                                    sizes="100%"
                                    style={{ width: '100%', height: 'auto' }} />
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mb-2 mx-5">
                            <p className="text-xs text-gray-500">{props.comments} comments</p>
                            <p className="text-xs text-gray-500" >.</p>
                            <p className="text-xs text-gray-500">{props.reposts} reposts</p>
                        </div>
                        <hr />
                        <div className="flex items-center justify-evenly mt-2">
                            <div className="flex flex-col items-center gap-2 ">
                                <div>
                                    <SlLike size={20} color="#6b7280" />
                                </div>
                                <p className="text-sm font-medium text-gray-500">Like</p>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div>
                                    <AiOutlineComment size={23} color="#6b7280" />
                                </div>
                                <p className="text-sm font-medium text-gray-500">Comment</p>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div>
                                    <BiRepost size={27} color="#6b7280" />
                                </div>
                                <p className="text-sm font-medium text-gray-500">Repost</p>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div>
                                    <LuSend size={22} color="#6b7280" />
                                </div>
                                <p className="text-sm font-medium text-gray-500">Send</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}