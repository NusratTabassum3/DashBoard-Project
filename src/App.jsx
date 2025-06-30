import Header from "./components/Header/Header";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      <div className={`${darkMode && "dark"} font-quickSand`}>
        Hello world!
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </>
  );
}

export default App;
