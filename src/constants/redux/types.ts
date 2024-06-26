import { AxiosError } from "axios";
import { Post } from "../api/types";

export type AuthAction = {
  type: string;
  payload: {
    form: string;
    key: string;
    value: string;
    username: string;
    password: string;
    auth: {};
  };
  error: AxiosError;
};

export type AuthState = {
  register: {
    username: string;
    password: string;
    passwordConfirm: string;
  };
  login: {
    username: string;
    password: string;
  };
  auth: {} | null;
  authError: AxiosError | null;
};

export type LoadingAction = {
  type: string;
  payload: string;
};

export type UserAction = {
  type: string;
  payload: {
    id: number;
    username: string;
  };
  error: AxiosError;
};

export type UserState = {
  id: number;
  username: string | null;
  userError: AxiosError | null;
};

export type WriteAction = {
  type: string;
  payload: {
    key: string;
    value: string | string[];
    id: number;
  };
  error: AxiosError;
};

export type WriteState = {
  title: string;
  body: string;
  tags: string[];
  post: {
    id: number;
  } | null;
  postError: AxiosError | null;
};

export type PostAction = {
  type: string;
  payload: {
    key: string;
    value: string | string[];
    id: number;
    title: string;
    body: string;
    tags: string[];
    date: string;
    user_id: number;
    username: string;
  };
  error: AxiosError;
};

export type PostState = {
  post: Post | null;
  postError: AxiosError | null;
  isUpdated: boolean;
};
