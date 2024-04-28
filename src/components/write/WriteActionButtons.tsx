import "@/styles/WriteActionButtons.scss";
import React from "react";
import Button from "../common/Button";

const WriteActionButtons = () => {
  return (
    <div className="WriteActionButtons">
      <Button>포스트 등록</Button>
      <Button>취소</Button>
    </div>
  );
};

export default WriteActionButtons;
