import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function DashboardHeader ({title, count, context}:any) {
    
    return(
        <>
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-[20px] font-semibold text-[rgba(0,0,0,0.9)]">
             {
                title
             }
            </CardTitle>
            <CardContent className="text-[32px] font-bold">{count}</CardContent>
            <p className="text-sm text-[#949494]">{context}</p>
          </CardHeader>
        </Card>
        </>
    )
}