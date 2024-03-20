import { cookies } from "next/headers";
import { ChatLayout } from "@/components/chat/chat-layout";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function CHat() {
  const layout = cookies().get("react-resizable-panels:layout");
  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;

  return (
    <main className="flex h-[calc(100dvh)] flex-col items-center justify-center   gap-4">

      <div className="z-10 border rounded-lg  w-full h-full text-sm lg:flex bg-white">
        <ChatLayout defaultLayout={defaultLayout} navCollapsedSize={8} />
      </div>
    </main>
  );
}