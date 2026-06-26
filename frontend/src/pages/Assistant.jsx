import MainLayout from "../components/layout/MainLayout";

import ChatHistory from "../components/assistant/ChatHistory";
import ChatBox from "../components/assistant/ChatBox";
import ChatInput from "../components/assistant/ChatInput";

import useChat from "../hooks/useChat";

function Assistant() {

  const {

    chats,

    selectedChat,

    openChat,

    newChat,

    askAI,

    removeChat,

    togglePin,

    loading,

  } = useChat();

  return (

    <MainLayout>

      <div className="grid grid-cols-12 gap-6 h-[85vh]">

        {/* Sidebar */}

        <div className="col-span-3">

          <ChatHistory
            chats={chats}
            openChat={openChat}
            newChat={newChat}
            removeChat={removeChat}
            togglePin={togglePin}
          />

        </div>

        {/* Chat */}

        <div className="col-span-9 flex flex-col gap-4">

          <ChatBox
            messages={selectedChat?.messages || []}
            loading={loading}
          />

          <ChatInput
            onSend={askAI}
          />

        </div>

      </div>

    </MainLayout>

  );

}

export default Assistant;