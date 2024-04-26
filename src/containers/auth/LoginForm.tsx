"use client";

import { RootType } from "@/modules";
import { changeField, initializeForm, login } from "@/modules/auth";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { connect } from "react-redux";
import AuthForm from "../../components/auth/AuthForm";
import { useRouter } from "next/navigation";
import { check } from "@/modules/user";

type MyProps = {
  form: { username: string; password: string };
  auth: {} | null;
  authError: boolean | null;
  user: { id: number; username: string | null; checkError: boolean | null };
  changeField: (form: string, key: string, value: string) => void;
  initializeForm: (form: string) => void;
  login: (username: string, password: string) => void;
  check: () => void;
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
    }
    if (auth) {
      console.log("로그인 성공");
      check();
    }
  }, [auth, authError, check]);

  useEffect(() => {
    if (user.username) {
      router.push("/");
    }
  }, [router, user.username]);

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
