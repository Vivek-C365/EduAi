import { useState } from "react";
import { Button, Input, Modal, Spin } from "antd";

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
      <Input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask Edu Ai..."
        onPressEnter={handleSendMessage} // Triggers on pressing Enter
        style={{
          width: "100%",
          marginBottom: "20px",
          height: "50px",
          backgroundColor: "#1a1a1a",
          color: "white",
          border: "1px solid #9e9e9e52",
          borderRadius: "50px",
        }}
        className="custom-input"
      />

      {/* First Modal: User Message */}
      <Modal
        title="Your Message"
        open={isUserModalOpen}
        onCancel={() => setIsUserModalOpen(false)}
        footer={null}
        style={{ top: 100 }} // Position at top
      >
        <p>
          <strong>You:</strong> {message}
        </p>
      </Modal>

      {/* Second Modal: Bot Response */}
      <Modal
        title="Chatbot Response"
        open={isBotModalOpen}
        onCancel={() => setIsBotModalOpen(false)}
        footer={null}
        style={{ top: 200 }} // Positioned below the first modal
      >
        {loading ? (
          <Spin />
        ) : (
          <p>
            <strong>Bot:</strong> {botResponse}
          </p>
        )}
      </Modal>
    </div>
  );
};

export default Chatbot;
