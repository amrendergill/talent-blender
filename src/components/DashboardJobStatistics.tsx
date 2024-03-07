import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Card, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { format } from "date-fns";
import { CalendarIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function DashboardJobStatistics() {
  const [date, setDate] = useState<Date>();

  const data = [
    { month: "Jan", Viewed: 20, Applied: 10 },
    { month: "Feb", Viewed: 30, Applied: 20 },
    { month: "Mar", Viewed: 35, Applied: 25 },
    { month: "Apr", Viewed: 45, Applied: 35 },
    { month: "May", Viewed: 34, Applied: 25 },
    { month: "Jun", Viewed: 20, Applied: 5 },
    { month: "Jul", Viewed: 90, Applied: 85 },
    { month: "Aug", Viewed: 40, Applied: 15 },
    { month: "Sep", Viewed: 90, Applied: 65 },
    { month: "Oct", Viewed: 80, Applied: 55 },
    { month: "Nov", Viewed: 50, Applied: 45 },
    { month: "Dec", Viewed: 90, Applied: 75 },
    // Add more data for each month
  ];
  return (
    <>
      <Card className="">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-[20px] font-semibold text-[rgba(0,0,0,0.9)]">
              Job Statistics
            </CardTitle>
            <div className="flex gap-x-3">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[240px] justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div>
            <ResponsiveContainer width="100%" height="100%">
              <div className="flex justify-center items-center mt-4">
                <BarChart
                  width={800}
                  height={300}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3" vertical={false} />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />

                  <Bar dataKey="Applied" stackId="a" fill="#0081FE" />
                  {/* <Bar dataKey="Viewed" stackId="a" fill="#F2EFFF" /> */}
                </BarChart>
              </div>
            </ResponsiveContainer>
          </div>
        </CardHeader>
      </Card>
    </>
  );
}
