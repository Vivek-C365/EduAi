import { Input, Button } from "antd";
import { SendOutlined } from "@ant-design/icons";

const MessageInput = () => {
  return (
    <div className="message-input-container">
      <Input
        placeholder="Write a message"
        className="message-input"
      />
      <Button type="primary" shape="circle" icon={<SendOutlined />} className="send-button" />
    </div>
  );
};

export default MessageInput;
