import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import Image from "next/image";

export default function Introduction() {
  return (
    <>
      <Card className="bg-[#F9F9F9] p-[25px] rounded-[10px] border-0">
        <div>
          <p className="font-medium text-base">Introduction</p>
          <p className="text-xs text-[#868686]">
            Introduce yourself so startups can get to know you.
          </p>

          <div className="mt-[30px] flex flex-col gap-[51px]">
            <div className="flex justify-between gap-[31px]">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="name" className="text-sm">
                  Name
                </Label>
                <Input
                  className="text-xs text-[#868686]"
                  type="name"
                  id="name"
                  placeholder="Enter your Name"
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email" className="text-sm">
                  Email
                </Label>
                <Input
                  className="text-xs text-[#868686]"
                  type="email"
                  id="email"
                  placeholder="Enter your Email"
                />
              </div>
            </div>

            <div className="flex justify-between gap-[31px]">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="mobile" className="text-sm">
                  Mobile
                </Label>
                <Input
                  className="text-xs text-[#868686]"
                  type="tel"
                  id="mobile"
                  placeholder="Enter your Mobile Number"
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="dob" className="text-sm">
                  Date of Birth
                </Label>
                <Input
                  className="text-xs text-[#868686]"
                  type="dob"
                  id="email"
                  placeholder="Enter your Date of Birth"
                />
              </div>
            </div>
            <div>
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
            </div>
            <div>
              <div className="grid w-full max-w-full items-center gap-1.5">
                <div className="flex justify-between">
                  <Label htmlFor="mobile" className="flex items-end">Bio</Label>
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
          </div>
        </div>
      </Card>
    </>
  );
}
