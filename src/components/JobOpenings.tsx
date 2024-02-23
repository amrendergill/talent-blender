import Image from "next/image"
export default function JobOpeneings(props:any) {
    return (
        <>
            
                <div className="flex items-center gap-2 w-full">
                    <div>
                        <Image src={props.companyLogo} alt="company-logo" objectFit="contain" width={50} height={50} priority />
                    </div>
                    <div className="flex flex-col">
                        <p className="text-sm font-bold">{props.jobPost}</p>
                        <p className="text-sm text-gray-600">{props.jobPlace}</p>
                    </div>
                </div>


            
        </>
    )
}