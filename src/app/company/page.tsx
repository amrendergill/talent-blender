// "use client";
import RightSidebar from "@/components/RightSidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import OpenJobs from "@/components/OpenJobs";
import RewardsCard from "@/components/RewardsCard";
import { Input } from "@/components/ui/input";

const rewards = [
  {
    img: "/images/hand-holding-medical.svg",
    name: "Health and Wellness Benefits",
    bio: "We offer comprehensive health and wellness programs to support the physical and mental well-being of our employees. From gym memberships to mental health resources, we strive to promote a healthy work-life balance.",
    bg: " bg-[#F3FAE7]",
  },
  {
    img: "/images/briefcasee.svg",
    name: "Flexible Work Options",
    bio: "Embracing flexibility, we provide options for remote work, flexible hours, and compressed workweeks. Our goal is to empower employees to manage their work schedules in a way that suits their lifestyle and enhances productivity.",
    bg: "bg-[#E0F3F3]",
  },
  {
    img: "/images/chart-user.svg",
    name: "Career Growth Initiatives",
    bio: "Investing in our employees’ growth, we offer various professional development opportunities, including training programs, workshops, and tuition reimbursement.",
    bg: "bg-[#F2E8FE]",
  },
  {
    img: "/images/usd-circle.svg",
    name: "Financial Wellness Support",
    bio: "To promote financial well-being, we provide competitive salaries, performance-based bonuses, retirement plans, and stock options. Additionally, we offer financial planning resources and employee discounts to help our team members achieve their financial goals.",
    bg: "bg-[#F0F7E8]",
  },
  {
    img: "/images/chair-office (1).svg",
    name: "Modern Workplace Facilities",
    bio: "Our modern workplace amenities include state-of-the-art office spaces, collaborative work areas, recreational facilities, and on-site dining options. We prioritize creating a comfortable and inspiring environment for our employees.",
    bg: "bg-[#E7E9FD]",
  },
  {
    img: "/images/employee-man-alt (2).svg",
    name: "Employee Appreciation Initiatives",
    bio: "Recognizing outstanding performance and dedication, we have employee recognition programs in place. From peer-to-peer recognition to annual awards ceremonies, we celebrate the contributions of our team members and foster a culture of appreciation.",
    bg: "bg-[#FFF0F0]",
  },
  {
    img: "/images/people-roof.svg",
    name: "Family-Friendly Benefits",
    bio: "Supporting employees in all stages of life, we offer family-friendly policies such as parental leave, childcare assistance, and flexible scheduling for caregivers. We value work-life balance and strive to accommodate the needs of our employees and their families.",
    bg: "bg-[#F3FAE7]",
  },
  {
    img: "/images/employees (1).svg",
    name: "Community Involvement Initiatives",
    bio: "Encouraging social responsibility, we provide opportunities for community engagement and volunteerism. Through corporate social responsibility programs and volunteer days, employees can make a positive impact in their communities and beyond.",
    bg: "bg-[#E0F3F3]",
  },
];

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
                    <Card className="border-none h-[96.5px] shadow-card">
                      <p className="text-xs whitespace-nowrap text-[#868686] font-medium">
                        Total Amount Raised
                      </p>
                      <p className="text-[24px]">$68.5M</p>
                    </Card>
                    <Card className="border-none h-[96.5px] shadow-card">
                      <p className="text-xs text-[#868686] font-medium">
                        Total Rounds
                      </p>
                      <p className="text-[24px]">4 rounds</p>
                    </Card>
                  </div>
                  <div className="w-full">
                    <Card className="border-none h-full w-full shadow-card">
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
              <Card className="flex flex-col items-start justify-start space-y-6 bg-[#F9F9F9] rounded-[10px] border-none">
                <p className="font-semibold text-xl">Founders & Team</p>
                <div className="flex gap-x-3 items-center">
                  <Card className="space-y-4 shadow-card">
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
                  </Card>
                  <Card className="space-y-4 shadow-card">
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
                  </Card>
                </div>
                <div className="w-full flex items-center justify-center">
                  <p className="text-[#0472F4] underline text-xs">
                    View all team members
                  </p>
                </div>
              </Card>
              <Card className="flex flex-col items-start justify-center space-y-6 bg-[#F9F9F9] rounded-[10px] border-none">
                <p className="font-semibold text-xl">Open Jobs</p>
                <div className="w-full space-y-2">
                  <OpenJobs />
                  <OpenJobs />
                  <OpenJobs />
                </div>
                <div className="flex items-center justify-center w-full">
                  <p className="text-[#0472F4] underline text-xs">View all</p>
                </div>
              </Card>
              <Card className="flex flex-col items-start justify-center space-y-6 bg-[#F9F9F9] rounded-[10px] border-none">
                <p className="font-semibold text-xl">
                  Employee rewards and perquisities
                </p>
                <div className="w-full space-y-2">
                  {rewards.map((item) => (
                    <RewardsCard
                      name={item.name}
                      img={item.img}
                      bio={item.bio}
                      bg={item.bg}
                    />
                  ))}
                </div>
                <div className="flex items-center justify-center w-full">
                  <p className="text-[#0472F4] underline text-xs">Show less</p>
                </div>
              </Card>
              <Card className="flex flex-col items-start justify-center space-y-5 bg-[#F9F9F9] rounded-[10px] border-none">
                <p className="font-semibold text-xl">Celebrate Our Journey</p>
                <p className="text-xs text-[#868686] w-1/2">
                  Discover the heart of our company through moments captured in
                  our gallery. From team triumphs to vibrant culture, explore
                  the essence of who we are.
                </p>
                <div className="w-full grid grid-cols-4 gap-4 ">
                  <Image
                    src={"/images/Mask Group 3@2x.png"}
                    alt="Logo"
                    width={195}
                    height={95}
                    priority
                    className="object-fit w-full "
                  />
                  <Image
                    src={"/images/Mask Group 3@2x.png"}
                    alt="Logo"
                    width={195}
                    height={95}
                    priority
                    className="object-fit w-full "
                  />
                  <Image
                    src={"/images/Mask Group 3@2x.png"}
                    alt="Logo"
                    width={195}
                    height={95}
                    priority
                    className="object-fit w-full "
                  />
                  <Image
                    src={"/images/Mask Group 3@2x.png"}
                    alt="Logo"
                    width={195}
                    height={95}
                    priority
                    className="object-fit w-full "
                  />
                  <Image
                    src={"/images/Mask Group 3@2x.png"}
                    alt="Logo"
                    width={195}
                    height={95}
                    priority
                    className="object-fit w-full "
                  />
                  <Image
                    src={"/images/Mask Group 3@2x.png"}
                    alt="Logo"
                    width={195}
                    height={95}
                    priority
                    className="object-fit w-full "
                  />
                  <Image
                    src={"/images/Mask Group 3@2x.png"}
                    alt="Logo"
                    width={195}
                    height={95}
                    priority
                    className="object-fit w-full "
                  />
                  <Image
                    src={"/images/Mask Group 3@2x.png"}
                    alt="Logo"
                    width={195}
                    height={95}
                    priority
                    className="object-fit w-full"
                  />
                </div>
                <div className="flex items-center justify-center w-full">
                  <p className="text-[#0472F4] underline text-xs">Show less</p>
                </div>
              </Card>
            </TabsContent>
            <TabsContent
              value="People"
              className="border-t mt-0 py-4 space-y-2"
            >
              <Card className="flex flex-col items-start justify-start space-y-6 bg-[#F9F9F9] rounded-[10px] border-none">
                <p className="font-semibold text-xl">Founders</p>
                <div className="flex gap-x-3 items-center">
                  <Card className="space-y-4 shadow-card">
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
                  </Card>
                  <Card className="space-y-4 shadow-card">
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
                  </Card>
                </div>
              </Card>
              <Card className="flex flex-col items-start justify-start space-y-6 bg-[#F9F9F9] rounded-[10px] border-none">
                <div className="flex items-start justify-between w-full">
                  <div className="space-y-2">
                    <p className="font-semibold text-xl">Meet Our Team</p>
                    <p className="text-sm">
                      Get to know the faces behind our company
                    </p>
                  </div>
                  <div className="flex items-center gap-x-1   text-sm px-3 w-[350px]  bg-[#FFFFFF] border-[0.5px] border-gray-200 rounded-[5px]">
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
                      placeholder="by name or role…"
                      className="  text-sm !outline-none !ring-0 bg-inherit border-none  "
                    />
                  </div>
                </div>
                <div className="flex gap-x-3 items-center"></div>
              </Card>
            </TabsContent>
            <TabsContent value="Jobs" className="border-t mt-0 py-4 space-y-2">
              <Card className="flex flex-col items-start justify-center space-y-6 bg-[#F9F9F9] rounded-[10px] border-none">
                <p className="font-semibold text-xl">Open Jobs</p>
                <div className="w-full space-y-2">
                  <OpenJobs />
                  <OpenJobs />
                  <OpenJobs />
                </div>
                <div className="flex items-center justify-center w-full">
                  <p className="text-[#0472F4] underline text-xs">View all</p>
                </div>
              </Card>
            </TabsContent>
            <TabsContent
              value="Posts"
              className="border-t mt-0 py-4 space-y-2"
            ></TabsContent>
          </Tabs>
        </div>
        <div className="w-[300px] max-w-[300px] min-w-[300px] flex flex-col gap-4">
          <RightSidebar />
        </div>
      </main>
    </>
  );
}
