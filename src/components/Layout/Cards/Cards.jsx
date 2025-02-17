import React from "react";
import { Card, Col } from "antd";

const Cards = ({ title, children, icon, chatperson }) => (
  <Col>
    <Card
      style={{
        backgroundColor: "#0D0D0D",
        color: "white",
        width: "30vw",
        border: "1px solid #7e7e7e69",
      }}
      headStyle={{ color: "white", borderBottom: "none", marginTop: "10px" }} // Title color & no border
      title={
        <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {icon}
          {title}
          {chatperson}
        </span>
      }
      className="w-96 h-44 overflow-hidden  flex  flex-col border-[0.5px] border-[#7E7E7E] gap-2"
      variant="borderless"
    >
      {children} {/* Dynamic content */}
    </Card>
  </Col>
);

export default Cards;
