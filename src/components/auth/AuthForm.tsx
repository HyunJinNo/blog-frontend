import "@/styles/AuthForm.scss";
import Button from "../common/Button";
import Link from "next/link";

/**
 * 회원가입 또는 로그인 폼
 */
const AuthForm = () => {
  return (
    <div className="AuthForm">
      <h3>로그인</h3>
      <form action="">
        <input
          type="text"
          autoComplete="username"
          name="username"
          placeholder="아이디"
        />
        <input
          type="password"
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
        />
        <Button>로그인</Button>
      </form>
      <footer>
        <Link href={"/register"}>회원가입</Link>
      </footer>
    </div>
  );
};

export default AuthForm;
