import { AiOutlineSend } from "react-icons/ai";

export default function MessagesView() {
  return (
    <div className="flex flex-col w-[1150px] h-[600px] mx-auto bg-white shadow-md rounded-2xl">
      {/* Messages Area */}
      <div className="flex flex-col flex-1 space-y-4 overflow-y-auto p-6">
        {/* Left-aligned message with Avatar */}
        <div className="flex items-start space-x-3">
          <img
            src="https://i.pravatar.cc/40" // Placeholder avatar
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
          <MessageBubble
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            position="left"
          />
        </div>

        {/* Right-aligned message */}
        <div className="flex justify-end">
          <MessageBubble
            text="Lorem Ipsum is simply dummy text ever since not only five centuries."
            position="right"
          />
        </div>
      </div>

      {/* Message Input Box */}
      <div className="flex items-center border-t px-6 py-4 bg-gray-50 rounded-b-2xl">
        <input
          type="text"
          placeholder="Send a message..."
          className="flex-1 p-3 rounded-xl border border-gray-300 focus:outline-none text-gray-700 text-sm"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            lineHeight: "26.6px",
          }}
        />
        <button className="ml-3 p-3 bg-blue-500 rounded-full text-white shadow-md">
          <AiOutlineSend className="text-lg" />
        </button>
      </div>
    </div>
  );
}

// Message Bubble Component
function MessageBubble({ text, position = "left" }) {
  return (
    <div
      className={`max-w-[350px] p-4 text-gray-700 text-sm rounded-2xl ${
        position === "left"
          ? "bg-gray-100 rounded-tr-lg rounded-bl-lg rounded-br-lg"
          : "bg-blue-100 rounded-tl-lg rounded-bl-lg rounded-br-lg"
      }`}
      style={{
        fontFamily: "Inter, sans-serif",
        fontSize: "14px",
        lineHeight: "26.6px",
      }}
    >
      {text}
    </div>
  );
}
