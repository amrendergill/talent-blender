import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function Education (props:any) {
    return(

        <div className="flex items-center gap-2">
            <div>
                <Avatar className={`h-[48px] w-[48px] rounded-none`}>
                    <AvatarImage src={props.avatar} alt="@shadcn" />
                    <AvatarFallback>MD</AvatarFallback>
                </Avatar>
            </div>
            <div className="flex flex-col">
                <p className="text-base font-semibold text-gray-700">{props.collegeName}</p>
                <p className="text-sm text-gray-600">{props.degreeName}</p>
                <p className="text-sm text-gray-600">{props.years}</p>
            </div>
        </div>
    )
    
    
}