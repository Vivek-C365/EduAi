import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import NavbarDefault from "./components/Layout/Navbar/Navbar";
import LeftcardData from "./components/Layout/Cards/leftcardData";
import RightcardData from "./components/Layout/Cards/rightcardData";

function App() {
  return (
    <>
      <NavbarDefault />

      <div className="flex h-screen">
        <LeftcardData />
        <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
          <Experience />
        </Canvas>

        <RightcardData />
      </div>
    </>
  );
}

export default App;
