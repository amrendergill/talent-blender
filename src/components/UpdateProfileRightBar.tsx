import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const profileStatus: any = [
    {
        count: 0,
        status: 'Connections'
    },
    {
        count: 1,
        status: 'Followers'
    },
    {
        count: 2,
        status: 'Following'
    },
]

export default function CreateJobRightBar() {
    return (
        <div className="w-[512px] max-w-[512px] min-w-[512px] ">
            {/* <div className="bg-[#F9F9F9]  rounded-[10px] px-5 py-[15px] h-[120px]">
                <p className="font-medium text-base">Complete your Profile</p>
                <p className="text-[#868686] text-xs mt-3 mb-[22px]">
                    By completing all the details you have a higher chance of
                    being seen by recruiters.
                </p>
                <div className="flex items-center gap-[10px]">
                    <p className="text-xs font-medium">33%</p>
                    <Progress value={33} className="w-[255px] h-[7px]" />
                </div>
            </div>
            <div className="border-t mt-[20px] pb-[20px]"></div> */}
            <div className="border  p-[20px] mt-[20px] rounded-[10px]">
                <div className="flex justify-between">
                    <div className="flex items-center gap-[25px]">
                        <div className='relative'>
                            <img src='/images/avator.png' alt='avator' className="h-[78px] w-[78px]" />
                            <div className="bg-white rounded-full border-[0.2px]  absolute top-[53px] p-[6px] left-[50px] flex justify-center">
                                <img src='/images/camera-viewfinder.png' alt='viewfinder' className="h-[14px]  w-[14px]" />
                            </div>
                        </div>
                        <div className="">
                            <p className="text-2xl font-medium text-[#000000]">Umang Sharma</p>
                            <p className=" text-base mt-[10px]font-normal">UI/UX Designer</p>
                            <p className="text-xs mt-[5px] text-[#868686] font-normal">Noida, Uttar Pradesh</p>
                        </div>

                    </div>
                    <div className="">
                        <img src='/images/menu-dots-vertical (1).png' alt='menu' />
                    </div>
                </div>
                <div className="flex  mt-5">
                    <p></p>
                    <div className="flex items-center gap-x-2">
                        <Select>
                            <SelectTrigger className="w-full px-[20px] py-[9px] text-[#259427] text-sm rounded-[18px] ">
                                <SelectValue placeholder=" Prepared for interviews" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="linkedIn-audio-event">
                                        Prepared for interviews
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <Button className="flex items-center gap-x-2  text-black border-[0.5px] border-[#868686] bg-[#F9F9F9] rounded-[18px]  px-[20px] py-[9px]">
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
                <div className="mt-[30px] flex bg-[#F9F9F9] px-[40px] py-[20px] gap-[40px] rounded-[10px]">
                    {profileStatus?.map((item: any, index: any) => (
                        <div key={`profileStatus${index}`} className={`${index == 0 ? '' : 'border-l pl-[40px]'}  flex flex-col items-center  gap-[10px]`}>
                            <p>{item?.count}</p>
                            <p className="text-base font-regular text-[#868686]">{item?.status}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="border mt-[20px] px-[20px] py-[10px] rounded-[10px]">
                <h2 className='font-medium text-base text-[#000000]'>Competency Badges</h2>
                <img src='/images/badge.png' alt='competency badge' className="mt-[30px] h-[87px] w-[95px]" />
            </div>
            <div className="border mt-[20px] px-[20px] py-[10px] h-[181px] rounded-[10px]">
                <h2 className='font-medium text-base text-[#000000]'>Community Badges</h2>

            </div>
        </div>

    )
}