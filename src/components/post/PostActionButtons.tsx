"use client";

import "@/styles/PostActionButtons.scss";
import Link from "next/link";
import { useState } from "react";
import AskRemoveModal from "./AskRemoveModal";

type MyProps = {
  id: number;
  onRemove: () => void;
};

const PostActionButtons = ({ id, onRemove }: MyProps) => {
  const [visible, setVisible] = useState(false);
  const onRemoveClick = () => {
    setVisible(true);
  };
  const onCancel = () => {
    setVisible(false);
  };
  const onConfirm = () => {
    setVisible(false);
    onRemove();
  };

  return (
    <div className="PostActionButtons">
      <Link className="actionButton" href={`/edit/${id}`}>
        수정
      </Link>
      <button className="actionButton" onClick={onRemoveClick}>
        삭제
      </button>
      <AskRemoveModal
        visible={visible}
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    </div>
  );
};

export default PostActionButtons;
