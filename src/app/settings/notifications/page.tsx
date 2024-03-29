import {
  Card, CardContent,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

const page = () => {
  return (
    <div className="mt-4  mb-64">
    <Card className="bg-[#F9F9F9] border-0  rounded-[10px] space-y-3 ">
      <div className="flex justify-between  items-center">
        <div className="space-y-1">
          <p className="font-medium text-base text-[#000000]">Notification Setting</p>
          <p className="text-xs font-regular text-[#868686]">
          This section allows you to customize your notification preferences according to your preferences and needs.
          </p>
        </div>
      </div>
      <CardContent className="p-[20px] rounded-[10px] bg-[#FFFFFF]">
        <div className="mb-[20px] flex flex-col space-y-[5px]">
        <div className="flex justify-between items-center">
          <p className="text-sm font-medium">Job alerts & reminders</p>
          <Switch id="private" />
        </div>
        <p className="text-xs font-normal text-[#868686]">
        Job updates and timely reminders for viewed, saved, and matched opportunities.
        </p>
        </div>
        <div className=" border-t  flex flex-col space-y-[5px] pt-[20px] ">
        <div className="flex justify-between items-center">
          <p className="text-sm font-medium">Job recommendations</p>
          <Switch id="private" />
        </div>
        <p className="text-xs w-[80%] text-[#868686]">
        A curated collection of job recommendations tailored to your preferences, delivered directly to your inbox on a weekly basis. We only send notifications when you’re actively seeking opportunities or open to offers.
        </p>
        </div>
      </CardContent>
      <CardContent className=" p-[20px] rounded-[10px] bg-[#FFFFFF]">
        <div className="mb-[20px] flex flex-col space-y-[5px]">
        <div className="flex justify-between items-center">
          <p className="text-sm font-medium">Profile alerts</p>
          <Switch id="private" />
        </div>
        <p className="text-xs text-[#868686]">
        View profile visitors.
        </p>
        </div>
        <div className=" border-t  flex flex-col space-y-[5px] pt-[20px] ">
        <div className="flex justify-between items-center">
          <p className="text-sm font-medium">Profile guidance</p>
          <Switch id="private" />
        </div>
        <p className="text-xs w-[80%] text-[#868686]">
        Updates on profile quality, tips, and new features.
        </p>
        </div>
        <div className=" border-t mt-[20px] flex flex-col space-y-[5px] pt-[20px] ">
        <div className="flex justify-between items-center">
          <p className="text-sm font-medium">Featured profile</p>
          <Switch id="private" />
        </div>
        <p className="text-xs w-[80%] text-[#868686]">
        Receive notifications about eligibility for top startup features and updates regarding your featured profile.
        </p>
        </div>
      </CardContent>
      <CardContent className=" p-[20px] rounded-[10px] bg-[#FFFFFF]">
        <div className="mb-[20px] flex flex-col space-y-[5px]">
        <div className="flex justify-between items-center">
          <p className="text-sm font-medium">Profile alerts</p>
          <Switch id="private" />
        </div>
        <p className="text-xs text-[#868686]">
        View profile visitors.
        </p>
        </div>
        <div className=" border-t  flex flex-col space-y-[5px] pt-[20px] ">
        <div className="flex justify-between items-center">
          <p className="text-sm font-medium">Profile guidance</p>
          <Switch id="private" />
        </div>
        <p className="text-xs w-[80%] text-[#868686]">
        Updates on profile quality, tips, and new features.
        </p>
        </div>
        <div className=" border-t mt-[20px] flex flex-col space-y-[5px] pt-[20px] ">
        <div className="flex justify-between items-center">
          <p className="text-sm font-medium">TalentBlender newsletter</p>
          <Switch id="private" />
        </div>
        <p className="text-xs w-[80%] text-[#868686]">
        Weekly digest showcasing trending industries, emerging startups, notable fundings, and acquisitions.
        </p>
        </div>
      </CardContent>
      <CardContent className="p-[20px]  rounded-[10px] bg-[#FFFFFF]">
        <div className="mb-[20px]  flex flex-col space-y-[5px]">
        <div className="flex justify-between items-center">
          <p className="text-sm font-medium">Product announcements</p>
          <Switch id="private" />
        </div>
        <p className="text-xs text-[#868686]">
        Keep informed about new product features, offers, and promotions.
        </p>
        </div>
      </CardContent>
      <div className="mb-[20px]  pr-5 border-t pt-[15px] flex flex-col space-y-[5px]">
        <div className="flex justify-between items-center">
          <p className="text-sm font-medium">Turn Off All Notifications</p>
          <Switch id="private" />
        </div>
        <p className="text-xs text-[#868686]">
        This button will disable all notifications across the platform.
        </p>
        </div>
    </Card>
  </div>
  )
}

export default page