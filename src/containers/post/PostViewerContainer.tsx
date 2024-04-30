"use client";

import PostViewer from "@/components/post/PostViewer";
import { RootType } from "@/modules";
import { loadPost } from "@/modules/write";
import { AxiosError } from "axios";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { connect } from "react-redux";

type MyProps = {
  id?: number;
  title: string;
  body: string;
  tags: string[];
  user_id?: number;
  postError: AxiosError | null;
  loadPost: (id: number) => ReturnType<typeof loadPost>;
};

const PostViewerContainer = ({
  id,
  title,
  body,
  tags,
  user_id,
  postError,
  loadPost,
}: MyProps) => {
  const params = useParams<{ id: string }>();

  useEffect(() => {
    loadPost(Number(params.id));
  }, [loadPost, params.id]);

  useEffect(() => {
    if (postError) {
      throw Error("Not Found");
    }
  }, [postError]);

  return (
    <PostViewer
      id={id}
      title={title}
      body={body}
      tags={tags}
      user_id={user_id}
    />
  );
};

export default connect(
  ({ write }: RootType) => ({
    id: write.post?.id,
    title: write.title,
    body: write.body,
    tags: write.tags,
    user_id: write.post?.user_id,
    postError: write.postError,
  }),
  { loadPost },
)(PostViewerContainer);
