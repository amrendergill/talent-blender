import JobCard from "@/components/JobCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiPlusCircle } from "react-icons/fi";

export default function JobsList() {
  const jobLists = [
    {
      logo: "/images/PNH-logo-icon.png",
      companyName: "Talent Blendr",
      jobTitle: "Senior B2B sales consultant",
      salary: "$75k - $85k yearly",
      workType: "Full-time / Remote",
      location: "UK",
    },
    {
      logo: "/images/PNH-logo-icon.png",
      companyName: "Talent Blendr",
      jobTitle: "Senior B2B sales consultant",
      salary: "$75k - $85k yearly",
      workType: "Full-time / Remote",
      location: "UK",
    },
    {
      logo: "/images/PNH-logo-icon.png",
      companyName: "Talent Blendr",
      jobTitle: "Senior B2B sales consultant",
      salary: "$75k - $85k yearly",
      workType: "Full-time / Remote",
      location: "UK",
    },
    {
      logo: "/images/PNH-logo-icon.png",
      companyName: "Talent Blendr",
      jobTitle: "Senior B2B sales consultant",
      salary: "$75k - $85k yearly",
      workType: "Full-time / Remote",
      location: "UK",
    },
    {
      logo: "/images/PNH-logo-icon.png",
      companyName: "Talent Blendr",
      jobTitle: "Senior B2B sales consultant",
      salary: "$75k - $85k yearly",
      workType: "Full-time / Remote",
      location: "UK",
    },
    {
      logo: "/images/PNH-logo-icon.png",
      companyName: "Talent Blendr",
      jobTitle: "Senior B2B sales consultant",
      salary: "$75k - $85k yearly",
      workType: "Full-time / Remote",
      location: "UK",
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
          {jobLists?.map((el: any, index: any) => {
            return (
              <>
                <JobCard
                  logo={el?.logo}
                  companyName={el?.companyName}
                  jobTitle={el?.jobTitle}
                  salary={el?.salary}
                  workType={el?.workType}
                  location={el?.location}
                />
              </>
            );
          })}
        </div>
      </main>
    </>
  );
}
