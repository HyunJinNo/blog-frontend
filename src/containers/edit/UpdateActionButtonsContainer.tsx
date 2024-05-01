"use client";

import WriteActionButtons from "@/components/write/WriteActionButtons";
import { PostState } from "@/constants/redux/types";
import { RootType } from "@/modules";
import { updatePost } from "@/modules/post";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { connect } from "react-redux";

type MyProps = {
  postState: PostState;
  updatePost: (
    id: number,
    title?: string,
    body?: string,
    tags?: string[],
  ) => ReturnType<typeof updatePost>;
};

const UpdateActionButtonsContainer = ({ postState, updatePost }: MyProps) => {
  const { post, postError, isUpdated } = postState;
  const router = useRouter();
  const params = useParams<{ id: string }>();

  // 포스트 수정
  const onPublish = () => {
    updatePost(Number(params.id), post?.title, post?.body, post?.tags);
  };

  // 취소
  const onCancel = () => {
    router.back(); // 이전 페이지로 이동
  };

  // 성공 또는 실패 시 수행할 작업
  useEffect(() => {
    if (isUpdated) {
      router.push(`/posts/${params.id}`);
    }
    if (postError) {
      console.log(postError);
    }
  }, [isUpdated, params.id, postError, router]);

  return <WriteActionButtons onPublish={onPublish} onCancel={onCancel} />;
};

export default connect(
  ({ post }: RootType) => ({
    postState: post,
  }),
  { updatePost },
)(UpdateActionButtonsContainer);
