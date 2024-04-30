"use client";

import { RootType } from "@/modules";
import { changeField, initializeForm, login } from "@/modules/auth";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { connect } from "react-redux";
import AuthForm from "../../components/auth/AuthForm";
import { useRouter } from "next/navigation";
import { check } from "@/modules/user";
import { AxiosError } from "axios";

type MyProps = {
  form: { username: string; password: string };
  auth: {} | null;
  authError: AxiosError | null;
  user: { id: number; username: string | null; userError: AxiosError | null };
  changeField: (
    form: string,
    key: string,
    value: string,
  ) => ReturnType<typeof changeField>;
  initializeForm: (form: string) => ReturnType<typeof initializeForm>;
  login: (username: string, password: string) => ReturnType<typeof login>;
  check: () => ReturnType<typeof check>;
};

const LoginForm = ({
  form,
  auth,
  authError,
  user,
  changeField,
  initializeForm,
  login,
  check,
}: MyProps) => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  // input 변경 이벤트 handler
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    changeField("login", name, value);
    setError(null);
  };

  // form 등록 이벤트 handler
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, password } = form;

    // 하나라도 비어있는 경우
    if (username === "" || password === "") {
      setError("빈 칸을 모두 입력하세요.");
      return;
    }

    login(username, password);
  };

  // 컴포넌트가 처음 렌더링될 때 초기화함.
  useEffect(() => {
    initializeForm("login");
  }, [initializeForm]);

  useEffect(() => {
    if (authError) {
      setError("로그인 실패");
      return;
    } else {
      setError(null);
    }

    if (auth) {
      console.log("로그인 성공");
      check();
    }
  }, [auth, authError, check]);

  useEffect(() => {
    if (user.username) {
      router.push("/");
      try {
        localStorage.setItem("user", JSON.stringify(user));
      } catch (e) {
        console.log("localStorage is not working");
      }
    }
  }, [router, user, user.username]);

  return (
    <AuthForm
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default connect(
  ({ auth, user }: RootType) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
    user: user,
  }),
  {
    changeField,
    initializeForm,
    login,
    check,
  },
)(LoginForm);
