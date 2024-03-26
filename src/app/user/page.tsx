import PersonalInfo from "@/components/PersonalInfo";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import UserRightSidebar from "@/components/UserRightSidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HomePost from "@/components/HomePost";

export default function User() {
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
      text: "Website",
      name: "www.appsierra.com",
    },
    {
      text: "LinkedIn",
      name: "linkedin.com/in/arpit-singhal-",
    },
    {
      text: "Twitter",
      name: "www.appsierra.com",
    },
  ];

  return (
    <>
      <div className="flex gap-x-4 mt-4">
        <main className="w-full flex flex-col gap-4 ">
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
                        His core competencies include market penetration,
                        business strategy, product engineering, and digital
                        marketing. He is known for identifying, developing, and
                        implementing business strategies that drive growth and
                        customer satisfaction. He also has strong engineering
                        and marketing teams that support him in delivering
                        quality and timely solutions. He is a transhumanist and
                        a social activist who believes in using technology for
                        the betterment of humanity.
                      </p>
                    </Card>
                    <Card className="mt-[15px] bg-[#F9F9F9] border-0">
                      <h2 className="text-[20px] text-[#212529] font-semibold">
                        Work Experience
                      </h2>
                      <div className="mt-[20px] bg-[#FFF] px-[20px] py-[15px] rounded-[5px]">
                        <h3 className="text-lg font-semibold">
                          Marketing Coordinator Assistant Intern
                        </h3>
                        <h4 className="text-base font-regular text-[#0472F4]">
                          Pitch N Hire
                        </h4>
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
                        <h3 className="text-lg font-semibold">
                          Marketing Coordinator Assistant Intern
                        </h3>
                        <h4 className="text-base font-regular text-[#0472F4]">
                          Pitch N Hire
                        </h4>
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
                          As a Software Developer at XYZ Tech Solutions, you
                          will be responsible for designing, developing, and
                          maintaining software applications that meet the needs
                          of our clients. You will work closely with our
                          cross-functional teams to deliver scalable and
                          reliable solutions that drive business value.
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
                            Associates, Applied Science Digital Multimedia
                            Design,
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
                        <div
                          key={`links${index}`}
                          className="mt-[20px] flex gap-5"
                        >
                          <div></div>
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
        </main>
        <aside className="w-[375px] min-w-[375px] max-w-[375px]">
          <UserRightSidebar />
        </aside>
      </div>
    </>
  );
}
