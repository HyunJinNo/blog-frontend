import styles from "../styles/Button.module.scss";

type MyProps = {
  children: React.ReactNode;
};

const Button = ({ children }: MyProps) => {
  return <button className={styles.Button}>{children}</button>;
};

export default Button;
