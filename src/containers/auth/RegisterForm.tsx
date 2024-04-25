"use client";

import { RootType } from "@/modules";
import { changeField, initializeForm, register } from "@/modules/auth";
import { ChangeEvent, FormEvent, useEffect } from "react";
import { connect } from "react-redux";
import AuthForm from "../../components/auth/AuthForm";

type MyProps = {
  form: { username: string; password: string; passwordConfirm: string };
  auth: {} | null;
  authError: boolean | null;
  changeField: (form: string, key: string, value: string) => void;
  initializeForm: (form: string) => void;
  register: (username: string, password: string) => void;
};

const RegisterForm = ({
  form,
  auth,
  authError,
  changeField,
  initializeForm,
  register,
}: MyProps) => {
  // input 변경 이벤트 handler
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    changeField("register", name, value);
  };

  // form 등록 이벤트 handler
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { username, password, passwordConfirm } = form;
    if (password !== passwordConfirm) {
      // TODO: 오류 처리
      return;
    }
    register(username, password);
  };

  // 컴포넌트가 처음 렌더링될 때 form을 초기화함.
  useEffect(() => {
    initializeForm("register");
  }, [initializeForm]);

  // 회원가입 성공/실패 처리
  useEffect(() => {
    if (authError) {
      console.log("오류 발생");
      console.log(authError);
      return;
    }
    if (auth) {
      console.log("회원가입 성공");
      console.log(auth);
    }
  }, [auth, authError]);

  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default connect(
  ({ auth }: RootType) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
  }),
  {
    changeField,
    initializeForm,
    register,
  },
)(RegisterForm);
