import React from 'react'
import { Card } from './ui/card';
import Image from 'next/image';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import Link from 'next/link';

const OpenJobs = () => {
  return (
    <div className="w-full">
      <Card className="space-y-4 p-4 w-full shadow-card">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-x-3">
            <div className="space-y-1">
              <p className=" text-base font-semibold">UI/UX Designer</p>

              <p className="text-xs  text-[#868686]">NOIDA, UTTAR PRADESH</p>
            </div>
          </div>

          <Badge className="text-[10px] font-normal bg-[#F5F5F5] rounded-[13px] text-black">
            Posted 25 Days ago
          </Badge>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-1 ">
            <Badge className="bg-[#F2E8FE] text-[#8938E4] text-[10px] rounded-[5px]">
              Javascript
            </Badge>
            <Badge className="bg-[#F2E8FE] text-[#8938E4] text-[10px] rounded-[5px]">
              Javascript
            </Badge>
            <Badge className="bg-[#F2E8FE] text-[#8938E4] text-[10px] rounded-[5px]">
              Javascript
            </Badge>
            <Badge className="bg-[#F2E8FE] text-[#8938E4] text-[10px] rounded-[5px]">
              Javascript
            </Badge>
            <Badge className="bg-[#F2E8FE] text-[#8938E4] text-[10px] rounded-[5px]">
              Javascript
            </Badge>
            <Badge className="bg-[#F2E8FE] text-[#8938E4] text-[10px] rounded-[5px]">
              Javascript
            </Badge>
          </div>
          <Button className="text-xs h-[31px] px-5 border-[0.5px] border-[#BEBEBE] bg-white  text-black rounded-[5px] hover:text-[#0472F4]">
            Apply
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default OpenJobs