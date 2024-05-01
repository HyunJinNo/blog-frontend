"use client";

import Editor from "@/components/write/Editor";
import { RootType } from "@/modules";
import { changeField } from "@/modules/post";
import { useCallback } from "react";
import { connect } from "react-redux";

type MyProps = {
  title: string;
  body: string;
  changeField: (key: string, value: string) => ReturnType<typeof changeField>;
};

const EditorContainer = ({
  title,
  body,
  changeField: changeField,
}: MyProps) => {
  const onChangeField = useCallback(
    (key: string, value: string) => changeField(key, value),
    [changeField],
  );

  return <Editor title={title} body={body} onChangeField={onChangeField} />;
};

export default connect(
  ({ post }: RootType) => ({
    title: post.post?.title ?? "",
    body: post.post?.body ?? "",
  }),
  { changeField },
)(EditorContainer);
