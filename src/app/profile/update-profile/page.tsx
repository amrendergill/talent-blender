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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import UpdateProfileRightBar from "@/components/UpdateProfileRightBar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

export default function UpdateProfile() {
  return (
    <>
      <main>
      <Tabs defaultValue="profile" className="">
        <div className="my-[30px]">
          <div className='flex border-b pb-5 gap-5'>
            <div className="w-[100%] max-w-[100%]">
              <div className="font-semibold text-[#000000] text-2xl">
                Update your profile.
              </div>
              <div className="text-xs font-normal text-[#212529] mt-[10px]">
                Please revise the information in your profile.
              </div>
              <div className="flex justify-between  items-end">
                <div>
                  
                    <TabsList className="grid mt-[30px] bg-[#F6F6F8] w-[240px] grid-cols-2">
                      <TabsTrigger value="profile" className="text-[#BEBEBE] text-xs">
                        Profile
                      </TabsTrigger>
                      <TabsTrigger value="preferences" className="text-[#BEBEBE] text-xs">
                        Preferences
                      </TabsTrigger>
                    </TabsList>
             
                </div>
                <div>
                  <Button
                    // onClick={handleSubmit}
                    className={` text-sm font-normal text-[#000000] border-[0.2px] px-[20px] py-[10px] rounded-[5px] bg-white border-[#bed4ee] shadow-[0px_3px_6px_#0000000D]`}
                    variant={"outline"}
                  >
                    Update
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-[#F9F9F9] w-[512px] max-w-[512px] min-w-[512px]   rounded-[10px] px-5 py-[15px] ">
              <p className="font-medium text-[#000000] text-base">Complete your Profile</p>
              <p className="text-[#868686] font-normal text-xs mt-3 mb-[22px]">
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
                  <TabsContent value="profile">
                    <div className="flex">
                      <div className="w-[100%] max-w-[100%] flex flex-col gap-[15px]">
                        <div className="grid w-full relative max-w-full items-center gap-[10px]">
                          <Label htmlFor="resume" className="text-sm font-medium text-[#212529]">
                            Resume
                          </Label>
                          <div className="border-[0.3px] bg-[#F9F9F9] absolute top-[38px] right-14 w-[41px]  rounded-[5px] flex p-[12px] justify-center">
                            <img src='/images/eye (3).png' className="h-[12px] w-[16px]" alt='view' />
                          </div>
                          <div className="border-[0.3px] bg-[#F9F9F9] absolute top-[38px] right-[10px] w-[41px]  rounded-[5px] flex p-[10px] justify-center">
                            <img src='/images/trash (2).png' className="h-[16px] w-[13px]" alt='delete' />
                          </div>
                          <Input
                            className="text-xs placeholder:text-[#000000] h-[55px]  font-normal py-[18px] pl-[20px] text-[#000000]"
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
                    <Card className="bg-[#F9F9F9] border-0 ">
                      <CardHeader>
                        <CardTitle className="text-base font-medium text-[#000000]">
                        At what stage are you currently in your job search?
                        </CardTitle>
                        <CardDescription className="text-xs font-regular text-[#868686]">
                        Your current employer will remain unaware of your job search, regardless of your decision.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="">           
                       <Select>
                          <SelectTrigger className="w-full text-[#259427] mt-[15px] text-xs font-regular">
                            <SelectValue placeholder="Prepared for interviews" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="inr">INR</SelectItem>
                              <SelectItem value="usd">USD</SelectItem>
                              <SelectItem value="eur">EUR</SelectItem>
                              <SelectItem value="jyp">JYP</SelectItem>
                              <SelectItem value="gbp">GBP</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>                        
                      </CardContent>
                    </Card>
                    <Card className="bg-[#F9F9F9] mt-[10px] border-0 ">
                      <CardHeader>
                        <CardTitle className="text-base font-medium text-[#000000]">
                        US work authorization 
                        </CardTitle>
                        <CardDescription className="text-xs font-regular text-[#868686]">
                        Your current employer will remain unaware of your job search, regardless of your decision.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="">  
                                  
                          <p className="text-sm font-medium text-[#212529]">Are you currently or will you in the future require sponsorship for a US employment visa,<br className="lg:block hidden"/> such as an H-1B visa?</p>  
                          <div className="mt-4">
                          <RadioGroup
                            defaultValue="option-one"
                            className="flex items-center border-[#0472F4] gap-10"
                          >
                            <div className="flex  items-center space-x-2">
                              <RadioGroupItem
                                value="option-one"
                                id="option-one"
                              />
                              <Label htmlFor="option-one">Yes</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem
                                value="option-two"
                                id="option-two"
                              />
                              <Label htmlFor="option-two">No</Label>
                            </div>
                          </RadioGroup>
                        </div>  
                        <div className="mt-[30px]">
                        <p className="text-sm font-medium text-[#212529]">Are you legally eligible to work in the United States?</p>  
                          <div className="mt-4">
                          <RadioGroup
                            defaultValue="option-one"
                            className="flex items-center border-[#0472F4] gap-10"
                          >
                            <div className="flex  items-center space-x-2">
                              <RadioGroupItem
                                value="option-one"
                                id="option-one"
                              />
                              <Label htmlFor="option-one">Yes</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem
                                value="option-two"
                                id="option-two"
                              />
                              <Label htmlFor="option-two">No</Label>
                            </div>
                          </RadioGroup>
                        </div> 
                          </div>                  
                      </CardContent>
                    </Card>
                    <Card className="bg-[#F9F9F9] mt-[10px] border-0 ">
                      <CardHeader>
                        <CardTitle className="text-base font-medium text-[#000000]">
                        What kind of job are you seeking?
                        </CardTitle>
                        <CardDescription className="text-xs font-regular text-[#868686]">
                        This question seeks to understand the specific role or position the individual is interested in pursuing.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="">           
                        
                            <Select>
                          <SelectTrigger className="w-full text-[#000000] mt-[15px] text-xs font-regular">
                            <SelectValue placeholder="Full-time Employee" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="inr">INR</SelectItem>
                              <SelectItem value="usd">USD</SelectItem>
                              <SelectItem value="eur">EUR</SelectItem>
                              <SelectItem value="jyp">JYP</SelectItem>
                              <SelectItem value="gbp">GBP</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                         
                  
                        
                      </CardContent>
                    </Card>
                    <Card className="bg-[#F9F9F9] mt-[10px] border-0 ">
                      <CardHeader>
                        <CardTitle className="text-base font-medium text-[#000000]">
                        In which locations are you interested in working?
                        </CardTitle>
                        <CardDescription className="text-xs font-regular text-[#868686]">
                        This question aims to identify the geographic preferences of the individual regarding potential job opportunities.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="">   
                      <div className=" grid relative  w-full  gap-[10px]">
                         
                          <img src="/images/search.svg" className='h-[20px] w-[20px] absolute left-5 top-3' alt="skills" />
                          <Input
                            type="text"
                            id="Skills"
                            className="text-xs pl-[50px] font-normal text-[#868686]"
                            placeholder=""
                          />
                       
                        </div> 
                        <div className="flex mt-[20px] gap-[11px]">
                        <Checkbox
                            id="relocation"
                            className="border-[#c6c3c3]"
                          />
                          <p className="text-[#000000] text-xs font-normal">Open to remote work opportunities </p> 
                          </div>               
                            <Select>
                          <SelectTrigger className="w-full text-[#000000] mt-[15px] text-xs font-regular">
                            <SelectValue placeholder="On-site or remote" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="inr">INR</SelectItem>
                              <SelectItem value="usd">USD</SelectItem>
                              <SelectItem value="eur">EUR</SelectItem>
                              <SelectItem value="jyp">JYP</SelectItem>
                              <SelectItem value="gbp">GBP</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                         
                  
                        
                      </CardContent>
                    </Card>
                    <Card className="bg-[#F9F9F9] mt-[10px] border-0 ">
                      <CardHeader>
                        <CardTitle className="text-base font-medium text-[#000000]">
                        What salary range are you targeting?
                        </CardTitle>
                        <CardDescription className="text-xs font-regular text-[#868686]">
                        This question inquires about the salary range the individual is aiming for in their job search.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="">  
                      <div className="flex gap-[10px]">    
                      <Input
                            type="text"
                            id="location"
                            placeholder=""
                            className="mt-[10px] w-full pl-[50px] text-xs font-regular text-[#868686]"
                           
                          />
                                  <Select>
                                      <SelectTrigger className="mt-[10px]  w-[217px] font-xs font-regular text-[#000000] ">
                                        <SelectValue placeholder="Dollars ($)" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectGroup>
                                          <SelectItem value="inr">
                                            INR
                                          </SelectItem>
                                          <SelectItem value="usd">
                                            USD
                                          </SelectItem>
                                          <SelectItem value="eur">
                                            EUR
                                          </SelectItem>
                                          <SelectItem value="jyp">
                                            JYP
                                          </SelectItem>
                                          <SelectItem value="gbp">
                                            GBP
                                          </SelectItem>
                                        </SelectGroup>
                                      </SelectContent>
                                    </Select>
                          </div>     
                      </CardContent>
                    </Card>
                    <Card className="bg-[#F9F9F9] mt-[10px] border-0 ">
                      <CardHeader>
                        <CardTitle className="text-base font-medium text-[#000000]">
                        Are you interested in working at companies of these sizes?
                        </CardTitle>
                        <CardDescription className="text-xs font-regular text-[#868686]">
                        This question seeks to understand the individual’s preference regarding the size of companies they are willing to work for.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="">           
                        
                            <Select>
                          <SelectTrigger className="w-full text-[#000000] mt-[15px] text-xs font-regular">
                            <SelectValue placeholder="(1 - 10 employees)" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="inr">INR</SelectItem>
                              <SelectItem value="usd">USD</SelectItem>
                              <SelectItem value="eur">EUR</SelectItem>
                              <SelectItem value="jyp">JYP</SelectItem>
                              <SelectItem value="gbp">GBP</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>      
                      </CardContent>
                    </Card>
                  </TabsContent>
              </div>
            </div>
            <div className="w-[512px] max-w-[512px] min-w-[512px]   rounded-[10px] ">
              <UpdateProfileRightBar />
            </div>
          </div>
        </div>
        </Tabs>
      </main>
    </>
  );
}
