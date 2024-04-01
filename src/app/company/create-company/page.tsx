"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

export default function CreateJob() {
  return (
    <>
      <main className="bg-white my-4">
        <div className="flex gap-5 w-full ">
          <div className="space-y-4 w-full">
            <h2 className="font-semibold text-2xl text-[#000000] ">
              Create a Company
            </h2>
            <p className="text-xs font-regular text-[#212529] ">
              Please revise the information in your profile.
            </p>
            <div className="flex gap-x-3 pt-3">
              <Card className="w-full bg-[#F9F9F9] rounded-[10px]  border-none">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <p className="text-base font-medium"> About</p>
                    <p className="text-xs text-[#868686]">
                      Introduce yourself so startups can get to know you.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium"> Name *</p>
                    <Input
                      type="text"
                      id="email"
                      className="text-xs font-regular text-[#868686]"
                      placeholder="Add your organization’s name"
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Website *</p>
                    <Input
                      type="text"
                      id="email"
                      className="text-xs font-regular text-[#868686]"
                      placeholder="http:// or www."
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Location *</p>
                    <div className="flex items-center gap-x-1 my-3  text-sm px-3 bg-white border-[0.5px] border-gray-200 rounded-[5px]">
                      <Image
                        src={"/images/search.svg"}
                        alt="Logo"
                        width={15}
                        height={15}
                        priority
                        className="z-50 object-fit "
                      />
                      <Input
                        type="text"
                        placeholder="Delhi, India"
                        className="  text-xs !outline-none !ring-0 bg-inherit border-none  "
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Industry *</p>
                    <Input
                      type="text"
                      id="email"
                      className="text-xs font-regular text-[#868686]"
                      placeholder="ex : Financial"
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Company Size *</p>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup></SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Company type *</p>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue
                          className="!placeholder:text-[#868686]"
                          placeholder="Select"
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup></SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Specialities</p>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue
                          className="placeholder-text-[#868686]"
                          placeholder="ex : Social Media Marketing"
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup></SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">About</p>
                    <Textarea
                      autoComplete="off"
                      name="message"
                      placeholder="As a tech entrepreneur with multiple ventures under Appsierra Group, Arpit is passionate about creating innovative products and providing services that solve real-world problems and add value to customers. His core competencies include market penetration, business strategy, product engineering, and digital marketing. He is known for identifying, developing, and implementing business strategies that drive growth and customer satisfaction."
                      className=" w-full text-xs border rounded-[5px] flex items-center justify-center pl-4 pr-9 py-2 overflow-hidden resize-none h-[122px] bg-background !min-h-[10px]"
                    ></Textarea>
                  </div>
                  <hr className="border-t-[0.5px]  border-gray-200 w-full " />
                  <div className="space-y-2 flex items-center gap-x-2">
                    <Checkbox id="Remote" />
                    <div>
                      <label
                        htmlFor="Remote"
                        className="text-xs text-[#868686] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I confirm that I am an authorized representative of this
                        organization and possess the authority to act on its
                        behalf in establishing and overseeing this page. The
                        organization and I consent to the supplementary terms
                        for Pages.
                      </label>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <p></p>
                    <div className="flex items-center gap-x-2">
                      <Button className="bg-transparent text-sm font-normal text-black border border-gray-300">
                        Cancel
                      </Button>
                      <Button className="bg-[#0472F4] text-sm font-normal text-white">
                        Create Company
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
              <aside className="w-[900px]">
                <Card className="w-full bg-[#F9F9F9] rounded-[10px] space-y-6 border-none">
                  <div className="space-y-2">
                    <p className="text-base font-medium">
                      Invite your team members
                    </p>
                    <p className="text-xs text-[#868686]">
                      Introduce yourself so startups can get to know you.
                    </p>
                  </div>
                  <Input
                    type="text"
                    id="email"
                    className="text-xs font-regular text-[#868686]"
                    placeholder="Example@member.com"
                  />
                  <div className="flex justify-between">
                    <p></p>
                    <div className="flex items-center gap-x-2">
                      <Button className="bg-transparent text-sm font-normal text-black border border-gray-300">
                        + Add
                      </Button>
                      <Button className="bg-[#0472F4] text-sm font-normal text-white">
                        Send Invite
                      </Button>
                    </div>
                  </div>
                </Card>
              </aside>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
