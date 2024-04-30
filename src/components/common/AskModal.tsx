import "@/styles/AskModal.scss";
import Button from "./Button";

type MyProps = {
  visible: boolean;
  title: string;
  description: string;
  cancelText?: string;
  confirmText?: string;
  onCancel: () => void;
  onConfirm: () => void;
};

const AskModal = ({
  visible,
  title,
  description,
  cancelText = "취소",
  confirmText = "확인",
  onCancel,
  onConfirm,
}: MyProps) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="AskModal">
      <div className="askModalBlock">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="buttonGroup">
          <Button onClick={onCancel}>{cancelText}</Button>
          <Button onClick={onConfirm}>{confirmText}</Button>
        </div>
      </div>
    </div>
  );
};

export default AskModal;
