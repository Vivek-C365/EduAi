import { Input, Button } from "antd";
import { SendOutlined } from "@ant-design/icons";
import { useState } from "react";

const MessageInput = ({ onSend }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage(""); // Clear input after sending
    }
  };

  return (
    <div className="message-input-container flex items-center bg-gray-900 p-3 rounded-full shadow-lg w-full max-w-xl mx-auto relative">
      <Input
        placeholder="Ask me anything..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onPressEnter={handleSend}
        className="flex-1 bg-transparent border-none text-white placeholder-gray-400 focus:outline-none"
      />
      <Button
        type="text"
        shape="circle"
        icon={<SendOutlined className="text-gray-400 hover:text-white text-xl" />}
        onClick={handleSend}
        className="ml-2 bg-gray-700 p-2 rounded-full"
      />
    </div>
  );
};

export default MessageInput;
