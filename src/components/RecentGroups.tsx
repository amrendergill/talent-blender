import { HiPlus } from "react-icons/hi";
import { HiMiniUserGroup } from "react-icons/hi2";
import { Card } from "./ui/card";

export default function RecentGroups ({title, groupName} : any) {
    return(
        <>
                <div>
                    <p className="text-sm text-gray-500 font-semibold">{title}</p>
                    <div className="py-3 flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                            <div>
                                <HiMiniUserGroup color="#3d3f43" />
                            </div>
                            <p className="text-xs text-gray-500 font-medium">{groupName}</p>
                        </div>
                        

                    </div>
                </div>
{/* 
                <div className=" mt-5">
                    <p className="text-sm text-[#0a66c2] font-semibold">Groups</p>
                    <div className="py-3 flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                            <div>
                                <HiMiniUserGroup color="#3d3f43" />
                            </div>
                            <p className="text-xs text-gray-500 font-medium">JavaScript</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div>
                                <HiMiniUserGroup color="#3d3f43" />
                            </div>
                            <p className="text-xs text-gray-500 font-medium">AI & ML</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div>
                                <HiMiniUserGroup color="#3d3f43" />
                            </div>
                            <p className="text-xs text-gray-500 font-medium">Data Science</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div>
                                <HiMiniUserGroup color="#3d3f43" />
                            </div>
                            <p className="text-xs text-gray-500 font-medium">React Native</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div>
                                <HiMiniUserGroup color="#3d3f43" />
                            </div>
                            <p className="text-xs text-gray-500 font-medium">Automation</p>
                        </div>

                    </div>

                    
                    <div>
                        <div className="flex items-center justify-between mt-5 ">

                        <p className="text-sm text-[#0a66c2] font-semibold">
                            Followed Hashtags
                        </p>
                        
                        </div>
                    </div>
                </div> */}
        </>
    )
}