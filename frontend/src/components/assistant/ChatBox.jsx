import { useEffect, useRef } from "react";

import ChatMessage from "./ChatMessage";
import TypingLoader from "./TypingLoader";

function ChatBox({ messages, loading }) {

  const bottomRef = useRef();

  useEffect(() => {

    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });

  }, [messages]);

  return (

    <div className="bg-slate-900 rounded-2xl p-6 h-[65vh] overflow-y-auto">

      <div className="space-y-4">

        {messages.map((message, index) => (

          <ChatMessage
            key={index}
            message={message}
          />

        ))}

        {loading && <TypingLoader />}

        <div ref={bottomRef}></div>

      </div>

    </div>

  );

}

export default ChatBox;