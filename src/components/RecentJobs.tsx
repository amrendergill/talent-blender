import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { FaRegBookmark } from "react-icons/fa";

export default function RecentJobs(props: any) {
    return (

        <>

            <div className="px-3 py-5 flex flex-col gap-5">
                <div className="flex justify-between">
                    <Avatar className="h-[72px] w-[72px] fit-contain rounded-none">
                        <AvatarImage src={props.companyLogo} alt="@shadcn" />
                        <AvatarFallback>MD</AvatarFallback>
                    </Avatar>
                    <div>
                        <FaRegBookmark size={20} />
                    </div>
                </div>
                <div>
                    <p className="text-base font-bold text-gray-700">{props.jobTitle}</p>
                    <p className="text-sm font-semibold text-gray-600">{props.companyName}</p>
                    <p className="text-sm font-medium text-gray-600">{props.country}</p>
                    
                </div>
                <div className="mt-3">
                    <p className="text-xs text-gray-600">{props.mutualConnectionCount} connection work here</p>
                </div>
                <div>
                    <p className="text-xs text-gray-600">{props.postedOn} ago</p>
                </div>

            </div>


        </>
    )
}