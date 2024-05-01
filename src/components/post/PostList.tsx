import "@/styles/PostList.scss";
import PostItem from "./PostItem";
import Link from "next/link";
import { getPostList } from "@/lib/api/posts";
import Pagination from "./Pagination";
import CardView from "../common/CardView";

type MyProps = {
  page: number;
};

const getPosts = async (page: number) => {
  const response = await getPostList(page);
  return response;
};

const PostList = async ({ page }: MyProps) => {
  const response = await getPosts(page);
  const posts = response.data;
  const lastPage: number = Number(response.headers["lastpage"]);

  return (
    <div className="PostList">
      <div className="postListHead">
        <Link className="button" href="/write">
          새 글 작성하기
        </Link>
      </div>
      <div>
        {posts.map((post) => (
          <Link key={post.id} href={`/posts/${post.id}`}>
            <CardView>
              <PostItem key={post.id} post={post} />
            </CardView>
          </Link>
        ))}
      </div>
      <Pagination page={page} lastPage={lastPage} />
    </div>
  );
};

export default PostList;
