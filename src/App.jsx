import "./index.css";
import { Home } from "./pages/Home";
import { NoMatch } from "./pages/NoMatch";
import { Projects } from "./pages/Projects";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { Chat } from "./components/Chat";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Chat />
      <Footer />
    </div>
  );
};

export default App;
