import HeaderContainer from "@/containers/common/HeaderContainer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Post",
  description: "Generated by create next app",
};

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <HeaderContainer />
      {children}
    </div>
  );
}