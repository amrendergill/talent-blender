"use client"
import Image from "next/image";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import {usePathname } from "next/navigation";
import Link from "next/link";


const SettingsBar = () => {
  const pathname = usePathname()
  console.log("params", pathname);
  return (
    <div>
      <Card className="p-5 bg-[#F9F9F9] rounded-[10px] !border-none mt-4">
        <p className="text-xl font-medium">Settings</p>
        <div className="mt-4 space-y-2">
          <Link href={"/settings"}>
            <p
              className={`${
                pathname == "/settings" && "bg-white text-black "
              } hover:bg-white hover:text-black text-sm font-medium p-2 cursor-pointer rounded-[5px] text-[#868686]`}
            >
              General
            </p>
          </Link>
          <Link href={"/settings/password"}>
            <p
              className={`${
                pathname == "/settings/password" && "bg-white text-black "
              } hover:bg-white hover:text-black text-sm font-medium p-2 cursor-pointer rounded-[5px] text-[#868686]`}
            >
              Password
            </p>
          </Link>
          <Link href={"/settings/notifications"}>
            <p
              className={`${
                pathname == "/settings/notifications" && "bg-white text-black "
              } hover:bg-white hover:text-black text-sm font-medium p-2 cursor-pointer rounded-[5px] text-[#868686]`}
            >
              Notification
            </p>{" "}
          </Link>
          <Link href={"/settings/privacy"}>
            <p
              className={`${
                pathname == "/settings/privacy" && "bg-white text-black "
              } hover:bg-white hover:text-black text-sm font-medium p-2 cursor-pointer rounded-[5px] text-[#868686]`}
            >
              Privacy
            </p>
          </Link>
          <Link href={"/settings/theme"}>
            <p
              className={`${
                pathname == "/settings/theme" && "bg-white text-black "
              } hover:bg-white hover:text-black text-sm font-medium p-2 cursor-pointer rounded-[5px] text-[#868686]`}
            >
              Theme preferences
            </p>
          </Link>
        </div>
      </Card>
    </div>
  );
}

export default SettingsBar