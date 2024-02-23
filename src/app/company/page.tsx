"use client";
import RightSidebar from "@/components/RightSidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { LuDot, LuSend } from "react-icons/lu";
import { PiDotsThreeCircleThin } from "react-icons/pi";
import { IoCheckmarkSharp, IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import { BsThreeDots } from "react-icons/bs";
import { FaGlobeAmericas } from "react-icons/fa";
import { AiOutlineComment } from "react-icons/ai";
import { BiRepost } from "react-icons/bi";
import { SlLike } from "react-icons/sl";
import { LiaShareSolid } from "react-icons/lia";
import PersonalInfo from "@/components/PersonalInfo";
import About from "@/components/About";
import Post from "@/components/Post";
import PastEvent from "@/components/PastEvent";
import JobOpeneings from "@/components/JobOpenings";
import Highlights from "@/components/Highlights";
import TodayHighlights from "@/components/TodayHighlights";
import CompanyDetails from "@/components/CompanyDetails";
import RecentJobs from "@/components/RecentJobs";
import BasicCompanyCardLayout from "@/components/BasicCompanyCardLayout";

export default function Company() {
  const [activeTab, setActiveTab] = useState("home");
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const status = params.get("status");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    handleTab(status);
  }, [status]);

  const handleTab = (tabName: any) => {
    setActiveTab(tabName);
    router.push(`/company?status=${tabName}`);
  };

  return (
    <>
      <main className="container py-24 flex gap-5 px-36">
        <div className="w-full flex flex-col gap-4">
          <Card className="p-0">
            <PersonalInfo
              coverImage={
                "/images/fermin-rodriguez-penelas-b8kEUZqMNoQ-unsplash.jpg"
              }
              avatar={"/images/ken-cheung-0F2nvpob0_c-unsplash.jpg"}
              name={"Pitch N Hire"}
              bio={
                "Software Testing | Product Development - Build High Quality Web and Mobile Apps"
              }
              address={"Lewes, Delaware"}
              mutualFollowerProfilePic={
                "/images/olu-famule-kYx_g4YBfLI-unsplash.jpg"
              }
              mutualFollowerName={"Raj"}
              mutalFollowerCount={"15"}
            />
            <hr />
            <div className="px-4 pt-4">
              <div className="flex items-center gap-5">
                <p
                  onClick={() => handleTab("home")}
                  className={`font-bold  px-3 py-4 cursor-pointer ${
                    activeTab === "home"
                      ? "text-[#0a66c2] border-b-2 border-[#0a66c2]"
                      : "text-gray-600 border-none"
                  }`}
                >
                  Home
                </p>
                <p
                  onClick={() => handleTab("my-company")}
                  className={`font-bold  px-3 py-4 cursor-pointer ${
                    activeTab === "my-company"
                      ? "text-[#0a66c2] border-b-2 border-[#0a66c2]"
                      : "text-gray-600 border-none"
                  }`}
                >
                  My Company
                </p>
                <p
                  onClick={() => handleTab("about")}
                  className={`font-bold  px-3 py-4 cursor-pointer ${
                    activeTab === "about"
                      ? "text-[#0a66c2] border-b-2 border-[#0a66c2]"
                      : "text-gray-600 border-none"
                  }`}
                >
                  About
                </p>
                <p
                  onClick={() => handleTab("posts")}
                  className={`font-bold  px-3 py-4 cursor-pointer ${
                    activeTab === "posts"
                      ? "text-[#0a66c2] border-b-2 border-[#0a66c2]"
                      : "text-gray-600 border-none"
                  }`}
                >
                  Posts
                </p>
                <p
                  onClick={() => handleTab("jobs")}
                  className={`font-bold  px-3 py-4 cursor-pointer ${
                    activeTab === "jobs"
                      ? "text-[#0a66c2] border-b-2 border-[#0a66c2]"
                      : "text-gray-600 border-none"
                  }`}
                >
                  Jobs
                </p>
              </div>
            </div>
          </Card>
          {activeTab === "home" && (
            <>
              <div className="flex flex-col gap-4">
                {/* about card */}
                <BasicCompanyCardLayout title={"About"} footer={"details"}>
                  <About
                    about={
                      "Our clients are at the centre of everything we do at Appsierra. We were built on the belief that in order to be exceptional at something, you must be incredibly focused. That is why we are committed to providing our customers with the technology-enabled solutions they require to succeed in today's digital economy. Simply put, we help our customers accelerate what matters to them by leveraging our agile engineering skills to deliver human-centric products to market at lightning speed."
                    }
                  />
                </BasicCompanyCardLayout>

                {/* posts card */}
                <BasicCompanyCardLayout title={"Page posts"} footer={"posts"}>
                  <div className="flex items-center gap-4 my-3">
                    <Card className="w-[365px] min-w-[365px] max-w-[365px] p-0">
                      <Post
                        logo={"/images/PNH-logo-icon.png"}
                        companyName={"Pitch N Hire"}
                        followers={"21, 458"}
                        timeOfPost={"5m"}
                        content="Company's content"
                        comments="100"
                        reposts="50"
                      />
                    </Card>
                  </div>
                </BasicCompanyCardLayout>

                {/* past events card */}
                <BasicCompanyCardLayout title={"Past events"} footer={"events"}>
                  <div className="flex gap-4 my-3">
                    <Card className="w-[264px] max-w-[264px]  min-w-[264px] p-0">
                      <PastEvent
                        eventPoster={"/images/AppsierraWeeklyPost.png"}
                        eventDate={"Sun, Jan 7, 2024, 7:00 PM"}
                        eventTopic={"Meet & Greet - 7 January 2024"}
                        attendeesCount={"124 attendees"}
                      />
                    </Card>
                  </div>
                </BasicCompanyCardLayout>

                {/* people highlights card */}
                <BasicCompanyCardLayout
                  title={"People highlights"}
                  footer={"highlights"}
                >
                  <div className="flex items-center gap-4 my-3">
                    <Highlights />
                  </div>
                </BasicCompanyCardLayout>

                {/* Recent jobs Card */}
                <BasicCompanyCardLayout
                  title={"Recent job Openings"}
                  footer={"jobs"}
                >
                  <div className="flex items-center my-3 justify-start">
                    <JobOpeneings
                      companyLogo={"/images/PNH-logo-icon.png"}
                      jobPost={"React Developer"}
                      jobPlace={"Delhi, Delhi, India"}
                    />
                    <JobOpeneings
                      companyLogo={"/images/PNH-logo-icon.png"}
                      jobPost={"React Developer"}
                      jobPlace={"Delhi, Delhi, India"}
                    />
                  </div>
                </BasicCompanyCardLayout>
              </div>
            </>
          )}
          {activeTab === "my-company" && (
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
                    Help your organization grow. Invite your connections to
                    follow your compay.
                  </p>
                  <Button
                    variant={"outline"}
                    className="rounded-full mt-5 border-[#0a66c2] text-[#0a66c2] font-semibold"
                  >
                    Invite connections
                  </Button>
                </div>
              </Card>
              <Card className="p-0">
                <div className="px-7 py-6">
                  <h2 className="text-[20px] font-semibold">AppSierra today</h2>
                  <div className="flex gap-4 mt-4">
                    <TodayHighlights
                      highlightTopic={"1 coworker recently joined AppSierra"}
                      coworkersProfilePic={
                        "/images/joshua-hanson-e616t35Vbeg-unsplash.jpg"
                      }
                      coworkersName={"Mangesh More"}
                      bio={"bio"}
                    />
                  </div>
                </div>
              </Card>

              <BasicCompanyCardLayout
                title={"Trending coworker content"}
                footer={"content"}
              >
                <div className="flex items-center gap-4 my-3">
                  <Card className="w-[365px] min-w-[365px] max-w-[365px] p-0">
                    <Post
                      logo={"/images/thomas-bennie-lxziZx-TfSo-unsplash.jpg"}
                      companyName={"Sunidhi"}
                      followers={"21, 458"}
                      timeOfPost={"5m"}
                      content="Coworker's content"
                      comments="100"
                      reposts="50"
                    />
                  </Card>
                </div>
              </BasicCompanyCardLayout>
            </>
          )}
          {activeTab === "about" && (
            <>
              <Card className="p-0">
                <div className="px-7 py-6">
                  <div>
                    <h2 className="text-[20px] font-semibold">Overview</h2>
                    <About
                      about={
                        "Our clients are at the centre of everything we do at Appsierra. We were built on the belief that in order to be exceptional at something, you must be incredibly focused. That is why we are committed to providing our customers with the technology-enabled solutions they require to succeed in today's digital economy. Simply put, we help our customers accelerate what matters to them by leveraging our agile engineering skills to deliver human-centric products to market at lightning speed. We embrace the four superpowers of technology because we were born in the digital age, allowing our customers to not only better their present performance but also rethink their business in whole new ways. Appsierra , headquartered in Noida, India employs extraordinary people and is trusted by hundreds of Fortune companies. Please visit our website at https://www.appsierra.com/ and follow us to discover more about our culture and story."
                      }
                    />
                  </div>
                  <div>
                    <CompanyDetails
                      website={"https://www.appsierra.com"}
                      industry={"IT Services and IT Consulting"}
                      employeeCount={"201 - 500"}
                      associatedEmployeeCount={"120"}
                      headquarters={"Lewes, Delaware"}
                      yearFoundedIn={"2015"}
                      specialities={
                        "Quality Assurance, Web Development, Manual Testing, Automation Testing, Performance Testing, Mobile App Testing, mobile app development, software testing, QA Testing, Digital Transformation, Customer Experience, and Design Thinking"
                      }
                    />
                  </div>
                </div>
              </Card>
              <Card className="p-0">
                <div className="border-b">
                  <div className="px-7 py-6">
                    <h2 className="text-[20px] font-semibold">Locations (2)</h2>
                    <p className="text-sm text-gray-600">
                      Interact with the map to explore all locations.
                    </p>
                  </div>
                </div>
              </Card>
            </>
          )}
          {activeTab === "posts" && (
            <>
              <div className="flex gap-4 ">
                <div className="w-[222px] min-w-[222px] max-w-[222px]">
                  <div className="flex flex-col gap-4">
                    <Card className="p-4 flex flex-col items-center justify-center">
                      <div className="flex flex-col justify-center items-center">
                        <Avatar className="h-[64px] w-[64px] fit-contain rounded-none">
                          <AvatarImage
                            src={"/images/PNH-logo-icon.png"}
                            alt="@shadcn"
                          />
                          <AvatarFallback>MD</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="my-4 font-bold mx-2">Pitch N Hire</p>
                          <p className="my-4 text-sm">18,235 followers</p>
                        </div>
                      </div>
                    </Card>
                    <Card className="p-4">
                      <div className="flex flex-col gap-3">
                        <p className="text-sm text-gray-600 leading-snug mb-1">
                          See a collection of active or past ads by Pitch N
                          Hire.
                        </p>
                        <p className="font-bold text-[#0a66c2] text-sm">
                          View ad library
                        </p>
                      </div>
                    </Card>
                  </div>
                </div>
                <div className=" flex flex-col gap-5">
                  <div className="flex gap-2">
                    <Button
                      variant={"outline"}
                      className="rounded-full bg-transparent border-2 border-gray-500"
                    >
                      All
                    </Button>
                    <Button
                      variant={"outline"}
                      className="rounded-full bg-transparent border-2 border-gray-500"
                    >
                      Images
                    </Button>
                    <Button
                      variant={"outline"}
                      className="rounded-full bg-transparent border-2 border-gray-500"
                    >
                      Videos
                    </Button>
                    <Button
                      variant={"outline"}
                      className="rounded-full bg-transparent border-2 border-gray-500"
                    >
                      Articles
                    </Button>
                    <Button
                      variant={"outline"}
                      className="rounded-full bg-transparent border-2 border-gray-500"
                    >
                      Documents
                    </Button>
                    <Button
                      variant={"outline"}
                      className="rounded-full bg-transparent border-2 border-gray-500"
                    >
                      Ads
                    </Button>
                  </div>
                  <div>
                    <Card className="w-[560px] min-w-[560px] max-w-[560px] p-0">
                      <Post
                        logo={"/images/PNH-logo-icon.png"}
                        companyName={"Pitch N Hire"}
                        followers={"18,235"}
                        timeOfPost={"5m"}
                        content="Company's content"
                        comments="100"
                        reposts="50"
                      />
                    </Card>
                  </div>
                </div>
              </div>
            </>
          )}
          {activeTab === "jobs" && (
            <>
              <BasicCompanyCardLayout
                title={"Recently posted jobs"}
                footer={"jobs"}
              >
                <div className="flex items-center gap-4 my-3">
                  <div className="flex items-center gap-4 my-3">
                    <Card className="w-[240px] min-w-[240px] max-w-[240px] p-0">
                      <RecentJobs
                        companyLogo={"/images/PNH-logo-icon.png"}
                        jobTitle={"Associate Agency Development Manager"}
                        companyName={"Pitch N Hire"}
                        country={"India"}
                        mutualConnectionCount={"1"}
                        postedOn={"1 month"}
                      />
                    </Card>
                  </div>
                </div>
              </BasicCompanyCardLayout>
            </>
          )}
        </div>
        <div className="w-[300px] max-w-[300px] min-w-[300px] flex flex-col gap-4">
          <RightSidebar />
        </div>
      </main>
    </>
  );
}
