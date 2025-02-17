import Cards from "../Cards";
import { BarChartOutlined } from "@ant-design/icons";
import { Flex, Progress } from "antd";

const Middleleftcard = () => {
  return (
    <Cards title="Your Progress: G-Score" icon={<BarChartOutlined />}>
      <Flex gap="small" lassName="bg-[#0D0D0D]" vertical>
        <Progress
          status="active"
          percent={60}
          percentPosition={{
            align: "end",
            type: "inner",
          }}
          size={[300, 15]}
          strokeColor="#9981FF"
          className="text-white"
        />
      </Flex>
      <p>
        Exceptional consistency! You've maintained peak performance for 5 days
        straight.
      </p>
      <span>View Progress Details</span>
    </Cards>
  );
};

export default Middleleftcard;
