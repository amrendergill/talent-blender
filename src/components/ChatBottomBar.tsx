import { IoMdAddCircleOutline } from "react-icons/io";
import { ImFilePicture } from "react-icons/im";
import { HiOutlinePaperClip } from "react-icons/hi";
import { Input } from "@/components/ui/input";
import { FiThumbsUp } from "react-icons/fi";
import { useRef, useState } from "react";
export default function ChatBottomBar({ message, setMessage }: any) {
  const inputRef: any = useRef();

  const handleSend = () => {
    if (message.trim()) {
      const newMessage = {
        id: message.length + 1,
        // name: loggedInUserData.name,
        // avatar: loggedInUserData.avatar,
        message: message.trim(),
      };
      //   sendMessage(newMessage);
      setMessage("");

      if (inputRef?.current) {
        inputRef?.current?.focus();
      }
    }
  };

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }

    if (event.key === "Enter" && event.shiftKey) {
      event.preventDefault();
      setMessage((prev: any) => prev + "\n");
    }
  };

  return (
    <>
      <div className="w-full px-3">
        <div className="flex w-full items-center gap-3">
          <div>
            <IoMdAddCircleOutline size={20} />
          </div>
          <div>
            <ImFilePicture size={20} />
          </div>
          <div>
            <HiOutlinePaperClip size={20} />
          </div>
          <div className="w-[100%]">
            <Input
              name="message"
              value={message}
              ref={inputRef}
              onKeyDown={handleKeyPress}
              onChange={(e: any) => setMessage(e?.target?.value)}
              placeholder="Aa"
              className="rounded-full w-full h-9 overflow-hidden flex items-center"
            />
          </div>
          <div>
            <FiThumbsUp size={20} />
          </div>
        </div>
      </div>
    </>
  );
}
