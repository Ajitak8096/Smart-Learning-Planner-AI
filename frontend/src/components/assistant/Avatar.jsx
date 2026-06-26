import { Bot, User } from "lucide-react";

function Avatar({ role }) {
  return (
    <div
      className={`w-10 h-10 rounded-full flex items-center justify-center ${
        role === "assistant"
          ? "bg-gradient-to-r from-blue-500 to-cyan-500"
          : "bg-green-600"
      }`}
    >
      {role === "assistant" ? (
        <Bot size={22} />
      ) : (
        <User size={22} />
      )}
    </div>
  );
}

export default Avatar;