import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination";
  import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
  import { Button } from "@/components/ui/button";

export default function CreateJobRightBar(){

    const rightside: any = [
        {
          position: "UI/UX Designer",
          place: "Noida, Uttar Pradesh",
        },
        {
          position: "Software Engineer - MLOps - France or …",
          place: "Noida, Uttar Pradesh",
        },
        {
          position: "Front - end Developer",
          place: "Noida, Uttar Pradesh",
        },
      ];

    return(
    <div className="border-l pl-5 w-[388px] min-w-[388px] max-w-[388px]">
    <h2 className="font-medium text-base mb-[20px] text-[#000000]">
      Your recent Jobs
    </h2>
    <Tabs defaultValue="active" className="">
      <TabsList className="grid grid-cols-2 w-[179px] h-fit p-[2px]">
        <TabsTrigger value="active" className="text-xs">
          Active
        </TabsTrigger>
        <TabsTrigger value="draft" className="text-xs">
          Draft
        </TabsTrigger>
      </TabsList>

      <TabsContent value="active">
        <div className="border-t pt-[20px] mt-[20px]">
          {rightside?.map((item: any, index: any) => (
            <div
              key={`rightside${index}`}
              className="w-[100%] mb-[20px] border p-[20px]"
            >
              <h2 className="text-base font-medium text-[#000000]">
                {item?.position}
              </h2>
              <p className="text-xs font-regular text-[#868686] mb-[20px] mt-[10px]">
                {item?.place}
              </p>
              <div className="flex items-center justify-between">
                <Button
                //   onClick={handleSubmit}
                  className={`px-[20px] border-[#bed4ee] hover:bg-[white] h-[25px] text-[#000000] bg-white shadow-[0px_3px_6px_#0000000D] border-[0.2px]  text-xs rounded-[3px]`}
                >
                  Edit Job
                </Button>
                <div className="text-[10px] font-regular rounded-full px-[15px] py-[3px] bg-[#F5F5F5]">
                  <p>Last edit : 5 days ago</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </TabsContent>
    </Tabs>
    <div className="w-[100%]">
      <div className=""></div>
      <div className="">
        <Pagination>
          <PaginationContent>
            <PaginationItem className="">
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem className="">
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">4</PaginationLink>
            </PaginationItem>
            <PaginationItem className="border-0">
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">100</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  </div>
    )
}