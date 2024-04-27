import React from "react";
import "@/styles/Responsive.scss";

type MyProps = {
  children: React.ReactNode;
};

const Responsive = ({ children }: MyProps) => {
  return <div className="Responsive">{children}</div>;
};

export default Responsive;
