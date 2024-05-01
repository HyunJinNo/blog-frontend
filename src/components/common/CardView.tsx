import "@/styles/CardView.scss";
import React from "react";

type MyProps = {
  children: React.ReactNode;
};

const CardView = ({ children }: MyProps) => {
  return <div className="CardView">{children}</div>;
};

export default CardView;
