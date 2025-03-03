import { useState } from "react";
import { Button, Input, Modal, Spin } from "antd";
import SearchBar from "../components/Layout/SearchBar/SearchBar"

const Chatbot = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [message, setMessage] = useState("");
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isBotModalOpen, setIsBotModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [botResponse, setBotResponse] = useState("");

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    setIsUserModalOpen(true); // Show user message modal
    setLoading(true);
    setBotResponse(""); // Clear previous bot response
    try {
      const API_KEY = "";
      if (!API_KEY) throw new Error("Missing API key");

      const response = await fetch(
        // "https://api-inference.huggingface.co/models/tiiuae/falcon-7b-instruct",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            inputs: message,
            options: { use_cache: false, max_new_tokens: 180 },
          }),
        }
      );

      const data = await response.json();
      const botMessage =
        Array.isArray(data) && data.length > 0 && data[0].generated_text
          ? data[0].generated_text
          : "No response from AI.";

      setBotResponse(botMessage);
      setIsBotModalOpen(true); // Show bot response modal
    } catch (error) {
      setBotResponse("Error fetching response.");
      setIsBotModalOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {/* Search Bar (Input Field) */}
      <Input.Search
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask something..."
        enterButton="Send"
        onSearch={handleSendMessage}
        style={{ width: "400px", marginBottom: "20px" }}
      />

      {/* First Modal: User Message */}
      <Modal
        title="Your Message"
        open={isUserModalOpen}
        onCancel={() => setIsUserModalOpen(false)}
        footer={null}
        style={{ top: 100 }} // Position at top
      >
        <p><strong>You:</strong> {message}</p>
      </Modal>

      {/* Second Modal: Bot Response */}
      <Modal
        title="Chatbot Response"
        open={isBotModalOpen}
        onCancel={() => setIsBotModalOpen(false)}
        footer={null}
        style={{ top: 200 }} // Positioned below the first modal
      >
        {loading ? <Spin /> : <p><strong>Bot:</strong> {botResponse}</p>}
      </Modal>
    </div>
  );
};

export default Chatbot;
