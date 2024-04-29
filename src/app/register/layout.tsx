import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "register",
  description: "회원가입 화면",
};

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
