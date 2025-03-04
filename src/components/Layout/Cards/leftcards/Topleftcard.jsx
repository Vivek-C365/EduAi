import Card3D from "../../Card3D/Card3D";
import ShinyText  from "../../../Animations/ShinnyBorder";
import { BookOutlined } from "@ant-design/icons";
import Study from "../../../../assets/studying.jpg";
import { Button, Flex } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";

const Topleftcard = () => {
  return (
    <Card3D title="Your Study Companion" icon={<BookOutlined />}>
      <div className="flex gap-4">
        <img
          src={Study}
          alt="Study"
          className="w-16 rounded-2xl object-cover"
        />
        <div>
          <p style={{ color: "white", fontSize: "18px" }}>
            Hey <span className="text-purple-500"> Alex!</span> Ready to excel
            today?
          </p>
          <p className="text-[#7E7E7E] text-sm">
            Your focus has improved by{" "}
            <span className="text-[#C296FF]">23% </span>this week. Keep up the
            great work!
          </p>
        </div>
      </div>
      <div>
        
        <Flex
          vertical
          gap="small"
          style={{
            width: "100%",
          }}
        >
          <Button
            className="mt-2 !bg-transparent !rounded-full !pr-0 !border-[#d9d9d917] !text-white hover:text-2xl flex !justify-between !h-auto"
            variant="outlined"
          >
            <ShinyText text="Chat with AI" disabled={false} speed={3} className='custom-class' />
            <div className="p-0.5">
              <Button color="default" variant="solid" className="!bg-white !text-gray-700 !p-2 !rounded-full ">
              <CaretRightOutlined />
              </Button>
            </div>
          </Button>
        </Flex>
      </div>
    </Card3D>
  );
};

export default Topleftcard;
