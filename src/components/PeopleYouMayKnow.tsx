import { IoPersonAddSharp } from "react-icons/io5";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"

export default function PeopleYouMayKnow({ title, avatar, userName, bio }: any) {
  return (
    <>
      <Card className="px-5 py-6">
        <div>
          <p className="font-bold text-sm text-gray-700">{title}</p>
          <div className="mt-5">
            <div className="flex gap-2">
              <Avatar className="h-12 w-12">
                <AvatarImage src={avatar} alt="avatar" />
                <AvatarFallback>MD</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-bold text-sm text-gray-600 pb-1">{userName}</p>
                <p className="text-xs text-gray-600 pb-1">{bio}</p>
                <Button className="rounded-full border-2 text-sm text-gray-700 border-gray-700 flex items-center gap-2" variant={'outline'}>
                    <div>
                    <IoPersonAddSharp size={16} />

                    </div>
                    Connect</Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}
