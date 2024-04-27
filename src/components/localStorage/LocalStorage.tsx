"use client";

import { check, tempSetUser } from "@/modules/user";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Dispatch, UnknownAction } from "redux";

const loadUser = (dispatch: Dispatch<UnknownAction>) => {
  try {
    const user = localStorage.getItem("user");

    // 로그인 상태가 아닌 경우 아무 것도 하지 않음.
    if (!user) {
      return;
    }

    const userInfo: { id: number; username: string } = JSON.parse(user);
    dispatch(tempSetUser(userInfo.id, userInfo.username));
    dispatch(check());
  } catch (e) {
    console.log("localStorage is not working");
  }
};

const LocalStorage = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const dispatch = useDispatch();

  useEffect(() => {
    loadUser(dispatch);
  }, [dispatch]);

  return <div>{children}</div>;
};

export default LocalStorage;
