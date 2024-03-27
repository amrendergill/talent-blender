import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/RoundedTab";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import Introduction from "@/components/update-profile/Introduction";
import WorkExperience from "@/components/update-profile/WorkExperience";
import Education from "@/components/update-profile/Education";
import Skills from "@/components/update-profile/Skills";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import UpdateProfileRightBar from "@/components/UpdateProfileRightBar";


const profileStatus: any = [
  {
    count: 0,
    status: 'Connections'
  },
  {
    count: 1,
    status: 'Followers'
  },
  {
    count: 2,
    status: 'Following'
  },
]


export default function UpdateProfile() {
  return (
    <>
      <main>
        <div className="my-[30px]">
          <div className='flex border-b pb-5 gap-5'>
            <div className="w-[100%] max-w-[100%]">
              <div className="font-semibold text-2xl">
                Update your profile.
              </div>
              <div className="text-xs text-[#212529] mt-[10px]">
                Please revise the information in your profile.
              </div>
              <div className="flex justify-between  items-end">
                <div>
                  <Tabs defaultValue="profile" className="mt-[30px]">
                    <TabsList className="grid w-[240px] grid-cols-2">
                      <TabsTrigger value="profile" className="text-xs">
                        Profile
                      </TabsTrigger>
                      <TabsTrigger value="preferences" className="text-xs">
                        Preferences
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
                <div>
                  <Button
                    // onClick={handleSubmit}
                    className={` text-sm font-regular border-[0.2px] px-[20px] py-[10px] rounded-[5px] bg-white border-[#bed4ee] shadow-[0px_3px_6px_#0000000D]`}
                    variant={"outline"}
                  >
                    Update
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-[#F9F9F9] w-[512px] max-w-[512px] min-w-[512px]   rounded-[10px] px-5 py-[15px] ">
              <p className="font-medium text-base">Complete your Profile</p>
              <p className="text-[#868686] text-xs mt-3 mb-[22px]">
                By completing all the details you have a higher chance of
                being seen by recruiters.
              </p>
              <div className="flex items-center gap-[10px]">
                <p className="text-xs font-medium">75%</p>
                <Progress value={75} className="w-[255px] h-[7px]" />
              </div>
            </div>
          </div>
          <div className='flex  gap-5'>
            <div className="w-[100%] max-w-[100%]">
              <div className="mt-[30px] mb-5 ">
                <Tabs defaultValue="profile" className="">
                  <TabsContent value="profile">
                    <div className="flex">
                      <div className="w-[100%] max-w-[100%] flex flex-col gap-[15px]">
                        <div className="grid w-full relative max-w-full items-center gap-1.5">
                          <Label htmlFor="resume" className="text-sm">
                            Resume
                          </Label>
                          <div className="border-[0.3px] bg-[#F9F9F9] absolute top-8 right-14 w-[41px]  rounded-[5px] flex p-[6px] justify-center">
                            <img src='/images/eye (3).png' className="h-[12px] w-[17px]" alt='view' />
                          </div>
                          <div className="border-[0.3px] bg-[#F9F9F9] absolute top-8 right-[10px] w-[41px]  rounded-[5px] flex p-[4px] justify-center">
                            <img src='/images/trash (2).png' className="h-[16px] w-[13px]" alt='delete' />
                          </div>
                          <Input
                            className="text-xs py-[18px] pl-[20px] text-[#868686]"
                            type="text"
                            id="resume"
                            placeholder="Uploaded file (resume.pdf)"
                          />
                        </div>
                        <Introduction />
                        <WorkExperience />
                        <Education />
                        <Skills />
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="preferences">
                  <Education />
                  </TabsContent>
                </Tabs>
              </div>
            </div>
            <div className="w-[512px] max-w-[512px] min-w-[512px]   rounded-[10px] ">
              <UpdateProfileRightBar />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
