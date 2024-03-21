"use client";
import DefaultInitial from "@/components/DefaultInitials";
// import Sidebar from "@/components/jobs/sidebar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";

type SliderProps = React.ComponentProps<typeof Slider>;

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
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

import { useEffect, useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

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

const mockData = [
  {
    src: "/images/fb.png",
    name: "Software Engineer - MLOps - France or Remote EMEA",
    company: "Facebook",
  },
  {
    src: "/images/dunkin.png",
    name: "UI/UX Designer",
    company: "Android",
  },
  {
    src: "/images/android.png",
    name: "UI/UX Designer",
    company: "Android",
  },
  {
    src: "/images/fb.png",
    name: "Software Engineer - MLOps - France or Remote EMEA",
    company: "Facebook",
  },
  {
    src: "/images/dunkin.png",
    name: "UI/UX Designer",
    company: "Android",
  },
  {
    src: "/images/android.png",
    name: "UI/UX Designer",
    company: "Android",
  },
];

const mockDataSidebar = [
  {
    src: "/images/bullseye.svg",
    name: "Maketing",
  },
  {
    src: "/images/bell-concierge (1).svg",
    name: "Hospitality",
  },
  {
    src: "/images/tshirt.svg",
    name: "Fashion",
  },
  {
    src: "/images/dolly.svg",
    name: "Logistic",
  },
  {
    src: "/images/it.svg",
    name: "IT",
  },
  {
    src: "/images/user-md.svg",
    name: "Healthcare",
  },
  {
    src: "/images/laptop-mobile.svg",
    name: "Engineering (Software)",
  },
  {
    src: "/images/benefit-porcent.svg",
    name: "Sales",
  },
  {
    src: "/images/piggy-bank.svg",
    name: "Finance",
  },
  {
    src: "/images/stats.svg",
    name: "Data & Analytics",
  },
  {
    src: "/images/selling.svg",
    name: "Product Development",
  },
  {
    src: "/images/man-scientist.svg",
    name: "Research",
  },
  {
    src: "/images/admin-alt.svg",
    name: "Office & Admin",
  },
  {
    src: "/images/workshop.svg",
    name: "Learning & Development",
  },
];

export default function Jobs({ className, ...props }: SliderProps) {
  // const [data]:any = await getProps()
  // console.log(data, "data");

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
    <div className="mt-4 flex  gap-x-3 w-full">
      {/* <main className="bg-white">
        <div className="p-5">
          <div className="font_medium text-[18px] mb-4 lg:mb-[50]  text-nblack ">
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
          </div>
        </div>
      </main> */}
      <aside className="w-[330px] max-w-[330px] min-w-[321px]">
        <Card className="!p-0">
          <div className="flex items-center justify-between py-4  px-5">
            <p className="text-base font-medium">Filter</p>
            <p className="text-[#E5042D] text-sm">Clear all</p>
          </div>
          <hr className=" border-t-[0.5px]  border-gray-200 w-full " />
          <div className=" py-4 px-5 space-y-4">
            <div className="space-y-2">
              <p className="text-sm">Skills</p>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue
                    className="!placeholder:text-[#868686]"
                    placeholder="Skills..."
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {/* <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem> */}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <hr className=" border-t-[0.5px]  border-gray-200 w-full " />
            <div className="space-y-2 pt-2">
              <p className="text-sm">Job type</p>
              <div className="grid grid-cols-2 gap-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="Full-time" />
                  <label
                    htmlFor="Full-time"
                    className="text-xs text-[#868686] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Full-time
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="Internship" />
                  <label
                    htmlFor="Internship"
                    className="text-xs text-[#868686] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Internship
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="Freelance" />
                  <label
                    htmlFor="Freelance"
                    className="text-xs text-[#868686] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Freelance
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="Volunteer" />
                  <label
                    htmlFor="Volunteer"
                    className="text-xs text-[#868686] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Volunteer
                  </label>
                </div>
              </div>
            </div>
            <hr className=" border-t-[0.5px]  border-gray-200 w-full " />
            <div className="space-y-5 pt-2">
              <p className="text-sm">Salary Range</p>
              <Slider
                defaultValue={[25, 75]}
                max={100}
                step={1}
                className={cn("w-[100%]", className)}
                {...props}
              />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <p className="text-xs">$</p>
                  <Input
                    className="h-[20px] w-[50px] text-[10px]"
                    type="email"
                    placeholder="1200"
                  />
                </div>
                <div className="flex items-center gap-x-2">
                  <p className="text-xs">$</p>
                  <Input
                    className="h-[20px] w-[50px] text-[10px]"
                    type="email"
                    placeholder="2200"
                  />
                </div>
              </div>
            </div>
            <hr className=" border-t-[0.5px]  border-gray-200 w-full " />
            <div className="space-y-5 pt-2">
              <p className="text-sm">Experience</p>
              <Slider
                defaultValue={[25, 75]}
                max={100}
                step={1}
                className={cn("w-[100%]", className)}
                {...props}
              />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <p className="text-xs">Yrs</p>
                  <Input
                    className="h-[20px] w-[50px] text-[10px]"
                    type="email"
                    placeholder="01"
                  />
                </div>
                <div className="flex items-center gap-x-2">
                  <p className="text-xs">Yrs</p>
                  <Input
                    className="h-[20px] w-[50px] text-[10px]"
                    type="email"
                    placeholder="10"
                  />
                </div>
              </div>
            </div>
            <hr className=" border-t-[0.5px]  border-gray-200 w-full " />
            <div className="space-y-2 pt-2">
              <p className="text-sm">Date Posted</p>

              <RadioGroup
                defaultValue="comfortable "
                className="grid grid-cols-2 gap-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="default" id="r1" />
                  <Label className="text-xs text-[#868686]" htmlFor="r1">
                    Past 3 days
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="comfortable" id="r2" />
                  <Label className="text-xs text-[#868686]" htmlFor="r2">
                    Past week
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="compact" id="r3" />
                  <Label className="text-xs text-[#868686]" htmlFor="r3">
                    Past Month
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="all" id="r4" />
                  <Label className="text-xs text-[#868686]" htmlFor="r4">
                    All
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <hr className=" border-t-[0.5px]  border-gray-200 w-full " />
            <div className="space-y-2 pt-2">
              <p className="text-sm">Commute</p>
              <div className="grid grid-cols-2 gap-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="Remote" />
                  <label
                    htmlFor="Remote"
                    className="text-xs text-[#868686] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Remote
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="Hybrid" />
                  <label
                    htmlFor="Hybrid"
                    className="text-xs text-[#868686] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Hybrid
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id=" On-Site" />
                  <label
                    htmlFor=" On-Site"
                    className="text-xs text-[#868686] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    On-Site
                  </label>
                </div>
              </div>
            </div>

            <hr className=" border-t-[0.5px]  border-gray-200 w-full " />
            <div className="space-y-2 pt-2">
              <p className="text-sm">Distance</p>
              <div className="grid grid-cols-2 gap-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="5" />
                  <label
                    htmlFor="5"
                    className="text-xs text-[#868686] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    5 Miles
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="10" />
                  <label
                    htmlFor="10"
                    className="text-xs text-[#868686] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    10 Miles
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="15" />
                  <label
                    htmlFor="15"
                    className="text-xs text-[#868686] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    15 Miles
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="25" />
                  <label
                    htmlFor="25"
                    className="text-xs text-[#868686] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    25 Miles
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="50" />
                  <label
                    htmlFor="50"
                    className="text-xs text-[#868686] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    50 Miles
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="100" />
                  <label
                    htmlFor="100"
                    className="text-xs text-[#868686] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    100 Miles
                  </label>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </aside>
      <main className="w-full">
        <div className="flex w-full border-[0.5px] border-gray-200 h-[53px] rounded-[5px] px-2 ">
          <div className="flex items-center  w-full ml-4  border-r-[0.5px] border-gray-200 ">
            <Image
              src={"/images/search.svg"}
              alt="Logo"
              width={20}
              height={20}
              priority
              className="  object-fit"
            />
            <Input
              type="text"
              placeholder="Search Job Title or Keyword"
              className="text-sm focus:outline-none border-none w-full"
            />
          </div>
          <div className="flex items-center ml-4  w-full">
            <Image
              src={"/images/map-pin (2).svg"}
              alt="Logo"
              width={20}
              height={20}
              priority
              className="object-fit"
            />
            <Input
              type="text"
              placeholder="Country or Time Zone"
              className="  text-sm focus:outline-none border-none w-full"
            />
          </div>

          <Button className="text-xs  h-[39px] w-[100px] rounded-[5px] mt-[6px]">
            Find Jobs
          </Button>
        </div>
        <hr className="border-t-[0.5px]  border-gray-200 w-full my-4"></hr>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <Button className="text-xs h-[29px] px-5 border-[0.5px] border-[#BEBEBE] bg-[#F9F9F9]  text-black  rounded-[18px] hover:text-[#0472F4]">
              Recommended
            </Button>
            <Button className="text-xs h-[29px] px-5 border-[0.5px] border-[#BEBEBE] bg-[#F9F9F9]  text-black rounded-[18px] hover:text-[#0472F4]">
              My Jobs
            </Button>
            <Button className="text-xs h-[29px] px-5  border-[0.5px] border-[#BEBEBE] bg-[#F9F9F9]  text-black rounded-[18px] hover:text-[#0472F4]">
              Saved Jobs
            </Button>
          </div>
          <div className="flex items-center gap-x-2">
            <Button className="text-xs flex items-center gap-x-1 h-[29px] px-4 border-[0.5px] border-[#BEBEBE] bg-gradient-to-r from-[#22C7FB] to-[#1A9EFC]    rounded-[5px] text-white">
              <Image
                src={"/images/sparkles.svg"}
                alt="Logo"
                width={25}
                height={25}
                priority
                className=" w-[25px] h-[25px] "
              />
              AI Matching
            </Button>
            <Button className="text-xs h-[29px] px-5 border-[0.5px] border-[#BEBEBE] bg-white  text-black rounded-[5px] hover:text-[#0472F4]">
              + Create Job
            </Button>
          </div>
        </div>
        <div className="border-t-[0.5px]  border-gray-200 w-full  flex gap-x-2 mt-4">
          <div className=" border-r-[0.5px] border-gray-200 w-full">
            <div className="flex items-center  w-full mt-2 pr-2">
              <p className="text-xs whitespace-nowrap">Latest Jobs</p>
              <hr className="border-t-[0.5px]  border-gray-200 w-full my-4"></hr>
              <Select>
                <SelectTrigger className="w-[71px] h-[27px]">
                  <SelectValue placeholder="Sort" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Ascending</SelectItem>
                  <SelectItem value="dark">Descending</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="mt-2  pr-2 space-y-3 h-[800px] overflow-y-auto mr-2">
              {mockData.map((item: any) => (
                <Card className="space-y-4 p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-x-3">
                      <Image
                        src={item.src}
                        alt="Logo"
                        width={61}
                        height={56}
                        priority
                        className="object-fit"
                      />
                      <div>
                        <p className="text-[#0472F4] text-base font-semibold">
                          {item.name}
                        </p>
                        <p className="text-xs">{item.company}</p>
                        <p className="text-xs mt-1 text-[#868686]">
                          NOIDA, UTTAR PRADESH
                        </p>
                      </div>
                    </div>

                    <Image
                      src={"/images/bookmark@2x.png"}
                      alt="Logo"
                      width={17}
                      height={17}
                      priority
                      className="object-fit mt-2"
                    />
                  </div>
                  <div className="flex items-center gap-x-1 ">
                    <Badge className="bg-[#F2E8FE] text-[#8938E4] text-[10px] rounded-[10px]">
                      Javascript
                    </Badge>
                    <Badge className="bg-[#F2E8FE] text-[#8938E4] text-[10px] rounded-[10px]">
                      Javascript
                    </Badge>
                    <Badge className="bg-[#F2E8FE] text-[#8938E4] text-[10px] rounded-[10px]">
                      Javascript
                    </Badge>
                    <Badge className="bg-[#F2E8FE] text-[#8938E4] text-[10px] rounded-[10px]">
                      Javascript
                    </Badge>
                    <Badge className="bg-[#F2E8FE] text-[#8938E4] text-[10px] rounded-[10px]">
                      Javascript
                    </Badge>
                    <Badge className="bg-[#F2E8FE] text-[#8938E4] text-[10px] rounded-[10px]">
                      Javascript
                    </Badge>
                  </div>
                  <hr className="border-t-[0.5px]  border-gray-200 w-full my-4"></hr>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-[#F5F5F5] text-black text-[10px] rounded-[10px]">
                      Posted 25 Days ago
                    </Badge>
                    <Button className="text-xs h-[31px] px-5 border-[0.5px] border-[#BEBEBE] bg-white  text-black rounded-[5px] hover:text-[#0472F4]">
                      View Job
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          <div className="w-[330px] max-w-[330px] min-w-[321px] mt-4">
            <Card className="space-y-2 !p-3 ">
              <p className="text-base font-medium">Job Categories</p>
              {mockDataSidebar.map((item) => (
                <div className="flex justify-between items-center rounded-[5px] px-3 py-2 hover:bg-[#F9F9F9] cursor-pointer">
                  <div className="flex items-center gap-x-2">
                    <Image
                      src={item.src}
                      alt="Logo"
                      width={15}
                      height={15}
                      priority
                      className="object-fit"
                    />
                    <p className="text-xs">{item.name}</p>
                  </div>
                  <p className="text-xs">1234</p>
                </div>
              ))}
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
