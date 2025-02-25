import Cards from "../Cards";
import { BarChartOutlined } from "@ant-design/icons";
import { Flex, Progress } from "antd";
import Button from "../../../Button/Button";

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
          size={[, 15]}
          strokeColor="#9981FF"
          className="text-white"
        />
      </Flex>
      <div className="flex  gap-2 mt-3 items-center justify-between">
        <p className="max-w-[15vw] text-[#434d5b] text-sm">
          Exceptional consistency! You've maintained peak performance for 5 days
          straight.
        </p>
        <Button title={"View Progress Details"} />
      </div>
    </Cards>
  );
};

export default Middleleftcard;
