import { Pin, Trash2, Plus } from "lucide-react";

function ChatHistory({
  chats,
  openChat,
  newChat,
  removeChat,
  togglePin,
}) {

  return (

    <div className="bg-slate-900 rounded-2xl h-full p-4">

      <button
        onClick={newChat}
        className="w-full bg-blue-600 rounded-xl py-3 mb-5 flex justify-center gap-2"
      >
        <Plus size={18} />

        New Chat

      </button>

      <div className="space-y-3">

        {chats.map((chat) => (

          <div
            key={chat._id}
            className="bg-slate-800 rounded-xl p-3 cursor-pointer"
            onClick={() => openChat(chat._id)}
          >

            <div className="font-semibold">

              {chat.title}

            </div>

            <div className="text-xs text-gray-400 truncate">

              {chat.lastMessage}

            </div>

            <div className="flex gap-3 mt-3">

              <button
                onClick={(e) => {

                  e.stopPropagation();

                  togglePin(chat._id);

                }}
              >

                <Pin
                  size={16}
                  color={
                    chat.pinned
                      ? "#3b82f6"
                      : "gray"
                  }
                />

              </button>

              <button
                onClick={(e) => {

                  e.stopPropagation();

                  removeChat(chat._id);

                }}
              >

                <Trash2
                  size={16}
                  color="red"
                />

              </button>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}

export default ChatHistory;