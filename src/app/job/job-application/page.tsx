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
import Link from "next/link";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
export default function JobApplication() {
  const jobData = [
    {
      jobId: "INV001",
      jobTitle: "Marketing Coordinator",
      candidateEmail: "samar@yopmail.com",
      action: {
        view: <MdOutlineRemoveRedEye />,
        delete: <MdDeleteOutline />,
      },
    },
    {
      jobId: "INV002",
      jobTitle: "Medical Assistant",
      candidateEmail: "samar@yopmail.com",
      action: {
        view: <MdOutlineRemoveRedEye />,
        delete: <MdDeleteOutline />,
      },
    },
    {
      jobId: "INV003",
      jobTitle: "Web Designer",
      candidateEmail: "samar@yopmail.com",
      action: {
        view: <MdOutlineRemoveRedEye />,
        delete: <MdDeleteOutline />,
      },
    },
    {
      jobId: "INV004",
      jobTitle: "Dog Trainer",
      candidateEmail: "samar@yopmail.com",
      action: {
        view: <MdOutlineRemoveRedEye />,
        delete: <MdDeleteOutline />,
      },
    },
    {
      jobId: "INV005",
      jobTitle: "President of Sales",
      candidateEmail: "samar@yopmail.com",
      action: {
        view: <MdOutlineRemoveRedEye />,
        delete: <MdDeleteOutline />,
      },
    },
    {
      jobId: "INV006",
      jobTitle: "Nursing Assistant",
      candidateEmail: "samar@yopmail.com",
      action: {
        view: <MdOutlineRemoveRedEye />,
        delete: <MdDeleteOutline />,
      },
    },
    {
      jobId: "INV007",
      jobTitle: "Project Manager",
      candidateEmail: "samar@yopmail.com",
      action: {
        view: <MdOutlineRemoveRedEye />,
        delete: <MdDeleteOutline />,
      },
    },
  ];
  return (
    <>
      <main className="bg-white flex-col flex gap-5">
        <div className="p-5 mt-2">
          <h1 className="text-xl font-semibold">Jobs Applications</h1>
          <Table className="mt-4">
            <TableCaption>A list of your recent job data.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Job Id</TableHead>
                <TableHead>Job title</TableHead>
                <TableHead>Candidate email</TableHead>
                <TableHead className="text-center">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {jobData.map((jobId) => (
                <TableRow key={jobId.jobId}>
                  <TableCell className="font-medium">{jobId.jobId}</TableCell>
                  <TableCell>{jobId.jobTitle}</TableCell>
                  <TableCell className="text-left">
                    {jobId.candidateEmail}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center justify-center gap-5">
                      <Link href={"/job/job-application/view-job"}>
                        {jobId.action.view}
                      </Link>
                      {jobId.action.delete}
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