import Cards from "../Cards";
import { CalendarOutlined } from "@ant-design/icons";

const Bottomleftcard = () => {
  const data = [
    {
      title: "Advanced Calculus",
      time: "2:00 PM",
    },
    {
      title: "Linear Algebra",
      time: "3:30 PM",
    },
    {
      title: "Discrete Mathematics",
      time: "5:00 PM",
    },
  ];

  return (
    <Cards
      title="Your Study Plan Today"
      className="pt-0"
      icon={<CalendarOutlined />}
    >
      <div>
        <h4>Today's Focus</h4>
        <span>{data.length} Tasks</span>
      </div>
      <div>
        {data.map((item, index) => (
          <div className="flex justify-between">
            <h1 key={index}>{item.title}</h1>
            <span key={index}>{item.time}</span>
          </div>
        ))}
      </div>
    </Cards>
  );
};

export default Bottomleftcard;
