import { Button } from "./ui/button";
import { Card } from "./ui/card";
import Image from "next/image";

export default function SimilarJobs() {
  return (
    <>
      <Card className="p-[15px]">
        <div className="flex justify-between">
          <div className="w-fit">
            <Image
              src={"/images/Facebook_f_logo_(2019).svg.png"}
              alt="logo"
              width={46}
              height={42}
            />
          </div>
          <p className="rounded-full bg-[#F5F5F5] text-[10px] px-[10px] py-1 w-fit h-fit">
            Posted 25 Days ago
          </p>
        </div>
        <div className="mt-[15px]">
          <p className="text-base font-semibold">Software Engineer - MLOps …</p>
          <p className="text-xs">Facebook</p>
          <div className="flex justify-between items-center">
            <p className="text-xs text-[#868686]">Noida, Uttar Pradesh</p>
            <Button className="text-[10px] rounded-[3px] h-6 shadow-sm px-[15px] py-[5px] bg-white border text-black">View Job</Button>
          </div>
        </div>
      </Card>
    </>
  );
}
