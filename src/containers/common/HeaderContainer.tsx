"use client";

import Header from "@/components/common/Header";
import { RootType } from "@/modules";
import { AxiosError } from "axios";
import { connect } from "react-redux";

const HeaderContainer = ({
  user,
}: Readonly<{
  user: { id: number; username: string | null; checkError: AxiosError | null };
}>) => {
  return <Header user={user} />;
};

export default connect(({ user }: RootType) => ({
  user: user,
}))(HeaderContainer);
