import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaRobot, FaUser, FaPaperPlane, FaCopy, FaTrash } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import useChat from "../../hooks/useChat";

function AIChat() {
  const [input, setInput] = useState("");

  const {
    messages,
    loading,
    askAI,
  } = useChat();

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim()) return;

    await askAI(input);

    setInput("");
  };

  const copyMessage = (text) => {
    navigator.clipboard.writeText(text);
  };

  const clearChat = () => {
    window.location.reload();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-slate-900 rounded-3xl border border-slate-800 shadow-xl"
    >
      {/* Header */}

      <div className="flex justify-between items-center border-b border-slate-800 p-6">

        <div className="flex items-center gap-3">

          <FaRobot className="text-3xl text-blue-500" />

          <div>

            <h2 className="text-2xl font-bold text-white">
              AI Study Assistant
            </h2>

            <p className="text-gray-400 text-sm">
              Ask anything about your studies
            </p>

          </div>

        </div>

        <button
          onClick={clearChat}
          className="text-red-400 hover:text-red-600"
        >
          <FaTrash size={20} />
        </button>

      </div>

      {/* Messages */}

      <div className="h-[500px] overflow-y-auto p-6 space-y-6">

        {messages.length === 0 && (

          <div className="text-center text-gray-500 mt-24">

            <FaRobot
              className="mx-auto mb-5 text-blue-500"
              size={60}
            />

            <h3 className="text-2xl font-bold">

              Welcome 👋

            </h3>

            <p className="mt-2">

              Ask me anything related to
              <br />
              SSC • GATE • Placements • Coding • AI • DBMS • DSA

            </p>

          </div>

        )}

        {messages.map((msg, index) => (

          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className={`flex ${
              msg.sender === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >

            <div
              className={`max-w-[80%] flex gap-3 ${
                msg.sender === "user"
                  ? "flex-row-reverse"
                  : ""
              }`}
            >

              <div>

                {msg.sender === "user" ? (

                  <FaUser
                    className="text-green-400 mt-2"
                    size={22}
                  />

                ) : (

                  <FaRobot
                    className="text-blue-400 mt-2"
                    size={22}
                  />

                )}

              </div>

              <div
                className={`rounded-2xl px-5 py-4 ${
                  msg.sender === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-slate-800 text-gray-200"
                }`}
              >

                <ReactMarkdown>

                  {msg.text}

                </ReactMarkdown>

                {msg.sender === "ai" && (

                  <button
                    onClick={() =>
                      copyMessage(msg.text)
                    }
                    className="mt-3 flex items-center gap-2 text-xs text-gray-400 hover:text-white"
                  >

                    <FaCopy />

                    Copy

                  </button>

                )}

              </div>

            </div>

          </motion.div>

        ))}

        {loading && (

          <div className="flex gap-3">

            <FaRobot
              className="text-blue-400 mt-2"
              size={22}
            />

            <div className="bg-slate-800 rounded-2xl px-5 py-4">

              <div className="animate-pulse">

                Thinking...

              </div>

            </div>

          </div>

        )}

        <div ref={chatEndRef}></div>

      </div>

      {/* Input */}

      <div className="border-t border-slate-800 p-6">

        <div className="flex gap-4">

          <input
            type="text"
            value={input}
            placeholder="Ask your AI mentor..."
            onChange={(e) =>
              setInput(e.target.value)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSend();
              }
            }}
            className="flex-1 bg-slate-800 rounded-xl px-5 py-4 text-white outline-none"
          />

          <button
            onClick={handleSend}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 rounded-xl px-6"
          >

            <FaPaperPlane />

          </button>

        </div>

      </div>

    </motion.div>
  );
}

export default AIChat;