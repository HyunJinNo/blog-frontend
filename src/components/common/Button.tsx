import "@/styles/Button.scss";

type MyProps = {
  children?: React.ReactNode;
};

const Button = ({ children }: MyProps) => {
  return <button className="Button">{children}</button>;
};

export default Button;
