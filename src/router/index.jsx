import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Dinogame from "../pages/Dinogame.jsx";
import Menu from "../pages/Menu.jsx";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dinogame" element={<Dinogame />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
