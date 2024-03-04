import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";

export default function RecruiterDashBoard() {
  return (
    <main className="container py-24 flex gap-5 px-36">
      <div className="w-full flex  gap-4">
        <Card className="w-[352px]">
          <CardHeader>
            <CardTitle className="text-[20px] font-semibold text-[rgba(0,0,0,0.9)]">
              Total Employees
            </CardTitle>
            <CardContent className="text-[32px] font-bold">856</CardContent>
            <p className="text-sm text-[#949494]">Employee</p>
          </CardHeader>
        </Card>
        <Card className="w-[352px]">
          <CardHeader>
            <CardTitle className="text-[20px] font-semibold text-[rgba(0,0,0,0.9)]">
              Job View
            </CardTitle>
            <CardContent className="text-[32px] font-bold">856</CardContent>
            <p className="text-sm text-[#949494]">Employee</p>
          </CardHeader>
        </Card>
        <Card className="w-[352px]">
          <CardHeader>
            <CardTitle className="text-[20px] font-semibold text-[rgba(0,0,0,0.9)]">
              Total Employees
            </CardTitle>
            <CardContent className="text-[32px] font-bold">856</CardContent>
            <p className="text-sm text-[#949494]">Employee</p>
          </CardHeader>
        </Card>
        <Card className="w-[352px]">
          <CardHeader>
            <CardTitle className="text-[20px] font-semibold text-[rgba(0,0,0,0.9)]">
              Total Employees
            </CardTitle>
            <CardContent className="text-[32px] font-bold">856</CardContent>
            <p className="text-sm text-[#949494]">Employee</p>
          </CardHeader>
        </Card>
      </div>
    </main>
  );
}
