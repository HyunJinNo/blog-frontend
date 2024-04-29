import "@/styles/PostItem.scss";
import SubInfo from "../common/SubInfo";
import Tags from "../common/Tags";
import { Post } from "@/constants/api/types";

type MyProps = {
  post: Post;
};

const PostItem = ({ post }: MyProps) => {
  return (
    <div className="PostItem">
      <h2>{post.title}</h2>
      <SubInfo user_id={post.user_id} />
      <Tags tags={post.tags} />
      <p>{post.body}</p>
    </div>
  );
};

export default PostItem;
