"use client";

import WriteActionButtons from "@/components/write/WriteActionButtons";
import { WriteState } from "@/constants/redux/types";
import { RootType } from "@/modules";
import { initialize, writePost } from "@/modules/write";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { connect } from "react-redux";

type MyProps = {
  write: WriteState;
  username: string | null;
  writePost: (
    title: string,
    body: string,
    tags: string[],
  ) => ReturnType<typeof writePost>;
  initialize: () => ReturnType<typeof initialize>;
};

const WriteActionButtonsContainer = ({
  write,
  username,
  writePost,
  initialize,
}: MyProps) => {
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

  // 로그인을 하지 않은 경우 로그인 화면으로 이동함.
  useEffect(() => {
    if (username === null) {
      router.replace("/login");
    }
  }, [router, username]);

  // 페이지에서 벗어났을 경우 초기화함.
  useEffect(() => {
    return () => {
      initialize();
    };
  }, [initialize]);

  // 성공 또는 실패 시 수행할 작업
  useEffect(() => {
    if (post) {
      router.push(`/posts/${post.id}`);
    }
    if (postError) {
      console.log(postError);
    }
  }, [post, postError, router]);

  return <WriteActionButtons onPublish={onPublish} onCancel={onCancel} />;
};

export default connect(
  ({ write, user }: RootType) => ({
    write: write,
    username: user.username,
  }),
  { writePost, initialize },
)(WriteActionButtonsContainer);
