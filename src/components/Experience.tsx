import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function Experience (props:any) {
    return(

        <div className="flex gap-2">
            <div>
                <Avatar className={`h-[48px] w-[48px] rounded-none`}>
                    <AvatarImage src={props.companyLogo} alt="@shadcn" />
                    <AvatarFallback>MD</AvatarFallback>
                </Avatar>
            </div>
            <div className="flex flex-col">
                <p className="text-base font-semibold text-gray-700">{props.companyName}</p>
                <div className="flex items-center gap-1">
                <p className="text-sm text-gray-600">{props.jobType}</p>
                <p>.</p>
                <p className="text-sm text-gray-600">{props.duration}</p>
                </div>
                <p className="text-sm text-gray-600">{props.place}</p>
            </div>
        </div>
    )
    
    
}