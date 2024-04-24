import "@/styles/AuthTemplate.scss";
import Link from "next/link";

const AuthTemplate = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="AuthTemplate">
      <div className="whiteBox">
        <div className="logo-area">
          <Link href={"/"}>{"HyunJinNo's Blog"}</Link>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthTemplate;
