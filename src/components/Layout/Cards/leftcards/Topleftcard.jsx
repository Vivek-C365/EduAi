import Cards from "../Cards";
import { BookOutlined } from "@ant-design/icons";
import Study from "../../../../assets/studying.jpg";

const Topleftcard = () => {
  return (
    <Cards title="Your Study Companion" icon={<BookOutlined />}>
      <div className="flex gap-4">
        <img src={Study} alt="Study" className="w-20" />
        <div>
          <p style={{ color: "white", fontSize: "14px" }}>
            Hey Alex! Ready to excel today?
          </p>
          <p>
            Your focus has improved by 23% this week. Keep up the great work!
          </p>

          <span>Chat with Your AI</span>
        </div>
      </div>
    </Cards>
  );
};

export default Topleftcard;
