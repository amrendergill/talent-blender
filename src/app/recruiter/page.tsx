"use client";
import React from "react";
import DashboardHeader from "@/components/DashboardHeader";
import DashboardJobStatistics from "@/components/DashboardJobStatistics";
import DashboardEmployeeStatus from "@/components/DashboardEmployeeStatus";
import DashboardEmployeeComposition from "@/components/DashboardEmployeeComposition";

export default function RecruiterDashBoard() {
  const dashboardHeaderCard = [
    {
      title: " Total Employees",
      count: "856",
      context: "Employees",
    },
    {
      title: "Job Viewed",
      count: "3,342",
      context: "Viewers",
    },
    {
      title: "Job Applied",
      count: "77",
      context: "Applicants",
    },
    {
      title: "Resigned Employees",
      count: "17",
      context: "Employees",
    },
  ];
  return (
    <main className=" space-y-5">
      <div className="flex gap-4">
        {dashboardHeaderCard?.map((el: any, index: any) => {
          return (
            <>
              <DashboardHeader
                title={el?.title}
                count={el?.count}
                context={el?.context}
              />
            </>
          );
        })}
      </div>
      <div className="w-full ">
        <DashboardJobStatistics />
      </div>
      <div className="flex gap-x-6 ">
        <div className="w-[70%]">
          <DashboardEmployeeStatus />
        </div>
        <div className="w-[30%] ">
          <DashboardEmployeeComposition />
        </div>
      </div>
    </main>
  );
}
