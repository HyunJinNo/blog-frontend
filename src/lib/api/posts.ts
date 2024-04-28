import client from "./client";

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
