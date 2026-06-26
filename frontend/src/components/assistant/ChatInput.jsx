import { useState } from "react";
import { SendHorizonal } from "lucide-react";

function ChatInput({ onSend }) {

  const [text, setText] = useState("");

  const send = () => {

    if (!text.trim()) return;

    onSend(text);

    setText("");

  };

  return (

    <div className="flex gap-4">

      <textarea
        rows={2}
        className="flex-1 bg-slate-900 rounded-xl border border-slate-700 p-4 outline-none resize-none"
        placeholder="Ask anything..."
        value={text}
        onChange={(e)=>setText(e.target.value)}
        onKeyDown={(e)=>{
          if(e.key==="Enter" && !e.shiftKey){
            e.preventDefault();
            send();
          }
        }}
      />

      <button
        onClick={send}
        className="w-16 rounded-xl bg-blue-600 hover:bg-blue-700"
      >
        <SendHorizonal />
      </button>

    </div>

  );

}

export default ChatInput;