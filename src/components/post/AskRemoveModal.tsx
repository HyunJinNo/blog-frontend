import React from "react";
import AskModal from "../common/AskModal";

type MyProps = {
  visible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
};

const AskRemoveModal = ({ visible, onCancel, onConfirm }: MyProps) => {
  return (
    <AskModal
      visible={visible}
      title="포스트 삭제"
      description="포스트를 정말 삭제하시겠습니까?"
      confirmText="삭제"
      onCancel={onCancel}
      onConfirm={onConfirm}
    />
  );
};

export default AskRemoveModal;
