"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Separator } from "@/components/ui/separator";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import Image from "next/image";
import Certificates from "./Certificates";
const skillTags = [
    {
      tag: "Java",
    },
    {
      tag: "Python",
    },
    {
      tag: "Frontend Development",
    },
    {
      tag: "Backend Development",
    },
    {
      tag: "MongoDB",
    },
    {
      tag: "Agile Methodologies",
    },
    {
      tag: "RESTful APIs",
    },
    {
      tag: "Git",
    },
    {
      tag: "SQL",
    },
    {
      tag: "UI/UX",
    },
    {
      tag: "AWS",
    },
    {
      tag: "Power BI",
    },
    {
      tag: "Content Writing",
    },
  ];

export default function Skills() {
  const [skills, setSkills] = useState(false);
 

  return (
    <>
      <Card className="bg-[#F9F9F9] p-[25px] border-0 rounded-[10px]">
        <div className="flex flex-col gap-[25px]">
          <div className={`flex justify-between ${skills && "hidden"}`}>
            <div className={``}>
              <p className="font-medium text-base">Skills</p>
              <p className="text-[#868686] text-xs">
                This will assist startups in pinpointing your strengths.
              </p>
            </div>
            <Button
              className="bg-white text-xs h-[31px] text-[#0472F4] border-[0.3px] border-[#0472F4] rounded-[5px]"
              onClick={() => setSkills(true)}
            >
              {" "}
              + Add
            </Button>
          </div>

          {skills && (
            <>
              <div>
                <div className={``}>
                  <p className="font-medium text-base">Skills</p>
                  <p className="text-[#868686] text-xs">
                    This will assist startups in pinpointing your strengths.
                  </p>
                </div>
                <div className="mt-[30px]">
                  <div className="grid w-full max-w-full items-center gap-1.5">
                    <Label htmlFor="name" className="text-sm">
                      Skills
                    </Label>
                    <div className="flex border px-[15px] py-[9px] rounded-[5px] bg-white gap-[15px]">
                      <Image
                        src={"/images/search.svg"}
                        alt="search"
                        width={20}
                        height={20}
                        color="#000000"
                      />
                      <Input
                        className="text-xs text-[#868686] outline-none border-none p-0 h-auto"
                        type="search"
                        id="name"
                        placeholder="e.g. Python, react, etc."
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-[5px] mt-[23px]">
                    {skillTags?.map(( el, index) => {
                      return (
                          <div className="bg-white flex gap-[11px] items-center px-[10px] py-[6px] border-[0.3px] rounded-[5px] border-[#707070]" key={index}>
                            <p className="text-xs">{el?.tag}</p>
                            <Image src={'/images/x (1).png'} alt="close" width={11} height={11} />
                          </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </>
          )}
          <Separator />
          <Certificates />
          <Separator />
          <div className="flex justify-between">
            <div>
              <p className="font-medium text-base">Awards</p>
              <p className="text-[#868686] text-xs">
                This section highlights any accolades or recognitions received
                by the individual.
              </p>
            </div>
            <Button className="bg-white text-xs h-[31px] text-[#0472F4] border-[0.3px] border-[#0472F4] rounded-[5px]">
              {" "}
              + Add
            </Button>
          </div>
          <Separator />
          <div className="flex justify-between">
            <div>
              <p className="font-medium text-base">Voluntary Services</p>
              <p className="text-[#868686] text-xs">
                This section outlines any unpaid work or community service
                initiatives undertaken by the individual.
              </p>
            </div>
            <Button className="bg-white text-xs h-[31px] text-[#0472F4] border-[0.3px] border-[#0472F4] rounded-[5px]">
              {" "}
              + Add
            </Button>
          </div>
        </div>
      </Card>
    </>
  );
}
