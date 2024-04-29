import "@/styles/PostList.scss";
import PostItem from "./PostItem";
import Link from "next/link";

type MyProps = {
  username?: string;
};

const PostList = ({ username }: MyProps) => {
  return (
    <div className="PostList">
      <div className="postListHead">
        <Link className="button" href="/write">
          새 글 작성하기
        </Link>
      </div>
      <div>
        <PostItem />
        <PostItem />
        <PostItem />
      </div>
    </div>
  );
};

export default PostList;
