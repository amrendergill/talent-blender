'use client'
import DefaultInitial from "@/components/DefaultInitials";
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
      <main className="bg-white">
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
                        <CardTitle className="text-lg">{item?.job_title}</CardTitle>
                        <CardDescription>{item?.company_name}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className={` mt-3`}>
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
