import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';
import React from 'react'

const page = () => {
  return (
    <div className="mt-4">
      <Card className="bg-[#F9F9F9] rounded-[10px] space-y-6">
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <p className="font-medium text-base">General</p>
            <p className="text-xs text-[#868686]">
              Update your photo and personal details here.
            </p>
          </div>
          <Button className="!text-sm">Save Changes</Button>
        </div>
        <div className="flex items-center gap-x-5 ">
          <Image
            src={"/images/blank-profile-picture-973460_960_720.webp"}
            alt={"upload profile"}
            height={59}
            width={59}
            className="rounded-full"
            priority
          />
          <Button className="bg-white border-[0.3px] border-gray-300 text-black text-xs  h-7">
            Change
          </Button>
        </div>
        <div className="flex items-center justify-between w-full  gap-x-4">
          <div className="grid w-full items-center gap-3 ">
            <div className="flex items-center gap-1">
              <Label className='text-sm' htmlFor="fullName">Full Name</Label>
              {/* <p className="text-red-600 font-bold">*</p> */}
            </div>
            <Input
              type="text"
              id="fullName"
              placeholder="Umang"
              className="w-full"
            />
            {/* <p className="text-red-500 text-sm">{errors.fullName}</p> */}
          </div>
          <div className="grid w-full items-center gap-3">
            <div className="flex items-center gap-1">
              <Label className='text-sm' htmlFor="lastname">Last Name</Label>
              {/* <p className="text-red-600 font-bold">*</p> */}
            </div>
            <Input
              type="text"
              id="lastname"
              placeholder="Sharma"
              className="w-full"
            />
            {/* <p className="text-red-500 text-sm">{errors.email}</p> */}
          </div>
        </div>
        <div className="flex items-center justify-between w-full  gap-x-4">
          <div className="grid w-full items-center gap-3 ">
            <div className="flex items-center gap-1">
              <Label className='text-sm' htmlFor="fullName">Email</Label>
              {/* <p className="text-red-600 font-bold">*</p> */}
            </div>
            <Input
              type="email"
              id="email"
              placeholder="umang.sharma@gigde.com"
              className="w-full"
            />
            {/* <p className="text-red-500 text-sm">{errors.fullName}</p> */}
          </div>
        </div>
        <div className="flex items-center justify-between w-full  gap-x-4">
          <div className="grid w-full items-center gap-3 ">
            <div className="flex items-center gap-1">
              <Label className='text-sm' htmlFor="fullName">User Name</Label>
              {/* <p className="text-red-600 font-bold">*</p> */}
            </div>
            <Input
              type="text"
              id="username"
              placeholder="Umang Sharma"
              className="w-full"
            />
            {/* <p className="text-red-500 text-sm">{errors.fullName}</p> */}
          </div>
        </div>

        <div className="flex items-center justify-between w-full  gap-x-4">
          <div className="grid w-full items-center gap-3 ">
            <div className="flex items-center gap-1 justify-between">
              <Label className='text-sm' htmlFor="fullName">Bio</Label>
              <Button
                className={`createJobStyle text-xs rounded-[5px]`}
                variant={"outline"}
              >
                <img src="/images/sparkles.svg" alt="Generate with AI" />
                Generate with AI
              </Button>
              {/* <p className="text-red-600 font-bold">*</p> */}
            </div>
            <Textarea
              autoComplete="off"
              name="message"
              className=" w-full border p-2 overflow-hidden resize-none bg-background h-[158px] !min-h-[10px] text-xs"
            ></Textarea>
            {/* <p className="text-red-500 text-sm">{errors.fullName}</p> */}
          </div>
        </div>
        <div className="flex items-center justify-between w-full  gap-x-4">
          <div className="grid w-full items-center gap-3 ">
            <div className="flex items-center gap-1">
              <Label className='text-sm' htmlFor="Timezone">Timezone</Label>
              {/* <p className="text-red-600 font-bold">*</p> */}
            </div>
            <Input type="text" id="Timezone" className="w-full" />
            {/* <p className="text-red-500 text-sm">{errors.fullName}</p> */}
          </div>
        </div>
      </Card>
    </div>
  );
}

export default page
