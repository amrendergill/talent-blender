import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Card className="bg-[#F9F9F9] space-y-6">
        <div>
          <p className="font-medium text-base">Request a recommendation</p>
          <p className="text-xs text-[#868686] w-[60%]">
            Requesting a recommendation allows you to solicit positive feedback
            from your connections, which can enhance your professional
            credibility and reputation.
          </p>
        </div>
        <div>
          <p className="font-medium text-sm">Add people *</p>
          <div className="flex items-center gap-x-1 my-3  text-sm px-3  bg-white border-[0.5px] border-gray-200 rounded-[5px]">
            <Image
              src={"/images/search.svg"}
              alt="Logo"
              width={15}
              height={15}
              priority
              className="z-50 object-fit "
            />
            <Input
              type="email"
              placeholder="Enter email id or user name"
              className="  text-xs !outline-none !ring-0 bg-inherit border-none  "
            />
          </div>
          <Badge className=" text-sm font-medium  rounded-[20px] p-1 pr-4 bg-white text-black border-gray-200 space-x-2">
            <Image
              src={"/images/1698213510276@2x.png"}
              alt="Logo"
              width={33}
              height={33}
              priority
              className="z-50 object-fit rounded-full"
            />
            <p>Arpit Singhal</p>
            <p className="text[13px]">x</p>
          </Badge>
        </div>
        <div className="space-y-1">
          <p className="font-medium text-sm">Your Role *</p>
          <Select>
            <SelectTrigger className="w-full h-[47px] text-xs">
              <SelectValue placeholder="Select your role" />
            </SelectTrigger>
          </Select>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="font-medium text-sm">Add a customized note *</p>
            <Button
              className={`createJobStyle text-xs rounded-[5px]`}
              variant={"outline"}
            >
              <img src="/images/sparkles.svg" alt="Generate with AI" />
              Generate with AI
            </Button>
          </div>
          <Textarea
            autoComplete="off"
            name="message"
            placeholder="Add a note"
            className=" w-full border p-2 overflow-hidden resize-none bg-background h-[158px] !min-h-[10px] text-xs"
          ></Textarea>
        </div>
        <div className="flex justify-end items-center gap-x-2  ">
          <Button className="bg-[#F9F9F9] border-[0.3px] border-gray-300 text-black rounded-[5px]">
            Cancel
          </Button>
          <Button className="bg-[#0472F4]  text-white rounded-[5px]">
            Send
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default page;
