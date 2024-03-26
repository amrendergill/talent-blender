"use client"
import { useState } from "react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export default function VoluntaryServices () {
  const [awards, setAwards] = useState(false);

    return(
        <>
        <div className={`flex justify-between ${awards && "hidden"}`}>
        <div>
          <p className="font-medium text-base">Voluntary Services</p>
          <p className="text-[#868686] text-xs">
          This section outlines any unpaid work or community service initiatives undertaken by the individual.
          </p>
        </div>
        <Button
          className="bg-white text-xs h-[31px] text-[#0472F4] border-[0.3px] border-[#0472F4] rounded-[5px]"
          onClick={() => setAwards(true)}
        >
          {" "}
          + Add
        </Button>
      </div>
      {awards && (
        <>
          <div>
            <div>
              <p className="font-medium text-base">Voluntary Services</p>
              <p className="text-[#868686] text-xs">
              This section outlines any unpaid work or community service initiatives undertaken by the individual.
              </p>
            </div>
            <div className="mt-[30px] flex flex-col gap-[51px]">
            <div className="flex justify-between gap-[31px]">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="name" className="text-sm">
                  Name
                </Label>
                <Input
                  className="text-xs text-[#868686]"
                  type="text"
                  id="name"
                  placeholder="Enter Name"
                />
              </div>
              
            </div>
            <div className="flex justify-between gap-[31px]">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="startDate" className="text-sm">
                  Start Date
                </Label>
                <Input
                  className="text-xs text-[#868686]"
                  type="date"
                  id="startDate"
                  placeholder="Enter Organization"
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="endDate" className="text-sm">
                End Date
                </Label>
                <Input
                  className="text-xs text-[#868686]"
                  type="date"
                  id="endDate"
                  placeholder="Enter your Award Id"
                />
              </div>
            </div>
            <div className="grid w-full max-w-full items-center gap-1.5">
                <Label htmlFor="description" className="text-sm">
                 Description
                </Label>
                <Textarea
                  className="text-xs text-[#868686]"
                  id="description"
                  placeholder="Enter Description"
                />
              </div>
            </div>
          </div>
        </>
      )}
        </>
    )
}