import React from "react";

export default function Main({ children }) {
  console.log(children);
  return (
    <div
      className="text-gray-500
  bg-gray-100 p-4 sm:ml flex gap-5 flex-col lg:flex-row transition-all
  duration-300 mt-14 dark:bg-gray-800"
    >
      {children}
    </div>
  );
}
