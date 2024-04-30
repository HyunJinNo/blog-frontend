"use client";

import TagBox from "@/components/write/TagBox";
import { RootType } from "@/modules";
import { changeField } from "@/modules/write";
import { connect } from "react-redux";

type MyProps = {
  tags: string[];
  changeField: (key: string, value: string[]) => ReturnType<typeof changeField>;
};

const TagBoxContainer = ({ tags, changeField }: MyProps) => {
  const onChangeTags = (nextTags: string[]) => {
    changeField("tags", nextTags);
  };

  return <TagBox tags={tags} onChangeTags={onChangeTags} />;
};

export default connect(
  ({ write }: RootType) => ({
    tags: write.tags,
  }),
  { changeField },
)(TagBoxContainer);
