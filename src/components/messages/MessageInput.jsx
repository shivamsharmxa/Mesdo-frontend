import { useState, useRef } from "react";
import { Paperclip, Smile, Send } from "lucide-react";
import EmojiPicker from "emoji-picker-react";

const MessageInput = ({ onSend }) => {
  const [inputMessage, setInputMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);
  const emojiPickerRef = useRef(null);

  const onEmojiClick = (emojiData) => {
    setInputMessage((prev) => prev + emojiData.emoji);
    setShowEmojiPicker(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSend = () => {
    if (inputMessage.trim() === "" && !selectedFile) return;
    onSend(inputMessage, selectedFile);
    setInputMessage("");
    setSelectedFile(null);
  };

  return (
    <div className="p-4 border-t border-gray-200 bg-white sticky bottom-0">
      {selectedFile && (
        <div className="mb-2 flex items-center justify-between bg-blue-50 p-2 rounded">
          <div className="flex items-center">
            <Paperclip className="text-blue-500 mr-2" size={16} />
            <span className="text-sm truncate max-w-xs">
              {selectedFile.name}
            </span>
          </div>
          <button
            onClick={() => setSelectedFile(null)}
            className="text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>
      )}

      <div className="flex items-center gap-2">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept="image/*, .pdf, .doc, .docx, .txt"
        />

        <button
          onClick={() => fileInputRef.current.click()}
          className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100"
        >
          <Paperclip size={20} />
        </button>

        <div className="relative" ref={emojiPickerRef}>
          <button
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100"
          >
            <Smile size={20} />
          </button>
          {showEmojiPicker && (
            <div className="absolute bottom-10 left-0 z-10">
              <EmojiPicker
                onEmojiClick={onEmojiClick}
                width={300}
                height={400}
              />
            </div>
          )}
        </div>

        <div className="flex-1 relative">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type a message..."
            className="w-full p-3 pr-16 bg-gray-50 rounded-lg focus:outline-none"
          />
        </div>

        <button
          onClick={handleSend}
          disabled={!inputMessage && !selectedFile}
          className={`p-2 rounded-full ${
            inputMessage || selectedFile
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default MessageInput;
