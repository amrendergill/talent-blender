"use client"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { CiPhone } from "react-icons/ci";
import { IoVideocamOutline } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";
export default function ChatTopBar() {
    return(
        <>
        <div className="flex gap-2 px-3 pb-4 border-b w-full">
                        <div>
                          <Avatar className="h-10 w-10">
                            <AvatarImage
                              src={`/images/thomas-bennie-lxziZx-TfSo-unsplash.jpg`}
                              alt="logo"
                            />
                            <AvatarFallback>MD</AvatarFallback>
                          </Avatar>
                        </div>
                        <div className="flex justify-between w-full items-center">
                          <div>
                            <p className="text-sm font-bold">Rose Marlin</p>
                            <p className="text-xs">Active 10 mins ago</p>
                          </div>
                         
                        </div>
                      </div>
        </>
    )
}