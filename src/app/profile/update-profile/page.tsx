import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/RoundedTab";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import ProfileIntroduction from "@/components/update-profile/ProfileIntroduction";
import ProfileWorkExperience from "@/components/update-profile/ProfileWorkExperience";

export default function UpdateProfile() {
  return (
    <>
      <main>
        <div className="my-[30px]">
          <div className="w-full max-w-full min-w-full">
            <div className="flex gap-5">
              <div className="w-[100%] max-w-[100%]">
                <div className="font-semibold text-2xl">
                  Update your profile.
                </div>
                <div className="text-xs text-[#212529] mt-[10px]">
                  Please revise the information in your profile.
                </div>
                <div className="mt-[30px] mb-5 flex items-center justify-between">
                  <Tabs defaultValue="account" className="w-[240px]">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="profile" className="text-xs">
                        Profile
                      </TabsTrigger>
                      <TabsTrigger value="preferences" className="text-xs">
                        Preferences
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="profile">
                        
                    </TabsContent>
                    <TabsContent value="password"></TabsContent>
                  </Tabs>

                  <div>
                    <Button className="text-[10px] rounded-[5px] h-[39px] shadow-sm px-[20px] py-[10px] bg-white border text-black">
                      Update
                    </Button>
                  </div>
                </div>
              </div>
              <div className="w-[512px] max-w-[512px] min-w-[512px] bg-[#F9F9F9] rounded-[10px] px-5 py-[15px] h-[120px]">
                <div>
                  <p className="font-medium text-base">Complete your Profile</p>
                  <p className="text-[#868686] text-xs mt-3 mb-[22px]">
                    By completing all the details you have a higher chance of
                    being seen by recruiters.
                  </p>
                  <div className="flex items-center gap-[10px]">
                    <p className="text-xs font-medium">33%</p>
                    <Progress value={33} className="w-[255px] h-[7px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="flex mt-5 gap-5">
            <div className="w-[100%] max-w-[100%] flex flex-col gap-[15px]">
              <div className=" border border-dashed rounded-[10px] flex flex-col items-center justify-center py-[35px]">
                <Image
                  src={"/images/Group 21.png"}
                  alt="upload"
                  width={59}
                  height={68}
                />
                <p className="text-sm mt-[15px] mb-[10px]">
                  Click to Upload or drag and drop
                </p>
                <p className="text-xs">Maximum file Size 2 MB.</p>
              </div>
              <div className="pl-5 pr-[10px] pb-5 pt-[10px] bg-[#DCEFFD] rounded-[5px]">
                <div className="flex items-end justify-end">
                  <Image
                    src={"/images/x (1).png"}
                    alt="close"
                    height={16}
                    width={16}
                  />
                </div>
                <div className="flex gap-[11px]">
                  <div>
                    <Image
                      src={"/images/file-invoice.png"}
                      alt="file"
                      width={18}
                      height={22}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Resume.pdf</p>
                    <p className="text-[10px]">2 MB</p>
                    <div className="mt-[15px]">
                      <Progress value={33} className="w-[663px] h-[5px]" />
                    </div>
                  </div>
                </div>
              </div>
              <ProfileIntroduction />
              <ProfileWorkExperience />
              <Card className="bg-[#F9F9F9] p-[25px] border-0 rounded-[10px]">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium text-base">Education</p>
                    <p className="text-[#868686] text-xs">
                    Which educational institutions have you attended?
                    </p>
                  </div>
                  <Button className="bg-white text-xs h-[31px] text-[#0472F4] border-[0.3px] border-[#0472F4] rounded-[5px]"> + Add</Button>
                </div>
              </Card>
              <Card className="bg-[#F9F9F9] p-[25px] border-0 rounded-[10px]">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium text-base">Skills</p>
                    <p className="text-[#868686] text-xs">
                    Skills
                    </p>
                  </div>
                  <Button className="bg-white text-xs h-[31px] text-[#0472F4] border-[0.3px] border-[#0472F4] rounded-[5px]"> + Add</Button>
                </div>
              </Card>
            </div>
            <div className="w-[512px] max-w-[512px] min-w-[512px]"></div>
          </div>
        </div>
      </main>
    </>
  );
}
