import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import ExperiencePage from "./pages/ExperiencePage";
import NavAid from "./pages/projects/NavAid";
import SudokuSolver from "./pages/projects/SudokuSolver";
import Lumatone from "./pages/experience/Lumatone";
import Gerrits from "./pages/experience/Gerrits";
import MacFormulaElectric from "./pages/experience/MacFormulaElectric";
import FirstResponder from "./pages/projects/FirstResponder";
import LvBms from "./pages/projects/LvBms";
import Stm32Bootloader from "./pages/projects/Stm32Bootloader";
import SimulinkToCpp from "./pages/projects/SimulinkToCpp";
import AirportLuggage from "./pages/projects/AirportLuggage";









function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    <Route path="/projects/navaid" element={<NavAid />} />

<Route path="/projects/sudoku-solver" element={<SudokuSolver />} />
{/* <Route path="/experience/lumatone" element={<Lumatone />} /> */}
{/* <Route path="/experience/mac-formula-electric" element={<MacFormulaElectric />} /> */}
{/* <Route path="/experience/gerrits" element={<Gerrits />} /> */}
<Route path="/projects/first-responder-route-optimizer" element={<FirstResponder />} />
<Route path="/projects/lv-bms" element={<LvBms />} />
<Route path="/projects/stm32-bootloader" element={<Stm32Bootloader />} />
<Route path="/projects/simulink-to-cpp-firmware" element={<SimulinkToCpp />} />
<Route path ="/projects/airport-luggage-mechanism" element={<AirportLuggage />} />




    </Routes>
  );
}

export default App;
