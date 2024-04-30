"use client";

import WriteActionButtons from "@/components/write/WriteActionButtons";
import { WriteState } from "@/constants/redux/types";
import { RootType } from "@/modules";
import { updatePost } from "@/modules/write";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { connect } from "react-redux";

type MyProps = {
  write: WriteState;
  updatePost: (
    id: number,
    title?: string,
    body?: string,
    tags?: string[],
  ) => void;
};

const WriteActionButtonsContainer = ({ write, updatePost }: MyProps) => {
  const { title, body, tags, post, postError, isUpdated } = write;
  const postId = Object.assign({}, post).id;
  const router = useRouter();

  // 포스트 수정
  const onPublish = () => {
    updatePost(post?.id!, title, body, tags);
  };

  // 취소
  const onCancel = () => {
    router.back(); // 이전 페이지로 이동
  };

  // 성공 또는 실패 시 수행할 작업
  useEffect(() => {
    if (isUpdated) {
      router.push(`/posts`);
    }
    /*
    if (!post) {
      router.push(`/posts/${postId}`);
    }
    */
    if (postError) {
      console.log(postError);
    }
  }, [isUpdated, postError, postId, router]);

  return <WriteActionButtons onPublish={onPublish} onCancel={onCancel} />;
};

export default connect(
  ({ write }: RootType) => ({
    write: write,
  }),
  { updatePost },
)(WriteActionButtonsContainer);
