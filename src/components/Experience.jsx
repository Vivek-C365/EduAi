import { Avatar } from "./Avatar";
import { Canvas } from "@react-three/fiber";
import Chatbot from "../Api/ChatbotApi";
export const Experience = () => {
  return (
    <>
      <div className="flex flex-col m-4 w-full h-full justify-end">
        {/* <div className="h-full w-full">
          <Canvas
            className="!h-auto"
            shadows
            camera={{ position: [0, 2, 5], fov: 30 }}
          >
            <group position-y={-1}>
              <Avatar />
            </group>
            <ambientLight intensity={2} />
          </Canvas>
        </div> */}
        <div className="">
          <Chatbot />
        </div>
      </div>
    </>
  );
};
