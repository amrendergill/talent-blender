"use client"
import { Button } from "@/components/ui/button";
import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieLabel,
} from "recharts";
import { PieChart, Pie, Sector, Cell } from "recharts";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
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

 const data = [
   { month: "Jan",Viewed:20 , Applied: 10 },
   { month: "Feb",Viewed:30 , Applied: 20 },
   { month: "Mar",Viewed:35 , Applied: 25 },
   { month: "Apr",Viewed:45 , Applied: 35 },
   { month: "May",Viewed:34 , Applied: 25 },
   { month: "Jun",Viewed:20 , Applied: 5 },
   { month: "Jul",Viewed:90 , Applied: 85 },
   { month: "Aug",Viewed:40 , Applied: 15 },
   { month: "Sep",Viewed:90 , Applied: 65 },
   { month: "Oct",Viewed:80 , Applied: 55 },
   { month: "Nov",Viewed:50 , Applied: 45 },
   { month: "Dec",Viewed:90 , Applied: 75 },
   // Add more data for each month
 ];
 const Data = [
   { name: "Group A", value: 400 },
   { name: "Group B", value: 300 },
 ];
 const userData = [
   {
     name: "Justin Lipshutz",
     department: "Marketing",
     age: "22",
     discipline: "+100%",
     status: "Permanent",
   },
   {
     name: "Marcus Culhane",
     department: "Finance",
     age: "24",
     discipline: "+95%",
     status: "Contract",
   },
   {
     name: "Justin Lipshutz",
     department: "Marketing",
     age: "22",
     discipline: "+100%",
     status: "Permanent",
   },
   {
     name: "Leo Stanton",
     department: "R&D",
     age: "26",
     discipline: "-40%",
     status: "Permanent",
   },
 ];
const COLORS = ["#0081FE", "#FF0000"];

const RADIAN = Math.PI / 180;

const renderActiveShape = (props:any) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`PV ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};


export default function RecruiterDashBoard() {
     const [date, setDate] = useState<Date>();
     const [activeIndex,setActiveIndex] = useState(0);
     const onPieEnter = (_:any,index:number)=>{
        setActiveIndex(index);
     }
  return (
    <main className=" space-y-5">
      <div className="flex gap-4">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-[20px] font-semibold text-[rgba(0,0,0,0.9)]">
              Total Employees
            </CardTitle>
            <CardContent className="text-[32px] font-bold">856</CardContent>
            <p className="text-sm text-[#949494]">Employee</p>
          </CardHeader>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-[20px] font-semibold text-[rgba(0,0,0,0.9)]">
              Job Viewed
            </CardTitle>
            <CardContent className="text-[32px] font-bold">3,342</CardContent>
            <p className="text-sm text-[#949494]">Viewers</p>
          </CardHeader>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-[20px] font-semibold text-[rgba(0,0,0,0.9)]">
              Job Applied
            </CardTitle>
            <CardContent className="text-[32px] font-bold">77</CardContent>
            <p className="text-sm text-[#949494]">Applicants</p>
          </CardHeader>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-[20px] font-semibold text-[rgba(0,0,0,0.9)]">
              Resigned Employees
            </CardTitle>
            <CardContent className="text-[32px] font-bold">17</CardContent>
            <p className="text-sm text-[#949494]">Employee</p>
          </CardHeader>
        </Card>
      </div>
      <div className="w-full ">
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
      </div>
      <div className="flex gap-x-6 ">
        <div className="w-[70%]">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-[20px] font-semibold text-[rgba(0,0,0,0.9)] ">
                  Employee Status
                </CardTitle>
              </div>
            
              <Table>
                <TableCaption>A list of your emloyee data.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Employee Name</TableHead>
                    <TableHead> Department</TableHead>
                    <TableHead>Age</TableHead>
                    <TableHead className="text-center">Discipline</TableHead>
                    <TableHead className="text-center">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {userData.map((item) => (
                    <TableRow>
                      <TableCell className="font-medium">
                        {item?.name}
                      </TableCell>
                      <TableCell>{item?.department}</TableCell>
                      <TableCell className="text-left">{item?.age}</TableCell>
                      <TableCell>
                        <div className="flex items-center justify-center gap-5">
                          {item?.discipline}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center justify-center gap-5">
                          {item?.status}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardHeader>
          </Card>
        </div>
        <div className="w-[30%] ">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-[20px] font-semibold text-[rgba(0,0,0,0.9)] ">
                  Employee Composition
                </CardTitle>
              </div>
            </CardHeader>
            <div>
              <ResponsiveContainer width="100%" height="100%">
                <div className="flex justify-center items-center">
                  <PieChart width={320} height={230}>
                    <Pie
                      activeIndex={activeIndex}
                      activeShape={renderActiveShape}
                      data={Data}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      onMouseEnter={onPieEnter}
                    />
                  </PieChart>
                </div>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}
