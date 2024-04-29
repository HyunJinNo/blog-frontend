import "@/styles/PostList.scss";
import PostItem from "./PostItem";
import Link from "next/link";
import { getPostList } from "@/lib/api/posts";

type MyProps = {
  page: number;
};

const getPosts = async (page: number) => {
  const response = await getPostList(page);
  return response.data;
};

const PostList = async ({ page }: MyProps) => {
  const posts = await getPosts(page);

  return (
    <div className="PostList">
      <div className="postListHead">
        <Link className="button" href="/write">
          새 글 작성하기
        </Link>
      </div>
      <div>
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostList;
