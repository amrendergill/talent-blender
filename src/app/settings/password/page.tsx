

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="mt-4 flex justify-center items-center mb-64">
      <Card className="bg-[#F9F9F9] rounded-[10px] space-y-6 w-[490px]">
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <p className="font-medium text-base">Password</p>
            <p className="text-xs text-[#868686]">Update your password here.</p>
          </div>
        </div>
        <div className="grid w-full items-center gap-3">
          <div className="flex items-center gap-1">
            <Label className="text-sm" htmlFor="lastname">
              Current Password
            </Label>
            {/* <p className="text-red-600 font-bold">*</p> */}
          </div>
          <Input type="password" id="Current" className="w-full" />
          {/* <p className="text-red-500 text-sm">{errors.email}</p> */}
        </div>
        <div className="grid w-full items-center gap-3">
          <div className="flex items-center gap-1">
            <Label className="text-sm" htmlFor="lastname">
              New Password
            </Label>
            {/* <p className="text-red-600 font-bold">*</p> */}
          </div>
          <Input type="password" id="Current" className="w-full" />
          {/* <p className="text-red-500 text-sm">{errors.email}</p> */}
        </div>
        <div className="grid w-full items-center gap-3">
          <div className="flex items-center gap-1">
            <Label className="text-sm" htmlFor="lastname">
              Confirm New Password
            </Label>
            {/* <p className="text-red-600 font-bold">*</p> */}
          </div>
          <Input type="password" id="Current" className="w-full" />
          {/* <p className="text-red-500 text-sm">{errors.email}</p> */}
        </div>
        <div className="flex justify-center items-center w-full">
          <Button className="!text-sm">Update Password</Button>
        </div>
      </Card>
    </div>
  );
};

export default page;
