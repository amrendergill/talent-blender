import Link from "next/link";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import Image from "next/image";


export default function JobsList ({src, name, company}:any) {
    return(
        <>
        <Card className="space-y-4 p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-x-3">
                      <Image
                        src={src}
                        alt="Logo"
                        width={61}
                        height={56}
                        priority
                        className="object-fit"
                      />
                      <div>
                        <p className="text-[#0472F4] text-base font-semibold">
                          {name}
                        </p>
                        <p className="text-xs">{company}</p>
                        <p className="text-xs mt-1 text-[#868686]">
                          NOIDA, UTTAR PRADESH
                        </p>
                      </div>
                    </div>

                    <Image
                      src={"/images/bookmark@2x.png"}
                      alt="Logo"
                      width={17}
                      height={17}
                      priority
                      className="object-fit mt-2"
                    />
                  </div>
                  <div className="flex items-center gap-x-1 ">
                    <Badge className="bg-[#F2E8FE] text-[#8938E4] text-[10px] rounded-[10px]">
                      Javascript
                    </Badge>
                    <Badge className="bg-[#F2E8FE] text-[#8938E4] text-[10px] rounded-[10px]">
                      Javascript
                    </Badge>
                    <Badge className="bg-[#F2E8FE] text-[#8938E4] text-[10px] rounded-[10px]">
                      Javascript
                    </Badge>
                    <Badge className="bg-[#F2E8FE] text-[#8938E4] text-[10px] rounded-[10px]">
                      Javascript
                    </Badge>
                    <Badge className="bg-[#F2E8FE] text-[#8938E4] text-[10px] rounded-[10px]">
                      Javascript
                    </Badge>
                    <Badge className="bg-[#F2E8FE] text-[#8938E4] text-[10px] rounded-[10px]">
                      Javascript
                    </Badge>
                  </div>
                  <hr className="border-t-[0.5px]  border-gray-200 w-full my-4"></hr>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-[#F5F5F5] text-black text-[10px] rounded-[10px]">
                      Posted 25 Days ago
                    </Badge>
                    <Link href={'/jobs/view-job'}>
                    <Button className="text-xs h-[31px] px-5 border-[0.5px] border-[#BEBEBE] bg-white  text-black rounded-[5px] hover:text-[#0472F4]">
                      View Job
                    </Button>
                    </Link>
                  </div>
                </Card>
        </>
    )
}