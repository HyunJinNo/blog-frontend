import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "login",
  description: "로그인 화면",
};

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
