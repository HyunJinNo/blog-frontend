import HeaderContainer from "@/containers/common/HeaderContainer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "posts",
  description: "포스트 조회 화면",
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
