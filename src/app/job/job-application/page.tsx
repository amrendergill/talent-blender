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
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
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
