import Cards from "../Cards";
import { BookOutlined } from "@ant-design/icons";
import Study from "../../../../assets/studying.jpg";
import Button from "../../../Button/Button";

const Topleftcard = () => {
  return (
    <Cards title="Your Study Companion" icon={<BookOutlined />}>
      <div className="flex gap-4">
        <img
          src={Study}
          alt="Study"
          className="w-20 rounded-2xl object-cover"
        />
        <div>
          <p style={{ color: "white", fontSize: "18px" }}>
            Hey <span className="text-purple-500"> Alex!</span> Ready to excel
            today?
          </p>
          <p className="text-gray-600">
            Your focus has improved by 23% this week. Keep up the great work!
          </p>
          <Button title={"Chat with AI"} />
        </div>
      </div>
    </Cards>
  );
};

export default Topleftcard;
