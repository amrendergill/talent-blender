import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { HiPlus } from "react-icons/hi";
import { HiMiniUserGroup } from "react-icons/hi2";
import { IoBookmarkSharp } from "react-icons/io5";
import { Card } from "./ui/card";
import Image from "next/image";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import PeopleYouMayKnow from "./PeopleYouMayKnow";

export default function RightSidebar() {
    return (
        <>
            <Card className="px-3 py-4">

                <div>
                    <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-500 font-semibold">CandidateHub News</p>
                        <div>
                            <BsFillInfoSquareFill />
                        </div>

                    </div>
                    <div className="py-3 flex flex-col gap-4">
                        
                            <div className="flex items-start gap-2">
                                <div className="h-fit">
                                    <GoDotFill size={13} color="#6b7280" />
                                </div>
                                <div className="flex flex-col">
                                <p className="text-xs font-semibold text-gray-500">Leveling up India's gaming sector</p>
                                <p className="text-xs text-gray-500">4 days ago</p>

                                </div>
                            </div>
                            <div className="flex items-start gap-2">
                                <div className="h-fit">
                                    <GoDotFill size={13} color="#6b7280" />
                                </div>
                                <div className="flex flex-col">
                                <p className="text-xs font-semibold text-gray-500">Leveling up India's gaming sector</p>
                                <p className="text-xs text-gray-500">4 days ago</p>

                                </div>
                            </div>
                            <div className="flex items-start gap-2">
                                <div className="h-fit">
                                    <GoDotFill size={13} color="#6b7280" />
                                </div>
                                <div className="flex flex-col">
                                <p className="text-xs font-semibold text-gray-500">Leveling up India's gaming sector</p>
                                <p className="text-xs text-gray-500">4 days ago</p>

                                </div>
                            </div>
                            <div className="flex items-start gap-2">
                                <div className="h-fit">
                                    <GoDotFill size={13} color="#6b7280" />
                                </div>
                                <div className="flex flex-col">
                                <p className="text-xs font-semibold text-gray-500">Leveling up India's gaming sector</p>
                                <p className="text-xs text-gray-500">4 days ago</p>

                                </div>
                            </div>
                            <div className="flex items-start gap-2">
                                <div className="h-fit">
                                    <GoDotFill size={13} color="#6b7280" />
                                </div>
                                <div className="flex flex-col">
                                <p className="text-xs font-semibold text-gray-500">Leveling up India's gaming sector</p>
                                <p className="text-xs text-gray-500">4 days ago</p>

                                </div>
                            </div>

                            <div >
                                <p className="text-xs text-gray-500 ml-5 mt-4">Show more</p>
                            </div>
                        

                    </div>
                </div>



            </Card>
            <PeopleYouMayKnow title={'People you may know'} avatar={"/images/PNH-logo-icon.png"} userName={'John Doe'} bio={'bio'}/>
            <PeopleYouMayKnow title={'People also visited'} avatar={"/images/PNH-logo-icon.png"}  userName={'John Doe'} bio={'bio'} />
        </>
    )
}