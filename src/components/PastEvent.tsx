import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LiaShareSolid } from "react-icons/lia";


export default function PastEvent(props:any) {
    return (
        <>
            <div>
                <div className="flex flex-col justify-between">
                    <div>
                        <Image src={props.eventPoster} alt="poster" priority width={0}
                            height={0}
                            sizes="100%"
                            style={{ width: '100%', height: 'auto' }} />
                    </div>
                    <div className="p-3 flex flex-col justify-between">
                        <p className="text-sm font-semibold text-gray-600">
                            {props.eventDate}
                        </p>
                        <p className="font-bold text-sm text-gray-600 leading-10">{props.eventTopic}</p>
                        <p className="text-sm text-gray-600">{props.attendeesCount}</p>
                    </div>
                    <div className="w-full flex items-center gap-2 p-3">
                        <Button variant={'outline'} className="border-[#0a66c2] text-[#0a66c2] rounded-full w-full">View</Button>
                        <div className="rounded-full border-[#0a66c2] border p-2">
                            <LiaShareSolid size={20} color="#0a66c2" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}