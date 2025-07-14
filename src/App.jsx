import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toogleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <div className={`${darkMode && "dark"} font-quickSand`}>
        <Header
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          toogleSidebar={toogleSidebar}
        />
        <Sidebar isSidebarOpen={isSidebarOpen} />
      </div>
    </>
  );
}

export default App;
