"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { RiContactsLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { FiPlusCircle } from "react-icons/fi";
import { usePathname } from "next/navigation";

export default function SideNavbar() {
    const pathname = usePathname()
  return (
    <NavigationMenu className="h-full  w-[120px] bg-white py-5">
      <NavigationMenuList className="flex flex-col gap-y-5 ">
        
        <NavigationMenuItem>
          <Link href="/recruiter" legacyBehavior passHref>
            <NavigationMenuLink
              className={`flex flex-col items-center justify-center text-center text-xs gap-2 ${
                pathname.includes("/recruiter")
                  ? "text-blue-500 "
                  : "text-black"
              }`}
            >
              <MdOutlineDashboardCustomize size={18} />
              Dashboard
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/job-application" legacyBehavior passHref>
            <NavigationMenuLink
              className={`flex flex-col items-center text-center justify-center text-xs gap-2 ${
                pathname.includes("/job-application")
                  ? "text-blue-500 "
                  : "text-black"
              }`}
            >
              <IoDocumentTextOutline size={18} />
              Job Applications
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/jobs-list" legacyBehavior passHref>
            <NavigationMenuLink
              className={`flex flex-col items-center justify-center text-center text-xs gap-2 ${
                pathname.includes("/jobs-list") ? "text-blue-500 " : "text-black"
              }`}
            >
              <RiContactsLine size={18} />
              Jobs List
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/settings" legacyBehavior passHref>
            <NavigationMenuLink
              className={`flex flex-col items-center justify-center text-center text-xs gap-2 ${
                pathname.includes("/settings") ? "text-blue-500 " : "text-black"
              }`}
            >
              <IoSettingsOutline size={18} />
              Settings
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
