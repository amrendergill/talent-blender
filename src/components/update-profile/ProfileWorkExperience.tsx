"use client"
import { useState } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

export default function ProfileWorkExperience() {
    const [workExperience, setWorkExperience] = useState(false)
  return (
    <>
      <Card className={`bg-[#F9F9F9] p-[25px] border-0 rounded-[10px] ${workExperience && "hidden"}`}>
        <div className="flex justify-between">
          <div>
            <p className="font-medium text-base">Work Experience</p>
            <p className="text-[#868686] text-xs">
              What previous roles have you occupied?
            </p>
          </div>
          <Button className="bg-white text-xs h-[31px] text-[#0472F4] border-[0.3px] border-[#0472F4] rounded-[5px]" onClick={()=>setWorkExperience(true)}>
            {" "}
            + Add
          </Button>
        </div>
      </Card>
      {
        workExperience && (
            <>

      <Card className={`bg-[#F9F9F9] p-[25px] border-0 rounded-[10px] ${workExperience && 'block'}`}>
          <div>
            <p className="font-medium text-base">Work Experience</p>
            <p className="text-[#868686] text-xs">
              What previous roles have you occupied?
            </p>
          </div>
          <div>
            
          </div>
         
      </Card>
            </>
        )
      }
    </>
  );
}
