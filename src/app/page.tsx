import HeaderContainer from "@/containers/common/HeaderContainer";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <HeaderContainer />
      <h1>안녕하세요.</h1>
      <Link href="/posts">포스트 목록</Link>
      <br />
      <Link href="/write">포스트 작성</Link>
    </div>
  );
}
