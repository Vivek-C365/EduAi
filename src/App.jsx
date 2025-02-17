import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import NavbarDefault from "./components/Layout/Navbar/Navbar";
import Leftcardlayout from "./components/Layout/Cards/Leftcardlayout";
import Rightcardlayout from "./components/Layout/Cards/Rightcardlayout";
import ChatFooter from "./components/Layout/SearchBar/SearchQuizLayout";
function App() {
  return (
    <>
      <NavbarDefault />

      <div className="flex mt-4 ">
        <Leftcardlayout />
        <Canvas
          className="!h-auto"
          shadows
          camera={{ position: [0, 2, 5], fov: 30 }}
        >
          <Experience />
        </Canvas>
        <Rightcardlayout />
      </div>
      <ChatFooter />
    </>
  );
}

export default App;
