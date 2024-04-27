import "@/styles/Header.scss";
import { AxiosError } from "axios";
import Link from "next/link";
import Button from "./Button";

type MyProps = {
  user: {
    id: number;
    username: string | null;
    checkError: AxiosError | null;
  };
  onLogout: () => void;
};

const Header = ({ user, onLogout }: MyProps) => {
  return (
    <div className="Header">
      <div className="content">
        <Link className="logo" href="/">
          REACTERS
        </Link>
        {user.username ? (
          <div className="right">
            <div className="username">{user.username}</div>
            <Button onClick={onLogout}>로그아웃</Button>
          </div>
        ) : (
          <Link className="button" href="/login">
            로그인
          </Link>
        )}
      </div>
      <div className="spacer" />
    </div>
  );
};

export default Header;
