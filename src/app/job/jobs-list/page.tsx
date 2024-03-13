import JobCard from "@/components/JobCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiPlusCircle } from "react-icons/fi";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function JobsList() {
  const jobData = [
    {
      jobId: "INV001",
      jobTitle: "Marketing Coordinator",
      status: 'active',
      location: 'Russia',
      jobType: 'remote'

      
    },
    {
      jobId: "INV002",
      jobTitle: "Medical Assistant",
      status: 'active',
      location: 'United Kingdom',
      jobType: 'full-time'

      
    },
    {
      jobId: "INV003",
      jobTitle: "Web Designer",
      status: 'expired',
      location: 'United States',
      jobType: 'full-time'

      
    },
    {
      jobId: "INV004",
      jobTitle: "Dog Trainer",
      status: 'active',
      location: 'India',
      jobType: 'full-time'

      
    },
    {
      jobId: "INV005",
      jobTitle: "President of Sales",
      status: 'expired',
      location: 'India',
      jobType: 'remote'

      
    },
    {
      jobId: "INV006",
      jobTitle: "Nursing Assistant",
      status: 'active',
      location: 'Ireland',
      jobType: 'remote'

      
    },
    {
      jobId: "INV007",
      jobTitle: "Project Manager",
      status: 'active',
      location: 'United Kingdom',
      jobType: 'remote'

      
    },
  ];
 
  return (
    <>
      <main>
        <div className="bg-white p-5 flex-col flex gap-5">
          <div className="flex items-end justify-between">
            <h1 className="text-xl font-semibold">Jobs</h1>
            <Link href={'/job/create-job'}>
            <Button className="flex items-center gap-2 border-blue-500 text-blue-500" variant={"outline"}>
              <FiPlusCircle size={14} />
              Create Job
            </Button>
            </Link>
          </div>
          <Table>
            <TableCaption>A list of your recent jobs.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Job Id</TableHead>
                <TableHead>Job Title</TableHead>
                <TableHead className="">Status</TableHead>
                <TableHead className="">Location</TableHead>
                <TableHead className="">Job Type</TableHead>
                
              </TableRow>
            </TableHeader>
            <TableBody>
              {jobData.map((jobId) => (
                <TableRow key={jobId.jobId}>
                  <TableCell className="font-medium">{jobId.jobId}</TableCell>
                  <TableCell>{jobId.jobTitle}</TableCell>
                  <TableCell className="">
                    {jobId.status}
                  </TableCell>
                  <TableCell className="">
                    {jobId.location}
                  </TableCell>
                  <TableCell className="">
                    {jobId.jobType}
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
