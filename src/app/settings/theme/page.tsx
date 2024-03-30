import {
  Card,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const page = () => {
  return (
    <Card className="bg-[#F9F9F9] border-0  rounded-[10px] space-y-3 ">
      <div className="mb-[80px] space-y-1">
        <p className="font-medium text-base text-[#000000]">Theme preferences</p>
        <p className="text-xs font-regular text-[#868686]">
          Customisation according to your preferences.
        </p>
      </div>
      <div className="border-b pb-[20px]">
        <p className="font-medium text-base text-[#000000]">Select Theme</p>
      </div>
      <div className="pt-[40px]">
        <RadioGroup
          defaultValue="option-one"
          className="flex relative items-center border-[#0472F4] gap-10"
        >

          <div className="flex flex-col gap-3 items-end">
            <div className={`${'option-one ' ? 'border-[#0472F4] bg-[#DCEFFD]' : 'border-[0.2px] bg-white'}  w-[430px] h-[332px] rounded-[10px]`}>Image 1</div>
            <div className="flex items-center space-x-2">

              <RadioGroupItem
                value="option-one"
                id="option-one"
              />
              <Label htmlFor="option-one">Light Mode</Label>
            </div>
          </div>
          <div className="flex flex-col gap-3 items-end">
            <div className={`border-[0.2px] bg-white w-[430px] h-[332px] rounded-[10px]`}>Image 2</div>
            <div className="flex items-center space-x-2">

              <RadioGroupItem
                value="option-two"
                id="option-two"
              />
              <Label htmlFor="option-two">Dark Mode</Label>
            </div>
          </div>
        </RadioGroup>
      </div>
    </Card>
  )
}

export default page