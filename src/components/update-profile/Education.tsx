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
import { Label } from "../ui/label";
import Image from "next/image";
import { Input } from "../ui/input";

export default function Education() {
  const [education, setEducation] = useState(false);
  return (
    <>
      <Card
        className={`bg-[#F9F9F9] p-[25px] border-0 rounded-[10px] ${
          education && "hidden"
        }`}
      >
        <div className="flex justify-between">
          <div>
            <p className="font-medium text-base">Education</p>
            <p className="text-[#868686] text-xs">
              Which educational institutions have you attended?
            </p>
          </div>
          <Button
            className="bg-white text-xs h-[31px] text-[#0472F4] border-[0.3px] border-[#0472F4] rounded-[5px]"
            onClick={() => setEducation(true)}
          >
            {" "}
            + Add
          </Button>
        </div>
      </Card>
      {education && (
        <>
          <Card
            className={`bg-[#F9F9F9] p-[25px] border-0 rounded-[10px] ${
              education && "block"
            }`}
          >
            <div>
              <p className="font-medium text-base">Education</p>
              <p className="text-[#868686] text-xs">
                Which educational institutions have you attended?
              </p>
            </div>
            <div className="flex flex-col gap-10 mt-[30px]">
              <div className="grid w-full max-w-full items-center gap-1.5">
                <Label htmlFor="name" className="text-sm">
                  College/University
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
                    placeholder=""
                  />
                </div>
              </div>
              <div className="grid w-full max-w-full items-center gap-1.5">
                <Label htmlFor="graduation" className="text-sm">
                  Graduation
                </Label>
                <Input
                  className="text-xs text-[#868686]"
                  type="text"
                  id="graduation"
                  placeholder="GPA"
                />
              </div>
              <div className="flex flex-col gap-[15px]">
              <div className="grid w-full max-w-full items-center gap-1.5">
                <Label htmlFor="role" className="text-sm">
                Academic degree and field of study
                </Label>
                <Select
                //   onValueChange={}
                //   defaultValue={}
                >
                  <SelectTrigger>
                    <SelectValue
                      placeholder="Degree Type"
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
              <div className="w-full max-w-full items-center">
                
                <Input
                  className="text-xs text-[#868686]"
                  type="text"
                  id="major"
                  placeholder="Major / Field of Study"
                />
              </div>

              </div>
              {/* <div className="grid w-full max-w-full items-center gap-1.5">
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
              </div> */}
              <div className="flex gap-[31px] items-center">
                <div className="grid w-full max-w-full items-center gap-1.5">
                  <Label htmlFor="gpa" className="text-sm">
                    Grade Point Average
                  </Label>
                  <Input
                    className="text-xs text-[#868686]"
                    type="text"
                    id="gpa"
                    placeholder="GPA"
                  />
                </div>
                <div className=" w-full max-w-full flex items-end mt-6">
                  {/* <Label htmlFor="role" className="text-sm">
                  </Label> */}
                  <Select
                  //   onValueChange={}
                  //   defaultValue={}
                  >
                    <SelectTrigger>
                      <SelectValue
                        placeholder=""
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
            </div>
          </Card>
        </>
      )}
    </>
  );
}
