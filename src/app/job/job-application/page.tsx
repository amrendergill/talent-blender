import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/RoundedTab";
import Link from "next/link";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";



export default function JobApplication() {
  const jobData = [
    {
      jobId: "INV001",
      jobTitle: "Marketing Coordinator",
      candidateEmail: "samar@yopmail.com",
    },
    {
      jobId: "INV002",
      jobTitle: "Medical Assistant",
      candidateEmail: "samar@yopmail.com",
    },
    {
      jobId: "INV003",
      jobTitle: "Web Designer",
      candidateEmail: "samar@yopmail.com",
    },
    {
      jobId: "INV004",
      jobTitle: "Dog Trainer",
      candidateEmail: "samar@yopmail.com",
    },
  ];
  return (
    <>
      <main className="bg-white flex-col flex gap-5">
        <div className="p-5 mt-2">
          <h1 className="text-[24px] font-semibold">Applications</h1>
          <Tabs defaultValue="profile" className="">
            <div className="flex justify-between items-center border-b pb-[30px] my-[30px]">
              <TabsList className="grid  bg-[#F6F6F8] w-[240px] grid-cols-2">
                <TabsTrigger value="profile" className="text-[#BEBEBE] text-xs">
                  Ongoing
                </TabsTrigger>
                <TabsTrigger
                  value="preferences"
                  className="text-[#BEBEBE] text-xs"
                >
                  Archived
                </TabsTrigger>
              </TabsList>
            </div>
          </Tabs>

          <Table className="mt-4">
            <TableHeader>
              <TableRow className="text-[#868686] text-xs font-medium">
                <TableHead className="">Company</TableHead>
                <TableHead>Job title</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="">Date</TableHead>
                <TableHead className="text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody className="bg-[#F9F9F9] !p-2  rounded-[10px]">
              {jobData.map((jobId) => (
                <TableRow className="bg-[#F9F9F9]" key={jobId.jobId}>
                  <TableCell className="font-medium bg-white flex items-center gap-x-4">
                    <Image
                      src={"/images/Facebook_f_logo_(2019).svg@2x.png"}
                      alt={"upload profile"}
                      height={42}
                      width={39}
                      className=" border-[0.3px] border-gray-200 rounded-[5px]"
                      priority
                    />
                    <p className="text-base font-medium">Pitch N Hire</p>
                  </TableCell>
                  <TableCell className="text-base font-medium bg-white">
                    {jobId.jobTitle}
                  </TableCell>
                  <TableCell className="text-base font-medium bg-white">
                    <Badge className="bg-[#FEF2EA] flex items-center gap-x-2 w-fit">
                      <Image
                        src={"/images/pending@2x.png"}
                        alt={"upload profile"}
                        height={9}
                        width={9}
                        className=" border-[0.3px] border-gray-200 rounded-[5px]"
                        priority
                      />
                      <p className="text-[#FD8432] text-xs">Pending</p>
                    </Badge>
                  </TableCell>
                  <TableCell className="text-base font-medium bg-white">
                    5 days ago
                  </TableCell>
                  <TableCell className="text-base font-medium bg-white">
                    <div className="flex items-center justify-center gap-5 ">
                      <TooltipProvider>
                        <Tooltip>
                          <Dialog>
                            <DialogTrigger asChild>
                              <TooltipTrigger asChild>
                                <Image
                                  src={"/images/window-alt@2x.png"}
                                  alt={"upload profile"}
                                  height={17}
                                  width={17}
                                  className=" "
                                  priority
                                />
                              </TooltipTrigger>
                            </DialogTrigger>
                            <DialogContent className="mt-14   ml-[200px] overflow-y-scroll max-h-screen  max-w-[900px] ">
                              <DialogHeader>
                                <div className="flex gap-3  border-b pb-[20px]  items-center">
                                  <div>
                                    <DialogTitle className="text-2xl font-medium text-[#000000]">Apply Now</DialogTitle>
                                    <DialogDescription>
                                      <p className="mt-[10px] text-sm font-normal text-[#868686]">Welcome to our job application portal!</p>
                                    </DialogDescription>
                                  </div>
                                </div>
                              </DialogHeader>
                              <Card className="border-0 p-0 pt-6">
                                <CardContent className="border-b pb-[40px]">
                                  <div className="flex justify-between">
                                    <div className="flex items-center gap-[15px]">
                                      <Image
                                        src={"/images/Facebook_f_logo_(2019).svg@2x.png"}
                                        alt={"upload profile"}
                                        height={72}
                                        width={78}
                                        className=""
                                        priority
                                      />
                                      <div className="">
                                        <p className="text-2xl font-medium text-[#000000]">UI/UX Designer</p>
                                        <p className="text-base font-normal text-[#0472F4]">Pitch N Hire</p>
                                        <p className="text-sm font-normal text-[#868686]">5 days ago</p>
                                      </div>
                                    </div>
                                    <div>
                                      <Badge className="bg-[#FEF2EA] flex items-center gap-x-2 w-fit">
                                        <Image
                                          src={"/images/pending@2x.png"}
                                          alt={"upload profile"}
                                          height={9}
                                          width={9}
                                          className=" border-[0.3px] border-gray-200 rounded-[5px]"
                                          priority
                                        />
                                        <p className="text-[#FD8432] text-xs">Pending</p>
                                      </Badge>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                              <Card className="bg-[#F9F9F9] border-0 ">
                                <CardHeader>
                                  <CardTitle className="text-base font-medium text-[#000000]">
                                    Contact Info
                                  </CardTitle>
                                </CardHeader>
                                <CardContent className="">
                                  <div className="flex w-[100%] flex-wrap gap-5 justify-between">
                                    <div className="grid w-full ">
                                      <Label
                                        htmlFor="email"
                                        className="text-sm font-medium text-[#868686]"
                                      >
                                        Email *
                                      </Label>
                                      <Input
                                        type="text"
                                        id="email"
                                        className="text-xs font-regular bg-transparent border-none text-[#868686]"
                                        placeholder="Umang.sharma@gigde.com"
                                      />
                                    </div>
                                    <div className="grid w-[48%]">
                                      <Label htmlFor="code" className="text-sm font-medium text-[#868686]">Country Code *</Label>
                                      <Input
                                        type="text"
                                        id="code"
                                        className="text-xs font-regular bg-transparent border-none text-[#868686]"
                                        placeholder="India (+91)"
                                      />
                                    </div>
                                    <div className="grid w-[48%]">
                                      <Label htmlFor="phone" className="text-sm font-medium text-[#868686]">Phone Number *</Label>
                                      <Input
                                        type="text"
                                        id="phone"
                                        className="text-xs font-regular bg-transparent border-none text-[#868686]"
                                        placeholder="8976567899"
                                      />
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                              <Card className="mt-[10px]  bg-[#F9F9F9] border-0 ">
                                <div className="grid w-full relative max-w-full items-center gap-[10px]">
                                  <Label htmlFor="resume" className="text-sm font-medium text-[#212529]">
                                    Resume *
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
                              </Card>
                              <Card className="mt-[10px]  bg-[#F9F9F9] border-0 ">
                                <CardHeader>
                                  <CardTitle className="text-base font-medium text-[#000000]">
                                    Screening Questions
                                  </CardTitle>
                                </CardHeader>
                                <CardContent className="">
                                  <div className="mt-[20px]  grid w-full ">
                                    <Label
                                      htmlFor=""
                                      className="text-sm font-medium text-[#868686]"
                                    >
                                      What tools and software do you typically use for UI/UX design?
                                    </Label>
                                    {/* <Input
                                      type="text"
                                      id=""
                                      placeholder=""
                                      className="mt-[10px] pl-[50px] text-xs font-regular text-[#868686]"
                                    /> */}
                                    <p className="mt-[10px] text-base font-medium text-[#212529]">Commonly used tools and software for UI/UX design include Adobe XD, Sketch, Figma, InVision, and Axure RP. Additionally, prototyping tools such as Marvel and Principle, as well as graphic design software like Adobe Photoshop and Illustrator, are often used in the UI/UX design process.</p>
                                    <div className="mt-[40px]">
                                      <Label
                                        htmlFor=""
                                        className="text-sm font-medium text-[#868686]"
                                      >
                                        What tools and software do you typically use for UI/UX design?
                                      </Label>
                                      {/* <Input
                                      type="text"
                                      id=""
                                      placeholder=""
                                      className="mt-[10px] pl-[50px] text-xs font-regular text-[#868686]"
                                    /> */}
                                      <p className="mt-[10px] text-base font-medium text-[#212529]">yes</p>
                                    </div>
                                  </div>
                                </CardContent>

                              </Card>
                              <div className="mt-[30px] mb-20 w-full justify-end flex flex-end gap-3">
                                <Button className="bg-white border-[0.3px] h-[39px] rounded-[5px] text-xs text-[#000000]">
                                Company Info.
                                </Button>
                                <Button className="bg-[#0472F4] h-[39px] rounded-[5px] text-xs text-white">
                                View Job Description
                                </Button>
                              </div>
                            </DialogContent>
                          </Dialog>
                          <TooltipContent>
                            <p className="text-[10px]">View Application</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Image
                              src={"/images/folder-download@2x.png"}
                              alt={"upload profile"}
                              height={17}
                              width={17}
                              className=" "
                              priority
                            />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="text-[10px]">Withdraw</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Image
                              src={"/images/file-export@2x.png"}
                              alt={"upload profile"}
                              height={17}
                              width={17}
                              className=""
                              priority
                            />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="text-[10px]">Archive</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>
    </>
  );
}
