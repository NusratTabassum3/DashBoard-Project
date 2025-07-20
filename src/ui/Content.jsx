import React from "react";

export default function Content({ children }) {
  console.log(children);
  return <div className="flex-1 flex flex-col gap-5 ">{children}</div>;
}
