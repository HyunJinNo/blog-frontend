import "@/styles/HomeImage.scss";

type MyProps = {
  children: React.ReactNode;
};

const HomeImage = ({ children }: MyProps) => {
  return <div className="HomeImage">{children}</div>;
};

export default HomeImage;
