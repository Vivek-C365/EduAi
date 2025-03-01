import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import NavbarDefault from "./components/Layout/Navbar/Navbar";
import Leftcardlayout from "./components/Layout/Cards/Leftcardlayout";
import Rightcardlayout from "./components/Layout/Cards/Rightcardlayout";
// import ChatFooter from "./components/Layout/SearchBar/SearchQuizLayout";
import Chatbot from "./Api/ChatbotApi";
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

      
      {/* <Chatbot /> */}
    </>
  );
}

export default App;
