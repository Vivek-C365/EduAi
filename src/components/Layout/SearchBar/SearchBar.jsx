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
    <div className="message-input-container relative z-[9999]">
      <Input
        placeholder="Write a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onPressEnter={handleSend}
      />
      <Button
        type="primary"
        shape="circle"
        icon={<SendOutlined />}
        onClick={handleSend}
      />
    </div>
  );
};

export default MessageInput;
