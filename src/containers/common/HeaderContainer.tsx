"use client";

import Header from "@/components/common/Header";
import { RootType } from "@/modules";
import { logout } from "@/modules/user";
import { AxiosError } from "axios";
import { connect } from "react-redux";

type MyProps = {
  user: { id: number; username: string | null; checkError: AxiosError | null };
  logout: () => void;
};

const HeaderContainer = ({ user, logout }: MyProps) => {
  const onLogout = () => {
    logout();
  };

  return <Header user={user} onLogout={onLogout} />;
};

export default connect(
  ({ user }: RootType) => ({
    user: user,
  }),
  { logout },
)(HeaderContainer);
