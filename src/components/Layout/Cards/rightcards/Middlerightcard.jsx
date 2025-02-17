import Cards from "../Cards";
import {
  UserSwitchOutlined,
  AntDesignOutlined,
  UserOutlined,
  CoffeeOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Tooltip, Button } from "antd";

const Middlerightcard = () => {
  const chatpeople = (
    <Avatar.Group
      max={{
        count: 2,
        style: { color: "#f56a00", backgroundColor: "#fde3cf" },
      }}
    >
      <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />
      <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
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
  );

  return (
    <Cards
      title="Study Groups & Friends"
      icon={<UserSwitchOutlined />}
      chatperson={chatpeople}
    >
      <div className="flex justify-between">
        <Card className="!p-0">
          <div>
            <div>
              <h1>Physics Study Group</h1>
              <span>Next Session in 2 hours</span>
            </div>
            <div>
              <Button type="primary">Primary Button</Button>
            </div>
          </div>
        </Card>

        <div>
          <p>Active Study Session Available</p>

          <p>
            <span>
              <CoffeeOutlined />
            </span>
            Join Quantum Physics Discussion
          </p>

          <p>Join Study Group</p>
        </div>
      </div>
    </Cards>
  );
};

export default Middlerightcard;
