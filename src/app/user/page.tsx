import PersonalInfo from "@/components/PersonalInfo";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HomePost from "@/components/HomePost";
import Layout from "./layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import RecommendationCard from "@/components/recommendations/RecommendationCard";

export default function User({ searchParams }: any) {
  const search = searchParams.recommendation || "Recieved";
  console.log("search: ", search);
  const list = [
    "Curated content for social media platforms, including Facebook and LinkedIn.",
    "Edited photographs and produced graphic design artwork using Adobe Illustrator and Photoshop.",
    "Administered on-page optimisation activites, including keyword research.",
  ];

  const skillList = [
    "Hospitality",
    "Multitasking",
    "New hire training",
    "Teamwork and collaboration",
    "Beverage preparation",
    "Food serving",
    "Self-motivated",
    "Liquor, beer and wine knowledge",
    "Safe Food Handling",
    "Customer Service Skills",
    "Proficient in Adobe CS6",
    "Microsoft Office Suite",
  ];

  const links = [
    {
      src: "/images/site-alt.svg",
      alt: "site",
      style: "h-[20px] w-[20px]",
      text: "Website",
      name: "www.appsierra.com",
    },
    {
      src: "/images/linkedin.svg",
      alt: "LinkedIn",
      style: "h-[20px] w-[19px]",
      text: "LinkedIn",
      name: "linkedin.com/in/arpit-singhal-",
    },
    {
      src: "/images/twitter-alt (1).svg",
      alt: "twitter",
      style: "h-[20px] w-[22px]",
      text: "Twitter",
      name: "www.appsierra.com",
    },
  ];

  return (
    <div>
      <PersonalInfo
        coverImage={"/images/tembinkosi-sikupela-ZC3iqcOL5T8-unsplash.jpg"}
        avatar={"/images/joshua-hanson-e616t35Vbeg-unsplash.jpg"}
        name={"Umang Sharma"}
        bio={"UI/UX Designer | Software Developer | Graphic Designer"}
        address={"Noida, UttarPradesh"}
        mutualFollowerProfilePic={
          "/images/teodor-drobota-uyyRJA2an4o-unsplash.jpg"
        }
        underlineStyle={"underline"}
        mutualFollowerName={"Marina"}
        mutalFollowerCount={"27"}
        collegeName={
          "Rajiv Gandhi College of Engineering, Research and Technology"
        }
        collegeLogo={"/images/dhiraj-chouhan-_1c5jIwOFUY-unsplash.jpg"}
      />
      <div className=" ">
        <Tabs defaultValue="profile">
          <TabsList className="flex justify-start gap-x-4  h-fit  bg-white ">
            <TabsTrigger
              value="profile"
              className="text-base data-[state=active]:border-b-[2px]  border-[#212529] rounded-none data-[state=active]:shadow-none "
            >
              Profile
            </TabsTrigger>
            <TabsTrigger
              value="activity"
              className="text-base data-[state=active]:border-b-[2px]  border-[#212529] rounded-none data-[state=active]:shadow-none "
            >
              Activity
            </TabsTrigger>
            <TabsTrigger
              value="recommendations"
              className="text-base data-[state=active]:border-b-[2px]  border-[#212529] rounded-none data-[state=active]:shadow-none "
            >
              Recommendations
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="border-t mt-0">
            <div className="flex gap-5 mt-[20px] ">
              <div className="w-full">
                <Card className="px-7 py-4 ">
                  <h2 className="text-[24px] font-semibold">About</h2>
                  <p className="mt-[14px] text-sm font-regular text-[#212529]">
                    As a tech entrepreneur with multiple ventures under
                    Appsierra Group, Arpit is passionate about creating
                    innovative products and providing services that solve
                    real-world problems and add value to customers. <br />
                    <br />
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
                <Card className="mt-[15px] bg-[#F9F9F9] border-0">
                  <h2 className="text-[20px] text-[#212529] font-semibold">
                    Work Experience
                  </h2>
                  <div className="mt-[20px] bg-[#FFF] px-[20px] py-[15px] rounded-[5px]">
                    <div className="flex items-center gap-[11px]">
                      <div className="p-[10px] bg-[#EBF3FD] rounded-[5px]">
                        <img
                          src="/images/business-and-trade.png"
                          alt="business"
                          className="h-[32px] w-[32px]"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">
                          Marketing Coordinator Assistant Intern
                        </h3>
                        <h4 className="text-base font-regular text-[#0472F4]">
                          Pitch N Hire
                        </h4>
                      </div>
                    </div>
                    <div className="mt-[10px] items-center gap-[13px] flex">
                      <div className="text-xs font-regular text-[#000000] bg-[#F5F5F5] rounded-full py-[4px] px-[15px]">
                        June 2021 - August 2024
                      </div>
                      <div className="flex gap-[9px]">
                        <Image
                          src={"/images/map-pin.svg"}
                          alt="Logo"
                          width={15}
                          height={15}
                          priority
                          className="object-fit"
                        />
                        <p className="font-regular text-xs text-[#000000]">
                          Noida, Uttar Pradesh
                        </p>
                      </div>
                    </div>
                    <ul className="mt-[20px]  list-inside list-disc">
                      {list?.map((item: any, index: any) => (
                        <li
                          className="text-xs mt-[10px] font-regular text-[#212529]"
                          key={`userList${index}`}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-[15px] bg-[#FFF] px-[20px] py-[15px] rounded-[5px]">
                    <div className="flex items-center gap-[11px]">
                      <div className="p-[10px] bg-[#EBF3FD] rounded-[5px]">
                        <img
                          src="/images/business-and-trade.png"
                          alt="business"
                          className="h-[32px] w-[32px]"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">
                          Marketing Coordinator Assistant Intern
                        </h3>
                        <h4 className="text-base font-regular text-[#0472F4]">
                          Appsierra
                        </h4>
                      </div>
                    </div>
                    <div className="mt-[10px] items-center gap-[13px] flex">
                      <div className="text-xs font-regular text-[#000000] bg-[#F5F5F5] rounded-full py-[4px] px-[15px]">
                        June 2021 - August 2024
                      </div>
                      <div className="flex gap-[9px]">
                        <Image
                          src={"/images/map-pin.svg"}
                          alt="Logo"
                          width={15}
                          height={15}
                          priority
                          className="object-fit"
                        />
                        <p className="font-regular text-xs text-[#000000]">
                          Noida, Uttar Pradesh
                        </p>
                      </div>
                    </div>
                    <p className="text-xs w-[670px] mt-[20px] font-regular text-[#212529]">
                      As a Software Developer at XYZ Tech Solutions, you will be
                      responsible for designing, developing, and maintaining
                      software applications that meet the needs of our clients.
                      You will work closely with our cross-functional teams to
                      deliver scalable and reliable solutions that drive
                      business value.
                    </p>
                  </div>
                </Card>
                <Card className="mt-[10px] p-[20px] border-0 bg-[#F9F9F9]">
                  <h2 className="text-[20px] text-[#212529] font-semibold">
                    Education
                  </h2>
                  <div className="mt-[20px] pb-[20px] rounded-[5px] bg-[#FFF] px-[20px] py-[15px]">
                    <div className="border-b pb-[20px]">
                      <h3 className="text-lg font-semibold text-[#212529]">
                        Harold Washington College
                      </h3>
                      <p className="mt-[5px] font-regular text-base text-[#212529]">
                        Associates, Applied Science Digital Multimedia Design,
                      </p>
                      <div className="mt-[10px] items-center gap-[13px] flex">
                        <div className="text-xs font-regular text-[#000000] bg-[#F5F5F5] rounded-full py-[4px] px-[15px]">
                          June 2012 - December 2015
                        </div>
                        <div className="flex gap-[9px]">
                          <Image
                            src={"/images/map-pin.svg"}
                            alt="Logo"
                            width={15}
                            height={15}
                            priority
                            className="object-fit"
                          />
                          <p className="font-regular text-xs text-[#000000]">
                            Chicago, IL
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-[20px]">
                      <h3 className="text-lg font-semibold text-[#212529]">
                        Roosevelt University
                      </h3>
                      <p className="mt-[5px] font-regular text-base text-[#212529]">
                        Bachelors, Science in Business Administration &
                        Marketing
                      </p>
                      <div className="mt-[10px] items-center gap-[13px] flex">
                        <div className="text-xs font-regular text-[#000000] bg-[#F5F5F5] rounded-full py-[4px] px-[15px]">
                          August 2019 - June 2021
                        </div>
                        <div className="flex gap-[9px]">
                          <Image
                            src={"/images/map-pin.svg"}
                            alt="Logo"
                            width={15}
                            height={15}
                            priority
                            className="object-fit"
                          />
                          <p className="font-regular text-xs text-[#000000]">
                            Chicago, IL
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="mt-[10px] p-[20px]">
                  <h2 className="text-[20px] text-[#212529] font-semibold">
                    Skills
                  </h2>
                  <ul className="mt-[25px] flex flex-wrap gap-[5px]">
                    {skillList?.map((item: any, index: any) => (
                      <li
                        key={`skillList${index}`}
                        className="text-base font-regular bg-[#F5F5F5] rounded-full px-[20px] py-[9px]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
                <Card className="mt-[10px] p-[20px]">
                  <h2 className="text-[20px] mb-[20px] text-[#212529] font-semibold">
                    Links
                  </h2>
                  {links?.map((item: any, index: any) => (
                    <div key={`links${index}`} className="mt-[20px] flex gap-5">
                      <div>
                        <img
                          src={item?.src}
                          alt={item?.alt}
                          className={item?.style}
                        />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-[#212529]">
                          {item?.text}
                        </p>
                        <p className="text-xs font-regular text-[#0472F4]">
                          {item?.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </Card>
                <Card className="mt-[10px] p-[20px] bg-[#F9F9F9]">
                  <h2 className="text-[20px] mb-[10px] text-[#212529] font-semibold">
                    Recommendation
                  </h2>
                  <div className="w-full">
                    <Tabs defaultValue="Recieved" className="w-full">
                      <TabsList className="bg-[#F9F9F9] space-x-2 w-full">
                        <div className="flex justify-between w-full items-center">
                          <div className="flex items-center gap-x-3">
                            <TabsTrigger
                              value="Recieved"
                              className="data-[state=active]:text-white data-[state=active]:bg-black border-[0.3px] border-gray-300 text-xs text-[#000000] px-4"
                            >
                              Recieved
                            </TabsTrigger>

                            <TabsTrigger
                              value="Given"
                              className="data-[state=active]:text-white data-[state=active]:bg-black border-[0.3px] border-gray-300 text-xs text-[#000000] px-4"
                            >
                              Given
                            </TabsTrigger>

                            <TabsTrigger
                              value="Pending"
                              className="data-[state=active]:text-white data-[state=active]:bg-black border-[0.3px] border-gray-300 text-xs text-[#000000] px-4"
                            >
                              Pending
                            </TabsTrigger>
                          </div>
                          <Link href={"/user/recommendation"}>
                            <Button className="text-xs bg-[#F9F9F9] text-black border-[0.3px] border-gray-300">
                              + Request a recommendation
                            </Button>
                          </Link>
                        </div>
                      </TabsList>
                      <TabsContent value="Recieved">
                        <Card className="mt-[10px] p-[20px] bg-white w-full flex flex-col justify-between items-center gap-4">
                          <Image
                            src={"/images/business.svg"}
                            alt="Logo"
                            width={89}
                            height={89}
                            priority
                            className="object-fit"
                          />
                          <div className="flex flex-col justify-center items-center gap-2">
                            <p className="text-[#212529] font-medium text-[24px]">
                              No recommendation has been provided to you as of
                              yet
                            </p>
                            <p className="text-[#868686] text-sm">
                              You might want to approach one of your followers
                              and request a recommendation.
                            </p>
                          </div>
                        </Card>
                      </TabsContent>
                      <TabsContent value="Pending">
                        <Card className="mt-[10px]  bg-white w-full justify-between items-center p-4 space-y-4 divide-y-[0.3px] divide-y-gray-200">
                          <RecommendationCard value="pending" />
                          <RecommendationCard value="pending" />
                        </Card>
                      </TabsContent>
                      <TabsContent value="Given">
                        <Card className="mt-[10px]  bg-white w-full justify-between items-center p-4 space-y-4 divide-y-[0.3px] divide-y-gray-200">
                          <RecommendationCard value="given" />
                          <RecommendationCard value="given" />
                        </Card>
                      </TabsContent>
                    </Tabs>
                  </div>
                </Card>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="activity" className="border-t mt-0 w-full">
            <section className=" mt-5 ">
              <Tabs defaultValue="Posts" className="flex gap-x-3 w-full">
                <TabsList className="flex flex-col justify-start items-start gap-x-4  h-fit rounded-none gap-y-2 p-2  bg-[#F9F9F9]  w-[230px] shrink-0">
                  <TabsTrigger
                    value="Posts"
                    className="text-base  data-[state=active]:bg-white w-full    rounded-[5px] data-[state=active]:shadow-none !justify-start"
                  >
                    Posts
                  </TabsTrigger>
                  <TabsTrigger
                    value="Comments"
                    className="text-base   data-[state=active]:bg-white w-full   rounded-[5px] data-[state=active]:shadow-none !justify-start"
                  >
                    Comments
                  </TabsTrigger>
                  <TabsTrigger
                    value="Likes"
                    className="text-base  data-[state=active]:bg-white w-full    rounded-[5px] data-[state=active]:shadow-none !justify-start"
                  >
                    Likes
                  </TabsTrigger>
                  <TabsTrigger
                    value="Images"
                    className="text-base  data-[state=active]:bg-white w-full    rounded-[5px] data-[state=active]:shadow-none !justify-start"
                  >
                    Images
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="Posts" className="w-full mt-0">
                  <HomePost />
                  <HomePost />
                </TabsContent>
                <TabsContent value="Comments" className="w-full mt-0">
                  <HomePost />
                  <HomePost />
                </TabsContent>
                <TabsContent value="Likes" className="w-full mt-0">
                  <HomePost />
                  <HomePost />
                </TabsContent>
                <TabsContent value="Images" className="w-full mt-0 ">
                  <div className="w-full grid grid-cols-4 gap-2">
                    <Image
                      src={"/images/joshua-hanson-e616t35Vbeg-unsplash.jpg"}
                      alt="Logo"
                      width={141}
                      height={141}
                      priority
                      className="object-fit rounded-[3px]"
                    />
                    <Image
                      src={"/images/joshua-hanson-e616t35Vbeg-unsplash.jpg"}
                      alt="Logo"
                      width={141}
                      height={141}
                      priority
                      className="object-fit rounded-[3px]"
                    />
                    <Image
                      src={"/images/joshua-hanson-e616t35Vbeg-unsplash.jpg"}
                      alt="Logo"
                      width={141}
                      height={141}
                      priority
                      className="object-fit rounded-[3px]"
                    />
                    <Image
                      src={"/images/joshua-hanson-e616t35Vbeg-unsplash.jpg"}
                      alt="Logo"
                      width={141}
                      height={141}
                      priority
                      className="object-fit rounded-[3px]"
                    />
                    <Image
                      src={"/images/joshua-hanson-e616t35Vbeg-unsplash.jpg"}
                      alt="Logo"
                      width={141}
                      height={141}
                      priority
                      className="object-fit rounded-[3px]"
                    />
                    <Image
                      src={"/images/joshua-hanson-e616t35Vbeg-unsplash.jpg"}
                      alt="Logo"
                      width={141}
                      height={141}
                      priority
                      className="object-fit rounded-[3px]"
                    />

                    <Image
                      src={"/images/joshua-hanson-e616t35Vbeg-unsplash.jpg"}
                      alt="Logo"
                      width={141}
                      height={141}
                      priority
                      className="object-fit rounded-[3px]"
                    />
                    <Image
                      src={"/images/joshua-hanson-e616t35Vbeg-unsplash.jpg"}
                      alt="Logo"
                      width={141}
                      height={141}
                      priority
                      className="object-fit rounded-[3px]"
                    />
                    <Image
                      src={"/images/joshua-hanson-e616t35Vbeg-unsplash.jpg"}
                      alt="Logo"
                      width={141}
                      height={141}
                      priority
                      className="object-fit rounded-[3px]"
                    />
                    <Image
                      src={"/images/joshua-hanson-e616t35Vbeg-unsplash.jpg"}
                      alt="Logo"
                      width={141}
                      height={141}
                      priority
                      className="object-fit rounded-[3px]"
                    />
                    <Image
                      src={"/images/joshua-hanson-e616t35Vbeg-unsplash.jpg"}
                      alt="Logo"
                      width={141}
                      height={141}
                      priority
                      className="object-fit rounded-[3px]"
                    />
                    <Image
                      src={"/images/joshua-hanson-e616t35Vbeg-unsplash.jpg"}
                      alt="Logo"
                      width={141}
                      height={141}
                      priority
                      className="object-fit rounded-[3px]"
                    />
                  </div>
                  <div className="w-full pr-8">
                    <div className="w-full  flex justify-center items-center border-t-[0.5px]  border-gray-200 mt-4 pt-4">
                      <p className="text-sm text-[#0472F4] ">View more</p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </section>
          </TabsContent>
          <TabsContent value="recommendations" className="border-t mt-0">
            <div className="flex gap-5 mt-[20px] "></div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
