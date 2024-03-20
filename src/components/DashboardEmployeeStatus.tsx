import { Card, CardHeader, CardTitle } from "./ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
export default function DashboardEmployeeStatus() {
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
  return (
    <>
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
                  <TableCell className="font-medium">{item?.name}</TableCell>
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
    </>
  );
}
