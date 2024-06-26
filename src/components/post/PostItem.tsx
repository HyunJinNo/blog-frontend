import "@/styles/PostItem.scss";
import SubInfo from "../common/SubInfo";
import Tags from "../common/Tags";
import { Post } from "@/constants/api/types";
import Link from "next/link";

type MyProps = {
  post: Post;
};

const PostItem = ({ post }: MyProps) => {
  return (
    <div className="PostItem">
      <Link className="title" href={`/posts/${post.id}`}>
        {post.title}
      </Link>
      <SubInfo username={post.username} date={post.date} />
      <Tags tags={post.tags} />
      <p>{post.body}</p>
    </div>
  );
};

export default PostItem;
