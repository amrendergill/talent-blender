"use client"
import { useState } from "react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export default function SocialProfiles() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className={`flex justify-between border-t pt-[30px]  ${open && "hidden"}`}>
                <div>
                    <p className="font-medium text-base">Social Profiles</p>
                    <p className="text-[#868686] text-xs">
                        Where can individuals locate you on the internet?
                    </p>
                </div>
                <Button
                    className="bg-white text-xs h-[31px] text-[#0472F4] border-[0.3px] border-[#0472F4] rounded-[5px]"
                    onClick={() => setOpen(true)}
                >
                    + Add
                </Button>
            </div>
            {open && (
                <>
                    <div >
                        <div className="border-t pt-[30px] ">
                            <p className="font-medium text-base">Social Profiles</p>
                            <p className="text-[#868686] text-xs">
                            Where can individuals locate you on the internet?
                            </p>
                        </div>
                        <div className="mt-[30px] flex flex-col gap-[40px]">                
                            <div className="grid w-full relative  items-center gap-1.5">
                                <Label htmlFor="website" className="text-sm">
                                    Website
                                </Label>
                                <img src='/images/site-alt.svg' alt='site' className="h-[15px] absolute top-10 left-[15px] w-[15px]"/>
                                <Input
                                    className="text-xs pl-[45px] text-[#868686]"
                                    type="text"
                                    id="name"
                                    placeholder="https://   https://www.linkedin.com/in/umang-sharma-359504261/"
                                />
                            </div>
                            <div className="grid w-full relative  items-center gap-1.5">
                                <Label htmlFor="linked" className="text-sm">
                                LinkedIn
                                </Label>
                                <img src='/images/linkedin (1).svg' alt='site' className="h-[15px] absolute top-10 left-[15px] w-[15px]"/>

                                <Input
                                    className="text-xs pl-[45px] text-[#868686]"
                                    type="text"
                                    id="name"
                                    placeholder="Linkedin  https://www.linkedin.com/in/umang-sharma-359504261/"
                                />
                            </div>

                            <div className="grid w-full relative items-center gap-1.5">
                                <Label htmlFor="twitter" className="text-sm">
                                Twitter
                                </Label>
                                <img src='/images/twitter-alt (1).svg' alt='site' className="h-[15px] absolute top-10 left-[15px] w-[15px]"/>
                                <Input
                                    className="text-xs pl-[45px] text-[#868686]"
                                    type="text"
                                    id="name"
                                    placeholder="Twitter  https://www.linkedin.com/in/umang-sharma-359504261/"
                                />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}