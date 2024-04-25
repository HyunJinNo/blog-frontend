import client from "./client";

// 회원가입
export const register = ({
  username,
  password,
}: Readonly<{ username: string; password: string }>) => {
  return client.post("/api/auth/register", {
    username: username,
    password: password,
  });
};

// 로그인
export const login = ({
  username,
  password,
}: Readonly<{
  username: string;
  password: string;
}>) => {
  return client.post("/api/auth/login", {
    username: username,
    password: password,
  });
};

// 로그인 상태 확인
export const check = () => {
  return client.get("/api/auth/check");
};
