import "@/styles/WriteActionButtons.scss";
import React from "react";
import Button from "../common/Button";

type MyProps = {
  onPublish: () => void;
  onCancel: () => void;
};

const WriteActionButtons = ({ onPublish, onCancel }: MyProps) => {
  return (
    <div className="WriteActionButtons">
      <Button onClick={onPublish}>포스트 등록</Button>
      <Button onClick={onCancel}>취소</Button>
    </div>
  );
};

export default WriteActionButtons;
