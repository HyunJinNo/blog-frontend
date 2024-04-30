import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "edit",
  description: "포스트 수정 화면",
};

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
