import { Message, UserData } from "@/app/data";
import ChatTopbar from "./chat-topbar";
import { ChatList } from "./chat-list";
import React from "react";

interface ChatProps {
  // messages?: Message[];
  messages?: any;
  selectedUser: UserData;
  isMobile: boolean;
  userData: any;
}

export function Chat({ messages, selectedUser, isMobile, userData }: ChatProps) {
  console.log('messages', messages)
  const [messagesState, setMessages] = React.useState<Message[]>(
    messages ?? []
  );

  const sendMessage = (newMessage: Message) => {
    setMessages([...messagesState, newMessage]);
  };

  return (
    <div className="flex flex-col justify-between w-full h-full" >
      {userData .length > 0 ? (<ChatTopbar selectedUser={selectedUser} />) : (<div className="mt-5"></div>)
      }
      <ChatList
       userData = {userData}
        messages={messagesState}
        selectedUser={selectedUser}
        sendMessage={sendMessage}
        isMobile={isMobile}
      />
    </div >
  );
}
