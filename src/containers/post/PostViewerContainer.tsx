"use client";

import PostViewer from "@/components/post/PostViewer";
import { removePost } from "@/lib/api/posts";
import { RootType } from "@/modules";
import { initialize, loadPost } from "@/modules/write";
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
  initialize: () => ReturnType<typeof initialize>;
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
  initialize,
}: MyProps) => {
  const params = useParams<{ id: string }>();
  const router = useRouter();

  // unmount 될 때 리덕스에서 post 데이터 삭제
  // 이는 포스트 작성 화면에서 리덕스에서 post 데이터가 존재하면
  // 자동으로 포스트 조회 화면으로 전환하기 때문.
  useEffect(() => {
    return () => {
      initialize();
    };
  }, [initialize]);

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
  ({ write, user }: RootType) => ({
    id: write.post?.id,
    title: write.title,
    body: write.body,
    tags: write.tags,
    user_id: write.post?.user_id,
    postError: write.postError,
    userId: user.id,
  }),
  { loadPost, initialize },
)(PostViewerContainer);
