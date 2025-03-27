import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Devices from "./pages/Devices";
import Received from "./pages/Received";
import History from "./pages/History";
import Settings from "./pages/Settings";
import About from "./pages/About";
import { ThemeProvider } from "./context/ThemeProvider";
import './index.css';

const App = () => {
  return (
    <div className="flex h-screen">
      <ThemeProvider>
      <Navbar />
      <div className="flex-1 h-full overflow-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/devices' element={<Devices />} />
          <Route path='/received' element={<Received />} />
          <Route path='/history' element={<History />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
      </ThemeProvider>
    </div>
  );
};

export default App;


