import { cn } from "@/lib/utils";
import { Card } from "../ui/card"
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Slider } from "../ui/slider";
import { Select, SelectContent, SelectGroup, SelectTrigger, SelectValue } from "../ui/select";
import { SliderProps } from "@radix-ui/react-slider";



const Sidebar = ({ className, ...props }: SliderProps) => {
  return (
    <>
     <Card className="!p-0">
          <div className="flex items-center justify-between py-4  px-5">
            <p className="text-base font-medium">Filter</p>
            <p className="text-[#E5042D] text-sm">Clear all</p>
          </div>
          <hr className=" border-t-[0.5px]  border-gray-200 w-full " />
          <div className=" py-4 px-5 space-y-4">
            <div className="space-y-2">
              <p className="text-sm">Skills</p>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue
                    className="!placeholder:text-[#868686]"
                    placeholder="Skills..."
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {/* <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem> */}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <hr className=" border-t-[0.5px]  border-gray-200 w-full " />
            <div className="space-y-2 pt-2">
              <p className="text-sm">Job type</p>
              <div className="grid grid-cols-2 gap-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="Full-time" />
                  <label
                    htmlFor="Full-time"
                    className="text-xs text-[#868686] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Full-time
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="Internship" />
                  <label
                    htmlFor="Internship"
                    className="text-xs text-[#868686] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Internship
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="Freelance" />
                  <label
                    htmlFor="Freelance"
                    className="text-xs text-[#868686] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Freelance
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="Volunteer" />
                  <label
                    htmlFor="Volunteer"
                    className="text-xs text-[#868686] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Volunteer
                  </label>
                </div>
              </div>
            </div>
            <hr className=" border-t-[0.5px]  border-gray-200 w-full " />
            <div className="space-y-5 pt-2">
              <p className="text-sm">Salary Range</p>
              <Slider
                defaultValue={[25, 75]}
                max={100}
                step={1}
                className={cn("w-[100%]", className)}
                {...props}
              />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <p className="text-xs">$</p>
                  <Input
                    className="h-[20px] w-[50px] text-[10px]"
                    type="email"
                    placeholder="1200"
                  />
                </div>
                <div className="flex items-center gap-x-2">
                  <p className="text-xs">$</p>
                  <Input
                    className="h-[20px] w-[50px] text-[10px]"
                    type="email"
                    placeholder="2200"
                  />
                </div>
              </div>
            </div>
            <hr className=" border-t-[0.5px]  border-gray-200 w-full " />
            <div className="space-y-5 pt-2">
              <p className="text-sm">Experience</p>
              <Slider
                defaultValue={[25, 75]}
                max={100}
                step={1}
                className={cn("w-[100%]", className)}
                {...props}
              />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <p className="text-xs">Yrs</p>
                  <Input
                    className="h-[20px] w-[50px] text-[10px]"
                    type="email"
                    placeholder="01"
                  />
                </div>
                <div className="flex items-center gap-x-2">
                  <p className="text-xs">Yrs</p>
                  <Input
                    className="h-[20px] w-[50px] text-[10px]"
                    type="email"
                    placeholder="10"
                  />
                </div>
              </div>
            </div>
            <hr className=" border-t-[0.5px]  border-gray-200 w-full " />
            <div className="space-y-2 pt-2">
              <p className="text-sm">Date Posted</p>

              <RadioGroup
                defaultValue="comfortable "
                className="grid grid-cols-2 gap-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="default" id="r1" />
                  <Label className="text-xs text-[#868686]" htmlFor="r1">
                    Past 3 days
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="comfortable" id="r2" />
                  <Label className="text-xs text-[#868686]" htmlFor="r2">
                    Past week
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="compact" id="r3" />
                  <Label className="text-xs text-[#868686]" htmlFor="r3">
                    Past Month
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="all" id="r4" />
                  <Label className="text-xs text-[#868686]" htmlFor="r4">
                    All
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <hr className=" border-t-[0.5px]  border-gray-200 w-full " />
            <div className="space-y-2 pt-2">
              <p className="text-sm">Commute</p>
              <div className="grid grid-cols-2 gap-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="Remote" />
                  <label
                    htmlFor="Remote"
                    className="text-xs text-[#868686] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Remote
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="Hybrid" />
                  <label
                    htmlFor="Hybrid"
                    className="text-xs text-[#868686] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Hybrid
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id=" On-Site" />
                  <label
                    htmlFor=" On-Site"
                    className="text-xs text-[#868686] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    On-Site
                  </label>
                </div>
              </div>
            </div>

            <hr className=" border-t-[0.5px]  border-gray-200 w-full " />
            <div className="space-y-2 pt-2">
              <p className="text-sm">Distance</p>
              <div className="grid grid-cols-2 gap-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="5" />
                  <label
                    htmlFor="5"
                    className="text-xs text-[#868686] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    5 Miles
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="10" />
                  <label
                    htmlFor="10"
                    className="text-xs text-[#868686] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    10 Miles
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="15" />
                  <label
                    htmlFor="15"
                    className="text-xs text-[#868686] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    15 Miles
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="25" />
                  <label
                    htmlFor="25"
                    className="text-xs text-[#868686] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    25 Miles
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="50" />
                  <label
                    htmlFor="50"
                    className="text-xs text-[#868686] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    50 Miles
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="100" />
                  <label
                    htmlFor="100"
                    className="text-xs text-[#868686] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    100 Miles
                  </label>
                </div>
              </div>
            </div>
          </div>
        </Card>
    </>
  );
}

export default Sidebar