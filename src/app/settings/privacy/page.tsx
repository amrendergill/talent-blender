import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";


const page = () => {
  return (
    <div className="mt-4  mb-64">
      <Card className="bg-[#F9F9F9] rounded-[10px] space-y-6 ">
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <p className="font-medium text-base">Account Privacy Settings</p>
            <p className="text-xs text-[#868686]">
              Choose whether you want to make your account or page private.
            </p>
          </div>
        </div>
        <Card className="space-y-2">
          <div className="flex justify-between items-center">
            <p className="text-sm font-medium">Private account</p>
            <Switch id="private" />
          </div>
          <p className="text-xs text-[#868686]">
            When your account is private, only followers approved by you can see
            your shared content, including photos or videos on hashtag and
            location pages, as well as your followers and following lists.
          </p>
        </Card>
      </Card>
    </div>
  );
}

export default page