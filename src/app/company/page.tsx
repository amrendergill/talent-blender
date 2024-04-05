// "use client";
import RightSidebar from "@/components/RightSidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import OpenJobs from "@/components/OpenJobs";

export default function Company({ searchParams }: any) {
  const status = searchParams.status;
  return (
    <>
      <main className="  flex gap-5 mt-4">
        <div className="w-full flex flex-col gap-4">
          <div className="relative ">
            <div>
              <Image
                src="/images/fermin-rodriguez-penelas-b8kEUZqMNoQ-unsplash.jpg"
                className="rounded-[10px]"
                alt="cover image"
                priority
                width={0}
                height={200}
                sizes="100%"
                style={{ width: "100%", height: "200px" }}
              />
            </div>
            <div className="flex items-center justify-between mt-6">
              <p></p>
              <div className="flex items-center gap-x-2">
                <Button className="flex items-center gap-x-2  text-black border-[0.5px] border-gray-300 bg-[#F9F9F9] rounded-[18px]  px-6 py-1">
                  <Image
                    src={"/images/share@2x.png"}
                    alt="Logo"
                    width={17}
                    height={17}
                    priority
                    className="object-fit"
                  />
                  <p className="text-sm">Share</p>
                </Button>
              </div>
            </div>
            <div className={` w-fit absolute top-32 left-8 rounded-none`}>
              <Avatar className={`h-[128px] w-[128px] rounded-none`}>
                <AvatarImage
                  src="/images/ken-cheung-0F2nvpob0_c-unsplash.jpg"
                  alt="@shadcn"
                />
                <AvatarFallback>MD</AvatarFallback>
              </Avatar>
            </div>
          </div>

          <div className="">
            <h1 className="text-[24px] font-medium">Pitch N Hire</h1>

            <p className="text-base my-1">
              Technology, Information and Internet
            </p>

            <div className="flex items-center gap-2">
              <div className="flex gap-[4px]">
                <Image
                  src={"/images/map-pin (2).svg"}
                  alt="Logo"
                  width={14.7}
                  height={14.7}
                  priority
                  className="object-fit"
                />
                <p className="text-sm text-[#868686] my-1">
                  Noida, Uttar Pradesh
                </p>
              </div>
              {/* <p className="text-sm text-[#868686] my-1">{props.address}</p> */}
            </div>

            <div className="my-4 flex items-center gap-2">
              <Button className=" text-sm text-white rounded-full flex items-center gap-1 px-9">
                Follow
              </Button>
            </div>
          </div>

          <Tabs defaultValue="Overview">
            <TabsList className="flex justify-start gap-x-6  h-fit  bg-white ">
              <TabsTrigger
                value="Overview"
                className="text-base data-[state=active]:border-b-[2px]  border-[#212529] rounded-none data-[state=active]:shadow-none "
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="People"
                className="text-base data-[state=active]:border-b-[2px]  border-[#212529] rounded-none data-[state=active]:shadow-none "
              >
                People
              </TabsTrigger>
              <TabsTrigger
                value="Jobs"
                className="text-base data-[state=active]:border-b-[2px]  border-[#212529] rounded-none data-[state=active]:shadow-none "
              >
                Jobs
              </TabsTrigger>
              <TabsTrigger
                value="Posts"
                className="text-base data-[state=active]:border-b-[2px]  border-[#212529] rounded-none data-[state=active]:shadow-none "
              >
                Posts
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="Overview"
              className="border-t mt-0 py-4 space-y-2"
            >
              <Card className="space-y-6 bg-[#F9F9F9] rounded-[10px] border-none">
                <p className="font-semibold text-xl">About</p>
                <p className="text-xs">
                  Experience Pitch N Hire, a revolutionary applicant tracking
                  software which will make hiring a breeze. It equips you with
                  all the tools you’ll need to effectively advertise jobs, make
                  ideal decisions, seamlessly sort through applications,
                  effortlessly design a branded career page, keep track of your
                  recruitment funnel from a single dashboard and draw in the
                  best applicants to assemble an exceptional team of top talent.
                </p>
              </Card>
              <Card className="space-y-6 bg-[#F9F9F9] rounded-[10px] border-none">
                <p className="font-semibold text-xl">Funding via Crunchbase</p>
                <div className="flex gap-x-2">
                  <div className="w-[200px] space-y-2">
                    <Card className="border-none h-[96.5px]">
                      <p className="text-xs whitespace-nowrap text-[#868686] font-medium">
                        Total Amount Raised
                      </p>
                      <p className="text-[24px]">$68.5M</p>
                    </Card>
                    <Card className="border-none h-[96.5px]">
                      <p className="text-xs text-[#868686] font-medium">
                        Total Rounds
                      </p>
                      <p className="text-[24px]">4 rounds</p>
                    </Card>
                  </div>
                  <div className="w-full">
                    <Card className="border-none h-full w-full">
                      <div className="flex w-full justify-between items-center">
                        <p className="text-[#868686] text-xs font-medium">
                          Investors
                        </p>
                        <div className="flex gap-x-2 items-center ">
                          <p className="text-[10px] font-medium">
                            Jan 23, 2022
                          </p>
                          <Badge className="text-[10px] font-normal bg-[#F0F0FE] rounded-[13px] text-black">
                            Series J
                          </Badge>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 mt-4 gap-y-4 w-full">
                        <div className="flex items-center  gap-x-2">
                          <Image
                            src={"/images/invesco_ltd_logo@2x.png"}
                            alt="Logo"
                            width={37}
                            height={34}
                            priority
                            className="object-fit"
                          />
                          <div className="space-y-[1px]">
                            <p className="text-base">Invesco</p>
                            <p className="text-[#868686] text-[10px]">Delhi</p>
                          </div>
                        </div>
                        <div className="flex items-center  gap-x-2">
                          <Image
                            src={"/images/invesco_ltd_logo@2x.png"}
                            alt="Logo"
                            width={37}
                            height={34}
                            priority
                            className="object-fit"
                          />
                          <div className="space-y-[1px]">
                            <p className="text-base">Invesco</p>
                            <p className="text-[#868686] text-[10px]">Delhi</p>
                          </div>
                        </div>

                        <div className="flex items-center  gap-x-2">
                          <Image
                            src={"/images/invesco_ltd_logo@2x.png"}
                            alt="Logo"
                            width={37}
                            height={34}
                            priority
                            className="object-fit"
                          />
                          <div className="space-y-[1px]">
                            <p className="text-base">Invesco</p>
                            <p className="text-[#868686] text-[10px]">Delhi</p>
                          </div>
                        </div>
                        <div className="flex items-center  gap-x-2">
                          <Image
                            src={"/images/invesco_ltd_logo@2x.png"}
                            alt="Logo"
                            width={37}
                            height={34}
                            priority
                            className="object-fit"
                          />
                          <div className="space-y-[1px]">
                            <p className="text-base">Invesco</p>
                            <p className="text-[#868686] text-[10px]">Delhi</p>
                          </div>
                        </div>
                        <div className="flex items-center  gap-x-2">
                          <Image
                            src={"/images/invesco_ltd_logo@2x.png"}
                            alt="Logo"
                            width={37}
                            height={34}
                            priority
                            className="object-fit"
                          />
                          <div className="space-y-[1px]">
                            <p className="text-base">Invesco</p>
                            <p className="text-[#868686] text-[10px]">Delhi</p>
                          </div>
                        </div>
                        <div className="flex items-center  gap-x-2">
                          <Image
                            src={"/images/invesco_ltd_logo@2x.png"}
                            alt="Logo"
                            width={37}
                            height={34}
                            priority
                            className="object-fit"
                          />
                          <div className="space-y-[1px]">
                            <p className="text-base">Invesco</p>
                            <p className="text-[#868686] text-[10px]">Delhi</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </Card>
              <Card className="flex flex-col items-center justify-center space-y-6 bg-[#F9F9F9] rounded-[10px] border-none">
                <p className="font-semibold text-xl">Founders & Team</p>
                <Card className="space-y-4">
                  <div className="flex items-center gap-x-2">
                    <Image
                      src={"/images/1698213510276@2x.png"}
                      alt="Logo"
                      width={43}
                      height={43}
                      priority
                      className="object-fit rouned-full"
                    />
                    <div className="space-y-1">
                      <p className="text-base font-medium">Arpit Singhal</p>
                      <p className="text-xs text-[#868686] ">
                        Founder & CEO at AppSierra Group | Specialized in
                        Strategic Business Development and Product Engineering
                      </p>
                    </div>
                  </div>
                  <p className="text-xs">
                    His core competencies include market penetration, business
                    strategy, product engineering, and digital marketing. He is
                    known for identifying, developing, and implementing business
                    strategies that drive growth and customer satisfaction. He
                    also has strong engineering and marketing teams that support
                    him in delivering quality and timely solutions. He is a
                    transhumanist and a social activist who believes in using
                    technology for the betterment of humanity.
                  </p>
                </Card>
                <p className="text-[#0472F4] underline text-xs">
                  View all team members
                </p>
              </Card>
              <Card className="flex flex-col items-center justify-center space-y-6 bg-[#F9F9F9] rounded-[10px] border-none">
                <p className="font-semibold text-xl">Open Jobs</p>
                <div className="w-full">

                <OpenJobs/>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        <div className="w-[300px] max-w-[300px] min-w-[300px] flex flex-col gap-4">
          <RightSidebar />
        </div>
      </main>
    </>
  );
}
