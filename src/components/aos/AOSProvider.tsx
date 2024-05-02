"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

type MyProps = {
  children: React.ReactNode;
};

const AOSProvider = ({ children }: MyProps) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return <div>{children}</div>;
};

export default AOSProvider;
