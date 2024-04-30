"use client";

import PostViewer from "@/components/post/PostViewer";
import { removePost } from "@/lib/api/posts";
import { RootType } from "@/modules";
import { loadPost } from "@/modules/post";
import { AxiosError } from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { connect } from "react-redux";

type MyProps = {
  id?: number;
  title: string;
  body: string;
  tags: string[];
  user_id?: number;
  postError: AxiosError | null;
  userId: number;
  loadPost: (id: number) => ReturnType<typeof loadPost>;
};

const PostViewerContainer = ({
  id,
  title,
  body,
  tags,
  user_id, // 포스트를 작성한 아이디
  postError,
  userId, // 현재 로그인한 아이디
  loadPost,
}: MyProps) => {
  const params = useParams<{ id: string }>();
  const router = useRouter();

  useEffect(() => {
    loadPost(Number(params.id));
  }, [loadPost, params.id]);

  useEffect(() => {
    if (postError) {
      throw Error("Not Found");
    }
  }, [postError]);

  const onRemove = async () => {
    try {
      await removePost(Number(params.id));
      router.replace("/posts");
      router.refresh();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <PostViewer
      id={id}
      title={title}
      body={body}
      tags={tags}
      user_id={user_id}
      userId={userId}
      onRemove={onRemove}
    />
  );
};

export default connect(
  ({ post, user }: RootType) => ({
    id: post.post?.id,
    title: post.title,
    body: post.body,
    tags: post.tags,
    user_id: post.post?.user_id,
    postError: post.postError,
    userId: user.id,
  }),
  { loadPost },
)(PostViewerContainer);
