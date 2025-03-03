import Card3D from "../../Card3D/Card3D";
import { BarChartOutlined } from "@ant-design/icons";
import { Flex, Progress } from "antd";
import Button from "../../../Button/Button";

const Middleleftcard = () => {
  return (
    <Card3D
      title="Your Progress: G-Score"
      icon={<BarChartOutlined />}
      className="h-full"
    >
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
        />
      </Flex>
      <div className="flex  gap-2 mt-3 items-center justify-between">
        <p className="max-w-[15vw] text-[#7E7E7E] text-sm">
          Exceptional consistency! You've maintained peak performance for 5 days
          straight.
        </p>
        <Button
          className="!realative"
          title={"View"}
          icon={<BarChartOutlined />}
        />
      </div>
    </Card3D>
  );
};

export default Middleleftcard;
