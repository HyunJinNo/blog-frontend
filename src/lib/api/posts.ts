import { Post } from "@/constants/api/types";
import client from "./client";
import dotenv from "dotenv";

dotenv.config();

// 포스트 작성
export const writePost = ({
  title,
  body,
  tags,
}: Readonly<{ title: string; body: string; tags: string[] }>) => {
  return client.post("/api/posts", {
    title: title,
    body: body,
    tags: tags,
  });
};

// 포스트 목록 조회
export const getPostList = (page: number) => {
  return client.get<Post[]>(`${process.env.API_BASE_URL}/api/posts`, {
    params: { page: page },
  });
};

// 특정 포스트 조회
export const readPost = (id: number) => {
  return client.get<Post>(`${process.env.API_BASE_URL}/api/posts/${id}`);
};
