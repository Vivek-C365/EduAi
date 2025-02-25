import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import NavbarDefault from "./components/Layout/Navbar/Navbar";
import Leftcardlayout from "./components/Layout/Cards/Leftcardlayout";
import Rightcardlayout from "./components/Layout/Cards/Rightcardlayout";
import ChatFooter from "./components/Layout/SearchBar/SearchQuizLayout";
import Aurora from "./components/Animations/Aurora";

function App() {
  return (
    <>
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={.5}
        amplitude={1.5}
        speed={0.5}
        className="absolute top-0 left-0 w-full h-full"
      />
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
