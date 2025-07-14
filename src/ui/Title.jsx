import React from "react";

export default function Title({ children }) {
  return (
    <h1
      className="font-bold text-gray-700 
      text-2xl dark:text-gray-400"
    >
      {children}
    </h1>
  );
}
