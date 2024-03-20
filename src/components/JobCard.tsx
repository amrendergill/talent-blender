import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function JobCard({
  companyName,
  jobTitle,
  workType,
  location,
  time,
}: any) {
  return (
    <>
      <Card className="p-5">
        <CardTitle className="text-base font-semibold">{jobTitle}</CardTitle>
        <CardContent className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <p className="text-xs text-[#0472F4]">{companyName}</p>
            <p className="text-xs text-[#868686]">.</p>
            <p className="text-xs text-[#868686]">{location}</p>
            <p className="text-xs text-[#868686]">.</p>

            <p className="text-xs text-[#868686]">{workType}</p>
            <p className="text-xs text-[#868686]">.</p>

            <p className="text-xs text-[#868686]">{time}</p>
          </div>
          <div className="flex gap-[10px]">
            <Button
              className="px-5 py-[7px] text-xs bg-[#F9F9F9] border-none rounded-none hover:shadow-sm hover:bg-white hover:border"
              variant={"outline"}
            >
              Save
            </Button>
            <Button
              className="px-5 py-[7px] text-xs bg-[#F9F9F9] border-none rounded-none hover:shadow-sm hover:bg-white hover:border"
              variant={"outline"}
            >
              View Job
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
