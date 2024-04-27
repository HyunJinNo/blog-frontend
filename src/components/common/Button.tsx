import "@/styles/Button.scss";

type MyProps = {
  children?: React.ReactNode;
  onClick?: () => void;
};

const Button = ({ children, onClick }: MyProps) => {
  return (
    <button className="Button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
