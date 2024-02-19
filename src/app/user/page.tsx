"use client"
import RightSidebar from "@/components/RightSidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { LuDot, LuSend } from "react-icons/lu";
import { PiDotsThreeCircleThin } from "react-icons/pi";
import { IoCheckmarkSharp, IoClose } from "react-icons/io5";
import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from 'next/navigation'
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import { BsThreeDots } from "react-icons/bs";
import { FaGlobeAmericas } from "react-icons/fa";
import { AiOutlineComment } from "react-icons/ai";
import { BiRepost } from "react-icons/bi";
import { SlLike } from "react-icons/sl";
import { LiaShareSolid } from "react-icons/lia";

export default function User() {
    const [activeTab, setActiveTab] = useState("home");
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const status = params.get("status");
    const router = useRouter()

    useEffect(() => {
        handleTab(status);
    }, [status]);

    const handleTab = (tabName: any) => {
        setActiveTab(tabName);
        router.push(`/user?status=${tabName}`)
    };

    return (
        <>
            <main className="container py-24 flex gap-5">
                <div className="w-full flex flex-col gap-4">
                    <Card className="p-0">
                        <div className="relative mb-20">
                            <div>
                                <Image src={'/images/ken-cheung-0F2nvpob0_c-unsplash.jpg'} className="rounded-t-lg" alt="cover image" priority width={0} height={134} objectFit="contain" sizes="100%"
                                    style={{ width: '100%', height: '134px' }} />
                            </div>
                            <div className="border-2 rounded-none border-white w-fit absolute top-16 left-8" >
                                <Avatar className="h-[128px] w-[128px] rounded-none">
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                    <AvatarFallback>MD</AvatarFallback>
                                </Avatar>
                            </div>
                        </div>
                        <div className="px-7">
                            <h1 className="text-[32px] font-bold">AppSierra</h1>
                            <p className="text-base mb-1">
                                Software Testing | Product Development - Build High Quality Web and Mobile Apps
                            </p>
                            <div className="flex items-center gap-2">
                                <p className="text-sm text-gray-500 mb-1">
                                    IT Services and IT Consulting
                                </p>
                                <p className="text-sm text-gray-500 mb-1">
                                    .
                                </p>
                                <p className="text-sm text-gray-500 mb-1">
                                    Lewes, Delaware
                                </p>
                                <p className="text-sm text-gray-500 mb-1">
                                    .
                                </p>
                                <p className="text-sm text-gray-500 mb-1">
                                    18K Followers
                                </p>
                                <p className="text-sm text-gray-500 mb-1">
                                    .
                                </p>
                                <p className="text-sm text-gray-500 mb-1">
                                    201-500 employees
                                </p>
                            </div>
                            <div className="mt-4 mb-1 flex gap-2 items-center">
                                <div>
                                    <Avatar className="h-[24px] w-[24px] rounded-full">
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        <AvatarFallback>MD</AvatarFallback>
                                    </Avatar>
                                </div>
                                <div>
                                    <p className="text-base font-semibold text-gray-600">
                                        Christine & 10 other connections follow this page
                                    </p>
                                </div>

                            </div>

                            <div className="my-4 flex items-center gap-2">
                                <Button className="bg-[#0a66c2] text-sm text-white rounded-full flex items-center gap-2 px-9">
                                    <div>
                                        <LuSend size={16} />
                                    </div>
                                    Message
                                </Button>
                                <Button variant={"outline"} className="bg-whte text-sm text-[#0a66c2] border-[#0a66c2] rounded-full flex items-center gap-1 px-9">
                                    <div>
                                        <IoCheckmarkSharp size={20} />
                                    </div>
                                    Following
                                </Button>
                                <div>
                                    <PiDotsThreeCircleThin size={40} color="#6b7280" />

                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="px-4 pt-4">

                            <div className="flex items-center gap-5">
                                <p onClick={() => handleTab('home')} className={`font-bold  px-3 py-4 cursor-pointer ${activeTab === "home" ? "text-[#0a66c2] border-b-2 border-[#0a66c2]" : "text-gray-600 border-none"}`}>Home</p>
                                <p onClick={() => handleTab('my-company')} className={`font-bold  px-3 py-4 cursor-pointer ${activeTab === "my-company" ? "text-[#0a66c2] border-b-2 border-[#0a66c2]" : "text-gray-600 border-none"}`}>My Company</p>
                                <p onClick={() => handleTab('about')} className={`font-bold  px-3 py-4 cursor-pointer ${activeTab === "about" ? "text-[#0a66c2] border-b-2 border-[#0a66c2]" : "text-gray-600 border-none"}`}>About</p>
                                <p onClick={() => handleTab('posts')} className={`font-bold  px-3 py-4 cursor-pointer ${activeTab === "posts" ? "text-[#0a66c2] border-b-2 border-[#0a66c2]" : "text-gray-600 border-none"}`}>Posts</p>
                                <p onClick={() => handleTab('jobs')} className={`font-bold  px-3 py-4 cursor-pointer ${activeTab === "jobs" ? "text-[#0a66c2] border-b-2 border-[#0a66c2]" : "text-gray-600 border-none"}`}>Jobs</p>
                                <p onClick={() => handleTab('people')} className={`font-bold  px-3 py-4 cursor-pointer ${activeTab === "people" ? "text-[#0a66c2] border-b-2 border-[#0a66c2]" : "text-gray-600 border-none"}`}>People</p>
                            </div>

                        </div>

                    </Card>

                    {
                        activeTab === "home" && (
                            <>
                                <div className="flex flex-col gap-4">

                                    {/* about card */}
                                    <Card className="p-0">
                                        <div className="border-b">
                                            <div className="px-7 py-6">
                                                <h2 className="text-[24px] font-semibold">
                                                    About
                                                </h2>
                                                <p className="my-3 text-sm text-gray-600">
                                                    Our clients are at the centre of everything we do at Appsierra. We were built on the belief that in order to be exceptional at something, you must be incredibly focused. That is why we are committed to providing our customers with the technology-enabled solutions they require to succeed in today's digital economy. Simply put, we help our customers accelerate what matters to them by leveraging our agile engineering skills to deliver human-centric products to market at lightning speed.
                                                </p>

                                            </div>

                                        </div>
                                        <div className="w-full flex items-center justify-center text-gray-600 font-semibold gap-2">
                                            <p className="py-4">Show all details</p>
                                            <div>
                                                <FaArrowRight />
                                            </div>
                                        </div>
                                    </Card>

                                    {/* posts card */}
                                    <Card className="p-0">
                                        <div className="border-b">
                                            <div className="px-7 py-6">
                                                <h2 className="text-[24px] font-semibold">
                                                    Page posts
                                                </h2>
                                                <div className="flex items-center gap-4 my-3">
                                                    <Card className="w-[365px] min-w-[365px] max-w-[365px] p-0">
                                                        <div className="flex gap-4 w-full px-5 py-3">
                                                            <Avatar className="h-10 w-10 rounded-none">
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
                                                                <p className="px-5 font-bold text-[#0a66c2] text-sm">#technology #it #datascience</p>
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
                                                                    <p className="text-xs text-gray-500">13 comments</p>
                                                                    <p className="text-xs text-gray-500" >.</p>
                                                                    <p className="text-xs text-gray-500">25 reposts</p>
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
                                                                <div className="">
                                                                    {/* Comment Section */}
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </Card>
                                                    <Card className="w-[365px] min-w-[365px] max-w-[365px] p-0">
                                                        <div className="flex gap-4 w-full px-5 py-3">
                                                            <Avatar className="h-10 w-10 rounded-none">
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
                                                                <p className="px-5 font-bold text-[#0a66c2] text-sm">#technology #it #datascience</p>
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
                                                                    <p className="text-xs text-gray-500">13 comments</p>
                                                                    <p className="text-xs text-gray-500" >.</p>
                                                                    <p className="text-xs text-gray-500">25 reposts</p>
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

                                                    </Card>

                                                </div>

                                            </div>

                                        </div>
                                        <div className="w-full flex items-center justify-center text-gray-600 font-semibold gap-2">
                                            <p className="py-4">Show all posts</p>
                                            <div>
                                                <FaArrowRight />
                                            </div>
                                        </div>
                                    </Card>

                                    {/* past events card */}
                                    <Card className="p-0">
                                        <div className="border-b">
                                            <div className="px-7 py-6">
                                                <h2 className="text-[24px] font-semibold">
                                                    Past events
                                                </h2>
                                                <div className="flex gap-4 my-3">
                                                    <Card className="w-[264px] max-w-[264px]  min-w-[264px] p-0">
                                                        <div>
                                                            <div className="flex flex-col justify-between">
                                                                <div>
                                                                    <Image src="/images/AppsierraWeeklyPost.png" alt="post" priority width={0}
                                                                        height={0}
                                                                        sizes="100%"
                                                                        style={{ width: '100%', height: 'auto' }} />
                                                                </div>
                                                                <div className="p-3 flex flex-col justify-between">
                                                                    <p className="text-sm font-semibold text-gray-600">
                                                                        Sun, Jan 7, 2024, 7:00 PM
                                                                    </p>
                                                                    <p className="font-bold text-sm text-gray-600 leading-10">Meet & Greet - 7 January 2024</p>
                                                                    <p className="text-sm text-gray-600">124 attendees</p>
                                                                </div>
                                                                <div className="w-full flex items-center gap-2 p-3">
                                                                    <Button variant={'outline'} className="border-[#0a66c2] text-[#0a66c2] rounded-full w-full">View</Button>
                                                                    <div className="rounded-full border-[#0a66c2] border p-2">
                                                                        <LiaShareSolid size={20} color="#0a66c2" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Card>
                                                    <Card className="w-[264px] max-w-[264px]  min-w-[264px] p-0">
                                                        <div>
                                                            <div className="flex flex-col justify-between">
                                                                <div>
                                                                    <Image src="/images/AppsierraWeeklyPost.png" alt="post" priority width={0}
                                                                        height={0}
                                                                        sizes="100%"
                                                                        style={{ width: '100%', height: 'auto' }} />
                                                                </div>
                                                                <div className="p-3 flex flex-col justify-between">
                                                                    <p className="text-sm font-semibold text-gray-600">
                                                                        Sun, Jan 7, 2024, 7:00 PM
                                                                    </p>
                                                                    <p className="font-bold text-sm text-gray-600 leading-10">Meet & Greet - 7 January 2024</p>
                                                                    <p className="text-sm text-gray-600">124 attendees</p>
                                                                </div>
                                                                <div className="w-full flex items-center gap-2 p-3">
                                                                    <Button variant={'outline'} className="border-[#0a66c2] text-[#0a66c2] rounded-full w-full">View</Button>
                                                                    <div className="rounded-full border-[#0a66c2] border p-2">
                                                                        <LiaShareSolid size={20} color="#0a66c2" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Card>
                                                    <Card className="w-[264px] max-w-[264px]  min-w-[264px] p-0">
                                                        <div>
                                                            <div className="flex flex-col justify-between">
                                                                <div>
                                                                    <Image src="/images/AppsierraWeeklyPost.png" alt="post" priority width={0}
                                                                        height={0}
                                                                        sizes="100%"
                                                                        style={{ width: '100%', height: 'auto' }} />
                                                                </div>
                                                                <div className="p-3 flex flex-col justify-between">
                                                                    <p className="text-sm font-semibold text-gray-600">
                                                                        Sun, Jan 7, 2024, 7:00 PM
                                                                    </p>
                                                                    <p className="font-bold text-sm text-gray-600 leading-10">Meet & Greet - 7 January 2024</p>
                                                                    <p className="text-sm text-gray-600">124 attendees</p>
                                                                </div>
                                                                <div className="w-full flex items-center gap-2 p-3">
                                                                    <Button variant={'outline'} className="border-[#0a66c2] text-[#0a66c2] rounded-full w-full">View</Button>
                                                                    <div className="rounded-full border-[#0a66c2] border p-2">
                                                                        <LiaShareSolid size={20} color="#0a66c2" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Card>


                                                </div>

                                            </div>

                                        </div>
                                        <div className="w-full flex items-center justify-center text-gray-600 font-semibold gap-2">
                                            <p className="py-4">Show all events</p>
                                            <div>
                                                <FaArrowRight />
                                            </div>
                                        </div>
                                    </Card>

                                    {/* people highlights card */}
                                    <Card className="p-0">
                                        <div className="border-b">
                                            <div className="px-7 py-6">
                                                <h2 className="text-[24px] font-semibold">
                                                    People highlights
                                                </h2>
                                                <div className="flex items-center gap-4 my-3">


                                                </div>

                                            </div>

                                        </div>
                                        <div className="w-full flex items-center justify-center text-gray-600 font-semibold gap-2">
                                            <p className="py-4">Show all people highlights</p>
                                            <div>
                                                <FaArrowRight />
                                            </div>
                                        </div>
                                    </Card>

                                    {/* Recent jobs Card */}
                                    <Card className="p-0">
                                        <div className="border-b">
                                            <div className="px-7 py-6">
                                                <h2 className="text-[24px] font-semibold">
                                                    Recent job Openings
                                                </h2>

                                                <div className="flex items-center my-3 justify-start">
                                                    <div className="flex items-center gap-2 w-full">
                                                        <div>
                                                            <Image src={'/images/PNH-logo.png'} alt="company-logo" width={50} height={50} priority />
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <p className="text-sm font-bold">React Developer</p>
                                                            <p className="text-sm text-gray-600">Delhi, Delhi, India</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2 w-full">
                                                        <div>
                                                            <Image src={'/images/PNH-logo.png'} alt="company-logo" width={50} height={50} priority />
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <p className="text-sm font-bold">Developer</p>
                                                            <p className="text-sm text-gray-600">Noida, Uttar Pradesh, India</p>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>

                                        </div>
                                        <div className="w-full flex items-center justify-center text-gray-600 font-semibold gap-2">
                                            <p className="py-4">Show all jobs</p>
                                            <div>
                                                <FaArrowRight />
                                            </div>
                                        </div>
                                    </Card>


                                </div>

                            </>
                        )}
                    {
                        activeTab === "my-company" && (
                            <>
                                <Card className="p-0">
                                    <div className="px-7 py-6">
                                        <div className="flex items-end justify-between">
                                            <h2 className="text-[20px] font-semibold">
                                                Be a team player
                                            </h2>
                                            <div>
                                                <IoClose size={20} />
                                            </div>

                                        </div>
                                        <p className="my-3 text-sm text-gray-600">
                                            Help your organization grow. Invite your connections to follow your compay.
                                        </p>
                                        <Button variant={'outline'} className="rounded-full mt-5 border-[#0a66c2] text-[#0a66c2] font-semibold" >Invite connections</Button>
                                    </div>
                                </Card>
                                <Card className="p-0">
                                    <div className="px-7 py-6">

                                        <h2 className="text-[20px] font-semibold">
                                            AppSierra today
                                        </h2>
                                        <div className="flex gap-4 mt-4">
                                            <Card className="px-3 py-4">
                                                <h2 className="font-bold text-gray-600">1 coworker recently joined AppSierra</h2>
                                                <div className="py-4 flex items-center gap-2">
                                                    <Avatar className="h-[56px] w-[56px]">
                                                        <AvatarImage src="/images/joshua-hanson-e616t35Vbeg-unsplash.jpg" alt="@shadcn" />
                                                        <AvatarFallback>MD</AvatarFallback>
                                                    </Avatar>
                                                    <div className="flex flex-col">
                                                        <h2 className="font-bold text-gray-600">
                                                            Mangesh More .
                                                        </h2>
                                                        <p className="text-sm text-gray-500">bio</p>
                                                    </div>
                                                </div>

                                            </Card>
                                            <Card className="px-3 py-4">
                                                <h2 className="font-bold text-gray-600">1 coworker recently joined AppSierra</h2>
                                                <div className="py-4 flex items-center gap-2">
                                                    <Avatar className="h-[56px] w-[56px]">
                                                        <AvatarImage src="/images/joshua-hanson-e616t35Vbeg-unsplash.jpg" alt="@shadcn" />
                                                        <AvatarFallback>MD</AvatarFallback>
                                                    </Avatar>
                                                    <div className="flex flex-col">
                                                        <h2 className="font-bold text-gray-600">
                                                            Mangesh More .
                                                        </h2>
                                                        <p className="text-sm text-gray-500">bio</p>
                                                    </div>
                                                </div>

                                            </Card>
                                            <Card className="px-3 py-4">
                                                <h2 className="font-bold text-gray-600">1 coworker recently joined AppSierra</h2>
                                                <div className="py-4 flex items-center gap-2">
                                                    <Avatar className="h-[56px] w-[56px]">
                                                        <AvatarImage src="/images/joshua-hanson-e616t35Vbeg-unsplash.jpg" alt="@shadcn" />
                                                        <AvatarFallback>MD</AvatarFallback>
                                                    </Avatar>
                                                    <div className="flex flex-col">
                                                        <h2 className="font-bold text-gray-600">
                                                            Mangesh More .
                                                        </h2>
                                                        <p className="text-sm text-gray-500">bio</p>
                                                    </div>
                                                </div>
                                            </Card>
                                        </div>
                                    </div>
                                </Card>
                                <Card className="p-0">
                                    <div className="border-b">
                                        <div className="px-7 py-6">
                                            <h2 className="text-[24px] font-semibold">
                                                Trending coworker content
                                            </h2>
                                            <div className="flex items-center gap-4 my-3">
                                                <Card className="w-[365px] min-w-[365px] max-w-[365px] p-0">
                                                    <div className="flex gap-4 w-full px-5 py-3">
                                                        <Avatar className="h-10 w-10 rounded-none">
                                                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                                            <AvatarFallback>MD</AvatarFallback>
                                                        </Avatar>
                                                        <div className="w-full">
                                                            <div>
                                                                <div className="flex items-center justify-between">
                                                                    <Link href={"/user?status=home"}>
                                                                        <p className="font-bold hover:text-[#0a66c2] hover:underline hover:cursor-pointer">Coworker</p>
                                                                    </Link>
                                                                    <div className="flex items-center gap-4">
                                                                        <div>
                                                                            <BsThreeDots />
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
                                                            <p className="px-5 font-bold text-[#0a66c2] text-sm">#technology #it #datascience</p>
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
                                                                <p className="text-xs text-gray-500">13 comments</p>
                                                                <p className="text-xs text-gray-500" >.</p>
                                                                <p className="text-xs text-gray-500">25 reposts</p>
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

                                                </Card>
                                                <Card className="w-[365px] min-w-[365px] max-w-[365px] p-0">
                                                    <div className="flex gap-4 w-full px-5 py-3">
                                                        <Avatar className="h-10 w-10 rounded-none">
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
                                                            <p className="px-5 font-bold text-[#0a66c2] text-sm">#technology #it #datascience</p>
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
                                                                <p className="text-xs text-gray-500">13 comments</p>
                                                                <p className="text-xs text-gray-500" >.</p>
                                                                <p className="text-xs text-gray-500">25 reposts</p>
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

                                                </Card>

                                            </div>

                                        </div>

                                    </div>
                                    <div className="w-full flex items-center justify-center text-gray-600 font-semibold gap-2">
                                        <p className="py-4">Show all content</p>
                                        <div>
                                            <FaArrowRight />
                                        </div>
                                    </div>
                                </Card>
                            </>
                        )}
                    {
                        activeTab === "about" && (
                            <>
                                <Card className="p-0">
                                    <div className="px-7 py-6">
                                        <div>
                                            <h2 className="text-[20px] font-semibold">
                                                Overview
                                            </h2>
                                            <p className="my-3 text-sm text-gray-600">
                                                Our clients are at the centre of everything we do at Appsierra. We were built on the belief that in order to be exceptional at something, you must be incredibly focused. That is why we are committed to providing our customers with the technology-enabled solutions they require to succeed in today's digital economy. Simply put, we help our customers accelerate what matters to them by leveraging our agile engineering skills to deliver human-centric products to market at lightning speed.
                                                We embrace the four superpowers of technology because we were born in the digital age, allowing our customers to not only better their present performance but also rethink their business in whole new ways. Appsierra , headquartered in Noida, India employs extraordinary people and is trusted by hundreds of Fortune companies.
                                                Please visit our website at https://www.appsierra.com/ and follow us to discover more about our culture and story.
                                            </p>
                                        </div>
                                        <div className="my-5">
                                            <h2 className="text-sm font-bold">Website</h2>
                                            <p className="text-sm font-bold text-[#0a66c2]">https://www.appsierra.com</p>
                                        </div>
                                        <div className="my-5">
                                            <h2 className="text-sm font-bold">Industry</h2>
                                            <p className="text-sm text-gray-600">IT Services and IT Consulting</p>
                                        </div>
                                        <div className="my-5">
                                            <h2 className="text-sm font-bold">Company size</h2>
                                            <p className="text-sm text-gray-600">201 - 500 employees</p>
                                            <p className="text-sm text-gray-600">120 associated employees</p>
                                        </div>
                                        <div className="my-5">
                                            <h2 className="text-sm font-bold">Headquarters</h2>
                                            <p className="text-sm text-gray-600">Lewes, Delaware</p>
                                        </div>
                                        <div className="my-5">
                                            <h2 className="text-sm font-bold">Founded</h2>
                                            <p className="text-sm text-gray-600">2015</p>
                                        </div>
                                        <div className="my-5">
                                            <h2 className="text-sm font-bold">Specialities</h2>
                                            <p className="text-sm text-gray-600">Quality Assurance, Web Development, Manual Testing, Automation Testing, Performance Testing, Mobile App Testing, mobile app development, software testing, QA Testing, Digital Transformation, Customer Experience, and Design Thinking</p>
                                        </div>
                                    </div>
                                </Card>
                                <Card className="p-0">
                                    <div className="border-b">
                                        <div className="px-7 py-6">
                                            <h2 className="text-[20px] font-semibold">
                                                Locations (2)
                                            </h2>
                                            <p className="text-sm text-gray-600">
                                                Interact with the map to explore all locations.
                                            </p>
                                        </div>
                                    </div>
                                </Card>
                            </>
                        )}
                    {
                        activeTab === "posts" && (
                            <>
                                <Card>
                                    <div>
                                        this is Posts
                                    </div>
                                </Card>
                            </>
                        )}
                    {
                        activeTab === "jobs" && (
                            <>
                                <Card>
                                    <div>
                                        this is Jobs
                                    </div>
                                </Card>
                            </>
                        )}
                    {
                        activeTab === "people" && (
                            <>
                                <Card>
                                    <div>
                                        this is People
                                    </div>
                                </Card>
                            </>
                        )}


                </div>
                <div className="w-[300px] max-w-[300px] min-w-[300px] flex flex-col gap-4">
                    <RightSidebar />
                </div>
            </main>
        </>
    )
}