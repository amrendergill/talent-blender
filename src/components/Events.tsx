import { HiPlus } from "react-icons/hi";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "./ui/dialog";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";
import { FaCameraRetro } from "react-icons/fa";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";

export default function Events({ title }: any) {
  return (
    <>
      <div>
        <div className="flex items-center justify-between mt-5 ">
          <p className="text-sm  text-[#0a66c2] font-semibold">{title}</p>
          <Dialog>
            <DialogTrigger asChild>
              <div>
                <HiPlus color="#0a66c2" />
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] p-0 py-5 ">
              <DialogHeader className="px-5">
                <div className="">
                  <DialogTitle>Create an event</DialogTitle>
                </div>
              </DialogHeader>
              <div className="">
                <ScrollArea className="h-[700px]">
                  <div className="bg-[#eff1da] flex items-center flex-col justify-center py-32 ">
                    <div>
                      <FaCameraRetro size={40} />
                    </div>
                    <div className="font-bold">Upload a cover image</div>
                    <div className="text-sm text-gray-600">
                      Minimum width 480 pixels, 16.9 recomended
                    </div>
                  </div>
                  <div className="px-5 py-8">
                    <p className="text-sm">Event type</p>
                    <div className="mt-4">
                      <RadioGroup
                        defaultValue="option-one"
                        className="flex items-center gap-10"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="option-one" id="option-one" />
                          <Label htmlFor="option-one">Online</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="option-two" id="option-two" />
                          <Label htmlFor="option-two">In person</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="mt-7 flex flex-col gap-7">
                      <div className="grid w-full max-w-full items-center gap-1.5">
                        <Label htmlFor="currency">Event Format</Label>
                        <Select>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="linkedIn-audio-event">
                                LinkedIn Audio Event
                              </SelectItem>
                              <SelectItem value="linkedIn-live">
                                LinkedIn Live
                              </SelectItem>
                              <SelectItem value="External-event-link">
                                External event link
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid w-full max-w-full items-center gap-1.5">
                        <Label htmlFor="event-name">Event name</Label>
                        <Input type="text" id="event-name" placeholder="" />
                      </div>
                      <div className="grid w-full max-w-full items-center gap-1.5">
                        <Label htmlFor="currency">Timezone</Label>
                        <Select>
                          <SelectTrigger className="">
                            <SelectValue placeholder="Select a timezone" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>North America</SelectLabel>
                              <SelectItem value="est">
                                Eastern Standard Time (EST)
                              </SelectItem>
                              <SelectItem value="cst">
                                Central Standard Time (CST)
                              </SelectItem>
                              <SelectItem value="mst">
                                Mountain Standard Time (MST)
                              </SelectItem>
                              <SelectItem value="pst">
                                Pacific Standard Time (PST)
                              </SelectItem>
                              <SelectItem value="akst">
                                Alaska Standard Time (AKST)
                              </SelectItem>
                              <SelectItem value="hst">
                                Hawaii Standard Time (HST)
                              </SelectItem>
                            </SelectGroup>
                            <SelectGroup>
                              <SelectLabel>Europe & Africa</SelectLabel>
                              <SelectItem value="gmt">
                                Greenwich Mean Time (GMT)
                              </SelectItem>
                              <SelectItem value="cet">
                                Central European Time (CET)
                              </SelectItem>
                              <SelectItem value="eet">
                                Eastern European Time (EET)
                              </SelectItem>
                              <SelectItem value="west">
                                Western European Summer Time (WEST)
                              </SelectItem>
                              <SelectItem value="cat">
                                Central Africa Time (CAT)
                              </SelectItem>
                              <SelectItem value="eat">
                                East Africa Time (EAT)
                              </SelectItem>
                            </SelectGroup>
                            <SelectGroup>
                              <SelectLabel>Asia</SelectLabel>
                              <SelectItem value="msk">
                                Moscow Time (MSK)
                              </SelectItem>
                              <SelectItem value="ist">
                                India Standard Time (IST)
                              </SelectItem>
                              <SelectItem value="cst_china">
                                China Standard Time (CST)
                              </SelectItem>
                              <SelectItem value="jst">
                                Japan Standard Time (JST)
                              </SelectItem>
                              <SelectItem value="kst">
                                Korea Standard Time (KST)
                              </SelectItem>
                              <SelectItem value="ist_indonesia">
                                Indonesia Central Standard Time (WITA)
                              </SelectItem>
                            </SelectGroup>
                            <SelectGroup>
                              <SelectLabel>Australia & Pacific</SelectLabel>
                              <SelectItem value="awst">
                                Australian Western Standard Time (AWST)
                              </SelectItem>
                              <SelectItem value="acst">
                                Australian Central Standard Time (ACST)
                              </SelectItem>
                              <SelectItem value="aest">
                                Australian Eastern Standard Time (AEST)
                              </SelectItem>
                              <SelectItem value="nzst">
                                New Zealand Standard Time (NZST)
                              </SelectItem>
                              <SelectItem value="fjt">
                                Fiji Time (FJT)
                              </SelectItem>
                            </SelectGroup>
                            <SelectGroup>
                              <SelectLabel>South America</SelectLabel>
                              <SelectItem value="art">
                                Argentina Time (ART)
                              </SelectItem>
                              <SelectItem value="bot">
                                Bolivia Time (BOT)
                              </SelectItem>
                              <SelectItem value="brt">
                                Brasilia Time (BRT)
                              </SelectItem>
                              <SelectItem value="clt">
                                Chile Standard Time (CLT)
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="mt-7 flex gap-4">
                      <div className="grid w-full max-w-sm  items-center gap-1.5">
                        <Label htmlFor="startDate">Start Date</Label>
                        <Input type="date" id="startDate" placeholder="" />
                      </div>
                      <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="endDate">Start Time</Label>
                        <Input type="date" id="endDate" placeholder="" />
                      </div>
                    </div>
                    <div className="mt-7 flex gap-4">
                      <div className="grid w-full max-w-sm  items-center gap-1.5">
                        <Label htmlFor="startDate">End Date</Label>
                        <Input type="date" id="startDate" placeholder="" />
                      </div>
                      <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="endDate">End Time</Label>
                        <Input type="date" id="endDate" placeholder="" />
                      </div>
                    </div>
                    <div className="mt-7">
                    <div className="grid w-full gap-1.5">
                      <Label htmlFor="description">Description</Label>
                      <Textarea id="description" />
                    </div>
                    </div>
                  </div>
                </ScrollArea>
              </div>
              <DialogFooter className="border-t pt-6 pr-5">
                <div className="flex w-full justify-end">
                  <Button
                    type="submit"
                    className="bg-[#0a66c2] text-white text-xs "
                  >
                    Next
                  </Button>
                </div>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
}
