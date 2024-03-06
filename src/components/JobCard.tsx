import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Card } from "./ui/card";

export default function JobCard({logo, companyName, jobTitle, salary, workType, location}:any) {
  return (
    <>
      <Card>
        <div className="flex gap-5 w-full">
          <div>
            <Avatar className="h-10 w-10">
              <AvatarImage src={logo} alt="logo" />
              <AvatarFallback>MD</AvatarFallback>
            </Avatar>
          </div>
          <div className="w-full">
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium">{companyName}</p>
              <p className="text-sm font-semibold">
                {jobTitle}
              </p>
              <div className="flex items-center justify-between">
                <p className="text-xs text-gray-600">{salary}</p>
                <p className="text-xs text-gray-600">{workType}, {location}</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}
