import React from "react";

function Sidebar({ isSidebarOpen }) {
  return (
    <aside
      className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 bg-white border-r border-gray-200 sm:translate-x-0
    dark:bg-gray-800 transition-x-0 ${
      isSidebarOpen ? "translate-x-0" : "-translate-x-full"
    } `}
    >
      {" "}
      Sidebar
    </aside>
  );
}

export default Sidebar;
