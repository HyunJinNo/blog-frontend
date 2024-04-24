"use client";

import { RootType } from "@/modules";
import { changeField, initializeForm } from "@/modules/auth";
import { ChangeEvent, FormEvent, useEffect } from "react";
import { connect } from "react-redux";
import AuthForm from "../../components/auth/AuthForm";

type MyProps = {
  form: { username: string; password: string; passwordConfirm: string };
  changeField: (form: string, key: string, value: string) => void;
  initializeForm: (form: string) => void;
};

const RegisterForm = ({ form, changeField, initializeForm }: MyProps) => {
  // input 변경 이벤트 handler
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    changeField("register", name, value);
  };

  // form 등록 이벤트 handler
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: 구현 예정
  };

  // 컴포넌트가 처음 렌더링될 때 form을 초기화함.
  useEffect(() => {
    initializeForm("register");
  }, [initializeForm]);

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
  }),
  {
    changeField,
    initializeForm,
  },
)(RegisterForm);