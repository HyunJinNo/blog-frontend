"use client";

import PostViewer from "@/components/post/PostViewer";
import { Post } from "@/constants/api/types";
import { removePost } from "@/lib/api/posts";
import { RootType } from "@/modules";
import { loadPost, unloadPost } from "@/modules/post";
import { AxiosError } from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { connect } from "react-redux";

type MyProps = {
  post: Post | null;
  postError: AxiosError | null;
  currentUsername?: string | null;
  loadPost: (id: number) => ReturnType<typeof loadPost>;
  unloadPost: () => ReturnType<typeof unloadPost>;
};

const PostViewerContainer = ({
  post,
  postError,
  currentUsername, // 현재 로그인한 username
  loadPost,
  unloadPost,
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

  useEffect(() => {
    return () => {
      unloadPost();
    };
  }, [unloadPost]);

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
      post={post}
      currentUsername={currentUsername}
      onRemove={onRemove}
    />
  );
};

export default connect(
  ({ post, user }: RootType) => ({
    post: post.post,
    postError: post.postError,
    currentUsername: user.username,
  }),
  { loadPost, unloadPost },
)(PostViewerContainer);
