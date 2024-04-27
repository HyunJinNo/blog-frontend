"use client";

import { RootType } from "@/modules";
import { changeField, initializeForm, register } from "@/modules/auth";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { connect } from "react-redux";
import AuthForm from "../../components/auth/AuthForm";
import { check } from "@/modules/user";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";

type MyProps = {
  form: { username: string; password: string; passwordConfirm: string };
  auth: {} | null;
  authError: AxiosError | null;
  user: { id: number; username: string | null; checkError: AxiosError | null };
  changeField: (form: string, key: string, value: string) => void;
  initializeForm: (form: string) => void;
  register: (username: string, password: string) => void;
  check: () => void;
};

const RegisterForm = ({
  form,
  auth,
  authError,
  user,
  changeField,
  initializeForm,
  register,
  check,
}: MyProps) => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  // input 변경 이벤트 handler
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    changeField("register", name, value);
    setError(null);
  };

  // form 등록 이벤트 handler
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { username, password, passwordConfirm } = form;

    // 하나라도 비어있는 경우
    if (username === "" || password === "" || passwordConfirm === "") {
      setError("빈 칸을 모두 입력하세요.");
      return;
    }

    // 비밀번호가 일치하지 않는 경우
    if (password !== passwordConfirm) {
      setError("비밀번호가 일치하지 않습니다.");
      changeField("register", "password", "");
      changeField("register", "passwordConfirm", "");
      return;
    }

    register(username, password);
  };

  // 컴포넌트가 처음 렌더링될 때 초기화함.
  useEffect(() => {
    initializeForm("register");
  }, [initializeForm]);

  // 회원가입 성공/실패 처리
  useEffect(() => {
    if (authError) {
      // 이미 계정이 존재하는 경우
      if (authError.response!.status === 409) {
        setError("이미 존재하는 계정명입니다.");
        return;
      }

      // 기타 이유
      setError("회원가입 실패");
      return;
    } else {
      setError(null);
    }

    if (auth) {
      console.log("회원가입 성공");
      console.log(auth);
      check();
    }
  }, [auth, authError, check]);

  // user 값이 잘 설정되었는지 확인
  useEffect(() => {
    if (user.username) {
      router.push("/"); // 홈 화면으로 이동
      try {
        localStorage.setItem("user", JSON.stringify(user));
      } catch (e) {
        console.log("localStorage is not working");
      }
    }
  }, [router, user, user.username]);

  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default connect(
  ({ auth, user }: RootType) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
    user: user,
  }),
  {
    changeField,
    initializeForm,
    register,
    check,
  },
)(RegisterForm);
