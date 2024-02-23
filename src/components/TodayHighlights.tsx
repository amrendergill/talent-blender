import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card } from "./ui/card";

export default function TodayHighlights(props: any) {
    return (
        <>
            <Card className="px-3 py-4">
                <h2 className="font-bold text-gray-600">{props.highlightTopic}</h2>
                <div className="py-4 flex items-center gap-2">
                    <Avatar className="h-[56px] w-[56px]">
                        <AvatarImage src={props.coworkersProfilePic} alt="@shadcn" />
                        <AvatarFallback>MD</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                        <h2 className="font-bold text-gray-600">
                            {props.coworkersName} .
                        </h2>
                        <p className="text-sm text-gray-500">{props.bio}</p>
                    </div>
                </div>

            </Card>
        </>
    )
} 