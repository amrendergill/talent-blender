"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function Certificates() {
  const [certificates, setCertificates] = useState(false);

  return (
    <>
      <div className={`flex justify-between ${certificates && "hidden"}`}>
        <div>
          <p className="font-medium text-base">Certificates</p>
          <p className="text-[#868686] text-xs">
            This section showcases the certifications and qualifications
            obtained by the individual.
          </p>
        </div>
        <Button
          className="bg-white text-xs h-[31px] text-[#0472F4] border-[0.3px] border-[#0472F4] rounded-[5px]"
          onClick={() => setCertificates(true)}
        >
          {" "}
          + Add
        </Button>
      </div>
      {certificates && (
        <>
          <div>
            <div>
              <p className="font-medium text-base">Certificates</p>
              <p className="text-[#868686] text-xs">
                This section showcases the certifications and qualifications
                obtained by the individual.
              </p>
            </div>
            <div className="mt-[30px] flex flex-col gap-[51px]">
            <div className="flex justify-between gap-[31px]">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="title" className="text-sm">
                  Title
                </Label>
                <Input
                  className="text-xs text-[#868686]"
                  type="text"
                  id="title"
                  placeholder="Enter Title"
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="date" className="text-sm">
                  Issue Date
                </Label>
                <Input
                  className="text-xs text-[#868686]"
                  type="date"
                  id="date"
                  placeholder=""
                />
              </div>
            </div>
            <div className="flex justify-between gap-[31px]">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="organization" className="text-sm">
                  Organization
                </Label>
                <Input
                  className="text-xs text-[#868686]"
                  type="text"
                  id="organization"
                  placeholder="Enter Organization"
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="id" className="text-sm">
                Certificate Id
                </Label>
                <Input
                  className="text-xs text-[#868686]"
                  type="email"
                  id="id"
                  placeholder="Enter your Certificate Id"
                />
              </div>
            </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
