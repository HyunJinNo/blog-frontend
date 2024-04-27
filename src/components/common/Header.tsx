import "@/styles/Header.scss";
import { AxiosError } from "axios";
import Link from "next/link";

type MyProps = {
  user: {
    id: number;
    username: string | null;
    checkError: AxiosError | null;
  };
};

const Header = ({ user }: MyProps) => {
  return (
    <div className="Header">
      <div className="content">
        <Link className="logo" href="/">
          REACTERS
        </Link>
        {user.username ? (
          <div className="right">
            <div className="username">{user.username}</div>
            <Link className="button" href="/">
              로그아웃
            </Link>
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
