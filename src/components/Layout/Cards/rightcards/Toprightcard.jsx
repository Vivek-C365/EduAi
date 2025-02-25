import Cards from "../Cards";
import {
  TagsOutlined,
  AntDesignOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Flex, Progress, Avatar, Divider, Tooltip } from "antd";

const Toprightcard = () => {
  const Priorities = [
    {
      title: "Finish studying for English exam",
    },
    {
      title: "Finish studying for English exam",
    },
    {
      title: "Finish studying for English exam",
    },
  ];
  return (
    <Cards title="Goals" icon={<TagsOutlined />}>
      <div className="flex justify-between ">
        <div>
          <h1>Top Priorities</h1>
          <div className="Priorities-list">
            {Priorities.map((items, index) => (
              <h1 key={index} className="text-[12px]">
                {items.title}
              </h1>
            ))}
          </div>
        </div>
        <div>
          <div>
            <h1>Streaks</h1>
            <p>Streak goal: Study for 2 hrs per day</p>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <div>
                <Flex gap="small" wrap>
                  <Progress
                    type="dashboard"
                    percent={75}
                    size={80}
                    strokeColor="#9981FF"
                    format={(percent) => (
                      <span style={{ color: "white" }}>{percent}%</span>
                    )}
                  />
                </Flex>
              </div>
              <div>
                <Avatar.Group>
                  <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                  <a href="https://ant.design">
                    <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
                  </a>
                  <Tooltip title="Ant User" placement="top">
                    <Avatar
                      style={{ backgroundColor: "#87d068" }}
                      icon={<UserOutlined />}
                    />
                  </Tooltip>
                  <Avatar
                    style={{ backgroundColor: "#1677ff" }}
                    icon={<AntDesignOutlined />}
                  />
                </Avatar.Group>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Cards>
  );
};

export default Toprightcard;
