import HomeImage from "@/components/home/HomeImage";
import ProjectList from "@/components/home/ProjectList";
import HeaderContainer from "@/containers/common/HeaderContainer";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <HeaderContainer />
      <HomeImage>
        <Link href="/posts">포스트 목록</Link>
        <Link href="/write">포스트 작성</Link>
      </HomeImage>
      <ProjectList data_aos="fade-right" />
    </div>
  );
}
