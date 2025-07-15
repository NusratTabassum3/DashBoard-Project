import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { useState } from "react";
import Main from "./ui/Main";
import Content from "./ui/Content";
import Profile from "./components/Profile/Profile";
import Stats from "./components/Stats/Stats";
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

        <Main>
          <Content>
            <Stats darkMode={darkMode} />

            <div className="flex flex-col gap-3 lg:flex-row"></div>
          </Content>
          <Profile />
        </Main>
      </div>
    </>
  );
}

export default App;
