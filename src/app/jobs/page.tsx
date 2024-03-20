"use client";
import DefaultInitial from "@/components/DefaultInitials";
import JobCard from "@/components/JobCard";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { appService } from "@/utils/api";
import Image from "next/image";
import Link from "next/link";

import { useEffect, useMemo, useState } from "react";

const defaultFilters: any = {
  gender: "",
  remote: false,
};
const initialValue: any = {
  location: "",
  types: "",
  department: "",
  city: "",
  remote: false,
  sortBy: "",
};
export default function Jobs() {
  // const [data]:any = await getProps()
  // console.log(data, "data");

  const jobCardDetails = [
    {
      companyName: "",
      workType: "",
      location: "",
      jobTitle: "",
      time: "",
    },
  ];
  const [data, setData]: any = useState();
  const [filters, setFilters] = useState(defaultFilters);
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 6,
    hasNextPage: false,
  });
  const [filterBy, setFilterBy]: any = useState(initialValue);
  const featuredJobs = async (
    addOld: any = false,
    page: any = pagination?.page
  ) => {
    const response: any = await appService.getJob(
      page,
      pagination?.pageSize,
      filterBy.location ?? "",
      filterBy.department ?? "",
      filterBy.types ?? "",
      filterBy.city ?? "",
      filterBy.remote,
      filterBy.sortBy
    );
    if (!addOld) {
      setData(response?.data?.job_data?.data);
    } else {
      setData([...data, ...response?.data?.job_data?.data]);
    }
    setFilters({ ...filters, ...response?.data?.filters[0] });
    setPagination({
      ...pagination,
      hasNextPage: response?.data?.job_data?.page_info?.has_next_page,
      page: response?.data?.job_data?.page_info?.page,
    });
  };

  useEffect(() => {
    featuredJobs();
  }, [filterBy]);

  return (
    <>
      <main className="bg-white flex">
        <div className="border-r w-full">
          <div className="">
            <div className="pt-[30px]">
              <div className="flex justify-between border-b pr-3 pb-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 border w-fit rounded-[5px]">
                    <Image
                      src={"/images/PNH-logo-icon.png"}
                      alt="logo"
                      height={80}
                      width={80}
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-2xl">Software Developer</p>
                    <p className="text-base font-regular text-[#0472F4]">
                      Pitch N Hire
                    </p>
                  </div>
                  <div></div>
                </div>
                <div className="flex gap-[29px] items-center">
                  <div>
                    <Button className="bg-[#0472F4] rounded-[5px] text-xs text-white">
                      Apply Now
                    </Button>
                  </div>
                  <div className="border p-2 rounded-full">
                    <Image
                      src={"/images/bookmark.png"}
                      alt="bookmark"
                      width={17}
                      height={17}
                    />
                  </div>
                  <div className="border p-2 rounded-full">
                    <Image
                      src={"/images/share-square.png"}
                      alt="share"
                      width={15}
                      height={15}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="font_medium text-[18px] mb-4 lg:mb-[50]  text-nblack ">
            Explore the <span className="text-blue">Unlimited Jobs with</span>{" "}
            the Best Remote Work Job Sites!
          </div>
          <div className="flex">
            <div className="min-w-[260px] relative w-[260px] ">
              <div className="top-[90px] sticky pr-[15px] w-[100%]">
                <ul className="font_tiny w-full my-2 ul-list-style-none ">
                  <li className="mb-2">
                    <div className="font_medium pb-1 color-black">
                      <div className="ps-0 font_tiny font_medium flex justify-between items-center py-1 mb-0 color-black">
                        Posted Within
                      </div>
                      <div className="flex justify-between">
                        <div>
                          <p className="commonCheckSmRound mb-0">
                            <input
                              className="m-0"
                              id={`1 Day`}
                              name={`1 Day`}
                              type="checkbox"
                              value={filterBy?.sortBy}
                              checked={filterBy?.sortBy == "1" ? true : false}
                              onChange={(e) =>
                                setFilterBy({
                                  ...filterBy,
                                  sortBy: filterBy?.sortBy == "1" ? "" : "1",
                                })
                              }
                            />
                            <label
                              htmlFor={`1 Day`}
                              className={`check-label vardana11px text-color`}
                            >
                              1 Day
                            </label>
                          </p>
                          <p className="commonCheckSmRound mb-0">
                            <input
                              className="m-0"
                              id={`3 Day`}
                              name={`3 Day`}
                              type="checkbox"
                              value={filterBy?.sortBy}
                              checked={filterBy?.sortBy == "3" ? true : false}
                              onChange={(e) =>
                                setFilterBy({
                                  ...filterBy,
                                  sortBy: filterBy?.sortBy == "3" ? "" : "3",
                                })
                              }
                            />
                            <label
                              htmlFor={`3 Day`}
                              className={`check-label vardana11px text-color`}
                            >
                              3 Days
                            </label>
                          </p>
                          <p className="commonCheckSmRound mb-0">
                            <input
                              className="m-0"
                              id={`1 Week`}
                              name={`1 Week`}
                              type="checkbox"
                              value={filterBy?.sortBy}
                              checked={filterBy?.sortBy == "7" ? true : false}
                              onChange={(e) =>
                                setFilterBy({
                                  ...filterBy,
                                  sortBy: filterBy?.sortBy == "7" ? "" : "7",
                                })
                              }
                            />
                            <label
                              htmlFor={`1 Week`}
                              className={`check-label vardana11px text-color`}
                            >
                              1 Week
                            </label>
                          </p>
                        </div>
                        <div className="">
                          <p className="commonCheckSmRound mb-0">
                            <input
                              className="m-0"
                              id={`1 Months`}
                              name={`1 Months`}
                              type="checkbox"
                              value={filterBy?.sortBy}
                              checked={filterBy?.sortBy == "30" ? true : false}
                              onChange={(e) =>
                                setFilterBy({
                                  ...filterBy,
                                  sortBy: filterBy?.sortBy == "30" ? "" : "30",
                                })
                              }
                            />
                            <label
                              htmlFor={`1 Months`}
                              className={`check-label vardana11px text-color`}
                            >
                              1 Months
                            </label>
                          </p>
                          <p className="commonCheckSmRound mb-0">
                            <input
                              className="m-0"
                              id={`3 Months`}
                              name={`3 Months`}
                              type="checkbox"
                              value={filterBy?.sortBy}
                              checked={filterBy?.sortBy == "90" ? true : false}
                              onChange={(e) =>
                                setFilterBy({
                                  ...filterBy,
                                  sortBy: filterBy?.sortBy == "90" ? "" : "90",
                                })
                              }
                            />
                            <label
                              htmlFor={`3 Months`}
                              className={`check-label vardana11px text-color`}
                            >
                              3 Months
                            </label>
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <div className="flex justify-between">
                    <p className="mb-1 commonCheckSmRound">
                      <input
                        type="checkbox"
                        id={"remote"}
                        value="remote"
                        checked={filterBy.remote}
                        onChange={(e: any) => {
                          setFilterBy({
                            ...filterBy,
                            remote: e.target.checked,
                          });
                        }}
                      />
                      <label
                        className="m-0 flex items-center font_tiny font_medium"
                        htmlFor={`remote`}
                      >
                        Remote Only
                      </label>
                    </p>
                  </div>
                </ul>
                <Select
                  value={`${filterBy?.city}`}
                  key={`${filterBy?.city}`}
                  onValueChange={(e: any) => {
                    setFilterBy({ ...filterBy, city: e });
                  }}
                >
                  <SelectTrigger className="w-[100%] text-[11px] h-[31px]">
                    <SelectValue placeholder="Select City" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {filters?.cities?.length > 0 &&
                        filters?.cities?.map((item: any, index: number) => (
                          <SelectItem
                            className="text-[11px]"
                            value={item?.length > 0 ? item : "NA"}
                            key={`citiesFilter${item}${index}`}
                          >
                            {item}
                          </SelectItem>
                        ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <div className="mt-[15px]">
                  <Select
                    value={`${filterBy?.department}`}
                    key={`${filterBy?.department}`}
                    onValueChange={(e: any) => {
                      setFilterBy({ ...filterBy, department: e });
                    }}
                  >
                    <SelectTrigger className="w-[100%] text-[11px] h-[31px]">
                      <SelectValue placeholder="Select departments" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {filters?.departments?.length > 0 &&
                          filters?.departments?.map(
                            (item: any, index: number) => (
                              <SelectItem
                                className="text-[11px]"
                                value={item?.length > 0 ? item : "NA"}
                                key={`departmentsFilter${item}${index}`}
                              >
                                {item}
                              </SelectItem>
                            )
                          )}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="mt-[15px]">
                  <Select
                    value={`${filterBy?.types}`}
                    key={`${filterBy?.types}`}
                    onValueChange={(e: any) => {
                      setFilterBy({ ...filterBy, types: e });
                    }}
                  >
                    <SelectTrigger className="w-[100%] text-[11px] h-[31px]">
                      <SelectValue placeholder="Select Types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {filters?.job_types?.length > 0 &&
                          filters?.job_types?.map(
                            (item: any, index: number) => (
                              <SelectItem
                                className="text-[11px]"
                                value={item?.length > 0 ? item : "NA"}
                                key={`job_typesFilter${item}${index}`}
                              >
                                {item}
                              </SelectItem>
                            )
                          )}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="mt-[15px]">
                  <Select
                    value={`${filterBy?.locations}`}
                    key={`${filterBy?.locations}`}
                    onValueChange={(e: any) => {
                      setFilterBy({ ...filterBy, locations: e });
                    }}
                  >
                    <SelectTrigger className="w-[100%] text-[11px] h-[31px]">
                      <SelectValue placeholder="Select locations" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {filters?.locations?.length > 0 &&
                          filters?.locations?.map(
                            (item: any, index: number) => (
                              <SelectItem
                                className="text-[11px]"
                                value={
                                  item?.country_code?.length > 0
                                    ? item?.country_code
                                    : "NA"
                                }
                                key={`locationsFilter${item?.country_code}${index}`}
                              >
                                {item?.country_name}
                              </SelectItem>
                            )
                          )}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="mt-[15px]">
                  <button
                    className={`rounded-[3px] text-[#0D163E] bg-[white] py-[4px] border-[1px] border-[#0D163E] px-4 font_medium text-[11px]`}
                    onClick={() => {
                      setFilterBy(initialValue);
                    }}
                  >
                    Clear All
                  </button>
                </div>
              </div>
            </div>
            <div className="w-CenterJob pl-[15px] pb-[15px] border_left">
              {data?.length > 0 &&
                data?.map((item: any) => (
                  <Card className="mb-[20px] w-full">
                    <CardHeader className="flex flex-row justify-start">
                      <div className="pt-1">
                        <DefaultInitial
                          url={item?.company_logo?.url}
                          firstName={item?.company_name}
                        />
                      </div>
                      <div className="">
                        <CardTitle className="text-lg flex flex-wrap">{item?.job_title}</CardTitle>
                        <CardDescription>{item?.company_name}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className={`mt-3`}>
                        <div className={"flex flex-wrap"}>
                          {item?.skills?.slice(0, 4)?.map((item: any) => (
                            <span className={`skillcard py-1 me-2 mb-1 px-3`}>
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="flex mt-3 mb-3">
                          <span className="text-[12px] text-nblack flex items-center">
                            {item?.job_type?.min_experience} to{" "}
                            {item?.job_type?.max_experience} Yrs
                          </span>
                        </div>
                        <div>
                          {(item?.job_location?.city?.length > 0 ||
                            item?.job_location?.state_name?.length > 0) && (
                            <span className="text-[12px] mb-4 text_blue flex items-center">
                              {item?.job_location?.city?.length > 0 &&
                                item?.job_location?.city}{" "}
                              {item?.job_location?.state_name?.length > 0 &&
                                " ," + item?.job_location?.state_name}
                            </span>
                          )}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="px-0 pb-0 flex items-center w-full justify-center">
                      <a
                        className="w-[100%]"
                        href={item?.job_link}
                        target="_blank"
                      >
                        <Button
                          className={`text-white bg-blue rounded w-full border-0 py-1 text-[12px]`}
                        >
                          Apply
                        </Button>
                      </a>
                    </CardFooter>
                  </Card>
                ))}
              {pagination?.hasNextPage && (
                <div className="w-full mt-3 flex justify-center">
                  <button
                    className={`rounded-[3px] text-[#0D163E] bg-[white] py-[4px] border-[1px] border-[#0D163E] px-4 font_medium text-[11px]`}
                    onClick={() => {
                      featuredJobs(true, pagination?.page + 1);
                    }}
                  >
                    Show More
                  </button>
                </div>
              )}
            </div>
          </div> */}
          </div>
          <div className="my-[25px] pr-3">
            <div>
              <p className="font-semibold text-base mb-[10px]">About Us</p>
              <p className="text-xs">
                XYZ Tech Solutions is a leading software development company
                specializing in innovative solutions for businesses worldwide.
                We are committed to delivering high-quality software products
                that drive growth and success for our clients.
              </p>
            </div>
            <div className="my-10">
              <p className="font-semibold text-base mb-[10px]">Job Summary</p>
              <p className="text-xs">
                As a Software Developer at XYZ Tech Solutions, you will be
                responsible for designing, developing, and maintaining software
                applications that meet the needs of our clients. You will work
                closely with our cross-functional teams to deliver scalable and
                reliable solutions that drive business value.
              </p>
            </div>
            <div className="my-10">
              <p className="font-semibold text-base mb-[10px]">
                Key Responsibilities
              </p>
              <ul
                className="text-xs flex flex-col gap-[10px]"
                style={{ listStyle: "disc" }}
              >
                <li>
                  Collaborate with product managers, designers, and other
                  stakeholders to gather and analyze requirements.
                </li>
                <li>
                  Design, develop, and test software solutions using modern
                  programming languages and frameworks.
                </li>
                <li>
                  Write clean, efficient, and well-documented code following
                  industry best practices.
                </li>
                <li>
                  Perform code reviews, debugging, and troubleshooting to ensure
                  the quality and reliability of software products.
                </li>
                <li>
                  Implement and maintain scalable architecture and
                  infrastructure for software applications.
                </li>
                <li>
                  Stay updated on emerging technologies and trends in software
                  development, and proactively suggest improvements to existing
                  systems.
                </li>
                <li>
                  Provide technical guidance and support to team members, and
                  contribute to a culture of innovation and continuous
                  improvement.
                </li>
              </ul>
            </div>
            <div className="my-10">
              <p className="font-semibold text-base mb-[10px]">
                Qualifications
              </p>
              <ul
                className="text-xs flex flex-col gap-[10px]"
                style={{ listStyle: "disc" }}
              >
                <li>
                  Bachelor’s degree in Computer Science, Engineering, or related
                  field.
                </li>
                <li>
                  3+ years of experience in software development, with expertise
                  in languages such as Java, Python, or JavaScript.
                </li>
                <li>
                  Strong understanding of object-oriented programming
                  principles, software design patterns, and data structures.
                </li>
                <li>
                  Experience with web application development, including
                  frontend and backend technologies, RESTful APIs, and database
                  management systems (e.g., SQL, MongoDB).
                </li>
                <li>
                  Familiarity with Agile methodologies, continuous
                  integration/continuous deployment (CI/CD) pipelines, and
                  version control systems (e.g., Git).
                </li>
                <li>
                  Excellent problem-solving skills, attention to detail, and a
                  passion for building high-quality software solutions.
                </li>
                <li>
                  Strong communication and collaboration skills, with the
                  ability to work effectively in a team environment.
                </li>
              </ul>
            </div>
            <div className="my-10">
              <p className="font-semibold text-base mb-[10px]">Skills</p>
              <div>
                <div className="bg-[#F5F5F5] rounded-[5px] text-xs px-[10px] py-[5px] w-fit">
                  Java
                </div>
              </div>
            </div>
            <div className="my-10">
              <p className="font-semibold text-base mb-[10px]">Benefits</p>
              <ul
                className="text-xs flex flex-col gap-[10px]"
                style={{ listStyle: "disc" }}
              >
                <li>Competitive salary and performance-based bonuses.</li>
                <li>
                  Comprehensive benefits package, including health insurance,
                  retirement plans, and paid time off.
                </li>
                <li>
                  Flexible work schedule and opportunities for remote work.
                </li>
                <li>
                  Professional development opportunities, including training
                  programs and certifications.
                </li>
                <li>
                  Collaborative and inclusive work culture, with opportunities
                  for mentorship and career growth.
                </li>
              </ul>
            </div>
            <div>
              <Button className="bg-[#0472F4] rounded-[5px] text-xs text-white">
                Apply Now
              </Button>
            </div>
          </div>
          <hr />
          <div className="my-[25px] pr-3">
            <div className="flex items-center justify-between mb-[15px]">
              <p className="font-semibold text-base">Jobs</p>
              <Link href={"#"} className="text-xs font-medium text-[#0472F4]">
                View All
              </Link>
            </div>
            <div className="flex flex-col gap-[15px]">
              <JobCard
                jobTitle={"OneHash / ERPNext Developer"}
                companyName={"Pitch N Hire"}
                workType={"Full-time"}
                location={"Delhi, India"}
                time={"3 weeks ago"}
              />
              <JobCard
                jobTitle={"OneHash / ERPNext Developer"}
                companyName={"Pitch N Hire"}
                workType={"Full-time"}
                location={"Delhi, India"}
                time={"3 weeks ago"}
              />
            </div>
          </div>
        </div>
        <div className="mt-[30px] w-[370px] max-w-[370px] min-w-[370px] pl-3">
          <div className="bg-[#F9F9F9] py-[30px] rounded-[10px] px-5">
            <div className="flex items-center gap-[11px]">
              <Image src={""} alt="" height={20} width={20} />
              <p className="font-medium text-base">Noida, Uttar Pradesh</p>
            </div>
            <p className="text-[#868686] text-xs mt-2">
              Please send us your detailed CV to apply for this job post
            </p>
            <div className="my-[23px]">
              <p className="font-medium text-xl">$124,65</p>
              <p className="text-xs text-[#868686]">Avg. Salary</p>
            </div>

            <div>

            </div>
          </div>
        </div>
      </main>
    </>
  );
}

// export async function getProps() {
//   const page = 1
//   const pageSize = 6
//   const location = ''
//   const city = ''
//   const department = ''
//   const remote = false
//   const sortBy = ''
//   const response = await appService.getJob(
//      page ,
//    pageSize,
//      location,
//      location,
//      department,
//      city,
//      remote,
//      sortBy
//   );
//   const jobs = response?.data?.job_data?.data;
//   console.log(jobs, "jobs");

//   const filters = response?.data?.filters[0];
//   const pagination = {
//     hasNextPage: response?.data?.job_data?.page_info?.has_next_page,
//     page: response?.data?.job_data?.page_info?.page,
//   };

//   return{
//     props:{jobs}

//   }

// }
