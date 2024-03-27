"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "../ui/label";
import Image from "next/image";
import { Textarea } from "../ui/textarea";

export default function WorkExperience() {
  const [workExperience, setWorkExperience] = useState(false);
  return (
    <>
      <Card
        className={`bg-[#F9F9F9] p-[25px] border-0 rounded-[10px] ${workExperience && "hidden"
          }`}
      >
        <div className="flex justify-between">
          <div>
            <p className="font-medium text-base">Work Experience</p>
            <p className="text-[#868686] mt-[10px] text-xs">
              What previous roles have you occupied?
            </p>
          </div>
          <Button
            className="bg-white text-xs h-[31px] text-[#0472F4] border-[0.3px] border-[#0472F4] rounded-[5px]"
            onClick={() => setWorkExperience(true)}
          >
            {" "}
            + Add
          </Button>
        </div>
      </Card>
      {workExperience && (
        <>
          <Card
            className={`bg-[#F9F9F9] p-[25px] border-0 rounded-[10px] ${workExperience && "block"
              }`}
          >
            <div>
              <p className="font-medium text-base">Work Experience</p>
              <p className="text-[#868686] mt-[10px] text-xs">
                What previous roles have you occupied?
              </p>
            </div>
            <div className="flex flex-col gap-10 mt-[30px]">
              <div className="grid w-full max-w-full items-center gap-1.5">
                <Label htmlFor="role" className="text-sm">
                  Job Title
                </Label>
                <Select
                //   onValueChange={}
                //   defaultValue={}
                >
                  <SelectTrigger>
                    <SelectValue
                      placeholder="UI/UX Designer"
                      className="text-xs text-[#000000] font-normal"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="swe" className="text-xs text-[#868686]">
                      Software Engineer
                    </SelectItem>
                    <SelectItem
                      value="ui/ux"
                      className="text-xs text-[#868686]"
                    >
                      UI/UX Designer
                    </SelectItem>
                    <SelectItem value="ce" className="text-xs text-[#868686]">
                      Cloud Engineer
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid w-full max-w-full items-center gap-1.5">
                <div className="flex items-center justify-between">
                  <Label htmlFor="role" className="text-sm">
                    Company
                  </Label>
                  <div className="flex  gap-[11px]">
                    <Checkbox
                      id="relocation"
                      className="border-[#c6c3c3]"
                    />
                    <p className="text-[#000000] text-xs font-normal">Currently work here </p>
                  </div>
                </div>
                <Select
                //   onValueChange={}
                //   defaultValue={}
                >
                  <SelectTrigger>
                    <SelectValue
                      placeholder="Appsierra"
                      className="text-xs font-normal text-[#000000]"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="swe" className="text-xs text-[#868686]">
                      Software Engineer
                    </SelectItem>
                    <SelectItem
                      value="ui/ux"
                      className="text-xs text-[#868686]"
                    >
                      UI/UX Designer
                    </SelectItem>
                    <SelectItem value="ce" className="text-xs text-[#868686]">
                      Cloud Engineer
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid w-full max-w-full items-center gap-1.5">
                <Label htmlFor="role" className="text-sm font-medium text-[#212529]">
                City
                </Label>
                <Select
                //   onValueChange={}
                //   defaultValue={}
                >
                  <SelectTrigger>
                    <SelectValue
                      placeholder="Noida"
                      className="text-xs font-normal text-[#212529]"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="swe" className="text-xs text-[#868686]">
                      Software Engineer
                    </SelectItem>
                    <SelectItem
                      value="ui/ux"
                      className="text-xs text-[#868686]"
                    >
                      UI/UX Designer
                    </SelectItem>
                    <SelectItem value="ce" className="text-xs text-[#868686]">
                      Cloud Engineer
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid w-full max-w-full items-center gap-1.5">
                <Label htmlFor="role" className="text-sm">
                  Choose your main role
                </Label>
                <Select
                //   onValueChange={}
                //   defaultValue={}
                >
                  <SelectTrigger>
                    <SelectValue
                      placeholder="Select a role"
                      className="text-xs text-[#868686]"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="swe" className="text-xs text-[#868686]">
                      Software Engineer
                    </SelectItem>
                    <SelectItem
                      value="ui/ux"
                      className="text-xs text-[#868686]"
                    >
                      UI/UX Designer
                    </SelectItem>
                    <SelectItem value="ce" className="text-xs text-[#868686]">
                      Cloud Engineer
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex gap-[31px]">
                <div className="grid w-full max-w-full items-center gap-1.5">
                  <Label htmlFor="role" className="text-sm">
                    Choose your main role
                  </Label>
                  <Select
                  //   onValueChange={}
                  //   defaultValue={}
                  >
                    <SelectTrigger>
                      <SelectValue
                        placeholder="Select a role"
                        className="text-xs text-[#868686]"
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem
                        value="swe"
                        className="text-xs text-[#868686]"
                      >
                        Software Engineer
                      </SelectItem>
                      <SelectItem
                        value="ui/ux"
                        className="text-xs text-[#868686]"
                      >
                        UI/UX Designer
                      </SelectItem>
                      <SelectItem value="ce" className="text-xs text-[#868686]">
                        Cloud Engineer
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid w-full max-w-full items-center gap-1.5">
                  <Label htmlFor="role" className="text-sm">
                    Choose your main role
                  </Label>
                  <Select
                  //   onValueChange={}
                  //   defaultValue={}
                  >
                    <SelectTrigger>
                      <SelectValue
                        placeholder="Select a role"
                        className="text-xs text-[#868686]"
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem
                        value="swe"
                        className="text-xs text-[#868686]"
                      >
                        Software Engineer
                      </SelectItem>
                      <SelectItem
                        value="ui/ux"
                        className="text-xs text-[#868686]"
                      >
                        UI/UX Designer
                      </SelectItem>
                      <SelectItem value="ce" className="text-xs text-[#868686]">
                        Cloud Engineer
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid w-full max-w-full items-center gap-1.5">
                <div className="flex justify-between">
                  <Label htmlFor="mobile" className="flex items-end">Job Description</Label>
                  <button className="bg-gradient-to-r from-[#22C7FB] to-[#1A9EFC] text-white px-[15px] py-[10px] text-xs font-medium h-[31px] rounded-[5px] flex items-center justify-center ">
                    <div className="w-fit h-hit">
                      <Image
                        src={"/images/sparkles.svg"}
                        alt="sparkle"
                        width={25}
                        height={25}
                        priority
                        className=" w-[25px] h-[25px] "
                      />
                    </div>
                    Generate with AI
                  </button>
                </div>
                <Textarea />
              </div>
            </div>
            <div className="bg-[#DCEFFD] mt-[15px] p-[15px] flex place-items-center gap-[15px] rounded-[5px]">
              <Image
                src={"/svg/lightbulb-on.svg"}
                alt="tip"
                height={15}
                width={15}
              />
              <p className="text-[10px]">
                Expert Tip: Standard resumes include 2-5 bullet points outlining
                job descriptions, emphasizing achievements and skills.
              </p>
            </div>
          </Card>
        </>
      )}
    </>
  );
}
