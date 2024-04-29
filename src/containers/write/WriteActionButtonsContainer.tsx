"use client";

import WriteActionButtons from "@/components/write/WriteActionButtons";
import { WriteState } from "@/constants/redux/types";
import { RootType } from "@/modules";
import { writePost } from "@/modules/write";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { connect } from "react-redux";

type MyProps = {
  write: WriteState;
  writePost: (title: string, body: string, tags: string[]) => void;
};

const WriteActionButtonsContainer = ({ write, writePost }: MyProps) => {
  const { title, body, tags, post, postError } = write;
  const router = useRouter();

  // 포스트 등록
  const onPublish = () => {
    writePost(title, body, tags);
  };

  // 취소
  const onCancel = () => {
    router.back(); // 이전 페이지로 이동
  };

  // 성공 또는 실패 시 수행할 작업
  useEffect(() => {
    if (post) {
      const { id } = post;
      router.push(`/posts/${id}`);
    }
    if (postError) {
      console.log(postError);
    }
  }, [post, postError, router]);

  return <WriteActionButtons onPublish={onPublish} onCancel={onCancel} />;
};

export default connect(
  ({ write }: RootType) => ({
    write: write,
  }),
  { writePost },
)(WriteActionButtonsContainer);
