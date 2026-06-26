import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Avatar from "./Avatar";
import { Copy } from "lucide-react";

function ChatMessage({ message }) {
  const isUser = message.role === "user";

  return (
    <div
      className={`flex gap-4 ${
        isUser ? "flex-row-reverse" : ""
      }`}
    >
      <Avatar role={message.role} />

      <div
        className={`rounded-2xl px-5 py-4 max-w-4xl ${
          isUser
            ? "bg-blue-600"
            : "bg-slate-800 border border-slate-700"
        }`}
      >
        {!isUser && (
          <button
            onClick={() =>
              navigator.clipboard.writeText(
                message.content
              )
            }
            className="float-right"
          >
            <Copy size={16} />
          </button>
        )}

        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {message.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default ChatMessage;