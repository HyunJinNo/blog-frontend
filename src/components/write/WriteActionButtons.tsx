import "@/styles/WriteActionButtons.scss";
import React from "react";
import Button from "../common/Button";

type MyProps = {
  onPublish: () => void;
  onCancel: () => void;
  isEdit?: boolean;
};

const WriteActionButtons = ({ onPublish, onCancel, isEdit }: MyProps) => {
  return (
    <div className="WriteActionButtons">
      <Button onClick={onPublish}>
        {isEdit ? "포스트 수정" : "포스트 등록"}
      </Button>
      <Button onClick={onCancel}>취소</Button>
    </div>
  );
};

export default WriteActionButtons;
