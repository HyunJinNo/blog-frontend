"use client";

import Responsive from "@/components/common/Responsive";
import WriteActionButtonsContainer from "@/containers/edit/WriteActionButtonsContainer";
import EditorContainer from "@/containers/write/EditorContainer";
import TagBoxContainer from "@/containers/write/TagBoxContainer";
import { loadPost } from "@/modules/write";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

type MyProps = {
  params: { id: string };
};

export default function EditPage({ params: { id } }: MyProps) {
  const postId = Number(id);
  if (Number.isNaN(postId)) {
    throw Error("params error");
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPost(postId));
  }, [dispatch, postId]);

  return (
    <Responsive>
      <EditorContainer />
      <TagBoxContainer />
      <WriteActionButtonsContainer />
    </Responsive>
  );
}
