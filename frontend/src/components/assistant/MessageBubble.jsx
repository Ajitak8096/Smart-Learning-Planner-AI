function MessageBubble({ message }) {
  const isUser = message.sender === "user";

  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[75%] rounded-2xl px-5 py-3 whitespace-pre-wrap ${
          isUser
            ? "bg-blue-600 text-white"
            : "bg-slate-800 text-gray-100"
        }`}
      >
        {message.text}
      </div>
    </div>
  );
}

export default MessageBubble;