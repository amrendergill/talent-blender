"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Script from "next/script";
import SideNavbar from "@/components/SideNavbar";
import { usePathname } from "next/navigation";
import useAuth from "@/store/store";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import ChatTopBar from "@/components/ChatTopBar";
import ChatBottomBar from "@/components/ChatBottomBar";
import { useState } from "react";
import Chat from "@/components/Chat";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const authState = useAuth((state: any) => state.authState);
  console.log("userlay", authState);
  const [message, setMessage] = useState("");


  const chats = [
    {
      logo: "/images/thomas-bennie-lxziZx-TfSo-unsplash.jpg",
      username: "Rose Marlin",
      text: "hello!",
      time: "3:21 PM",
    },
    {
      logo: "/images/fermin-rodriguez-penelas-b8kEUZqMNoQ-unsplash.jpg",
      username: "Jacob Mcfall",
      text: "hello!",
      time: "3:21 PM",
    },
    {
      logo: "/images/olu-famule-kYx_g4YBfLI-unsplash.jpg",
      username: "Amara Khan",
      text: "hello!",
      time: "3:21 PM",
    },
    {
      logo: "/images/zhangzui-Pf23Y30hD68-unsplash.jpg",
      username: "Stanly Sheth",
      text: "hello!",
      time: "3:21 PM",
    },
    {
      logo: "/images/teodor-drobota-uyyRJA2an4o-unsplash.jpg",
      username: "Robert Perlin",
      text: "hello!",
      time: "3:21 PM",
    },
    {
      logo: "/images/tembinkosi-sikupela-ZC3iqcOL5T8-unsplash.jpg",
      username: "Raj Khanna",
      text: "hello!",
      time: "3:21 PM",
    },
  ];
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen min-h-screen max-h-screen`}>
        <Script src="/tinymce/tinymce.min.js" />
        <Navbar />
        <div className="flex h-full mt-6 gap-4 container">
          <aside
            className={`sticky top-[94px] flex-1 shrink-0 h-full  ${
              pathname.includes("/auth") ? "hidden" : "block"
            }`}
          >
            <SideNavbar />
          </aside>

          <main className="w-full mb-24">{children}</main>
        </div>
        <div
          className={`fixed bottom-0 flex items-end justify-end w-full px-5  ${
            pathname.includes("/auth") ? "hidden" : "block"
          }`}
        >
          <Accordion type="single" collapsible className="w-[700px]">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-white flex items-center">
                Chat
              </AccordionTrigger>
              <AccordionContent className="bg-white py-5">
                <div className="flex divide-x">
                  <div className="flex flex-col space-y-5 px-3 w-[45%]">
                    {chats?.map((el: any, index: any) => {
                      return (
                        <>
                          <div className="flex gap-2 w-full">
                            <div>
                              <Avatar className="h-10 w-10">
                                <AvatarImage src={el?.logo} alt="logo" />
                                <AvatarFallback>MD</AvatarFallback>
                              </Avatar>
                            </div>
                            <div className="flex justify-between w-full">
                              <div className="flex flex-col gap-1">
                                <p className="text-sm font-bold">
                                  {el?.username}
                                </p>
                                <p className="text-xs text-gray-600">
                                  {el?.text}
                                </p>
                              </div>
                              <div>
                                <p className="text-xs text-gray-600">
                                  {el?.time}
                                </p>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                  <div className="w-full">
                    <div className="w-full">
                      <ChatTopBar />
                      <div className="p-4">
                        <Chat message={message} setMessage={setMessage}/>

                      </div>
                      <ChatBottomBar message={message} setMessage={setMessage} />
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </body>
    </html>
  );
}
