import "@/styles/PostViewer.scss";
import { readPost } from "@/lib/api/posts";
import SubInfo from "../common/SubInfo";
import Tags from "../common/Tags";
import PostActionButtons from "./PostActionButtons";

type MyProps = {
  id: number;
};

const getPost = async (id: number) => {
  const response = await readPost(id);
  return response.data;
};

const PostViewer = async ({ id }: MyProps) => {
  const post = await getPost(id);

  return (
    <div className="PostViewer">
      <div className="postHead">
        <h1>{post.title}</h1>
        <SubInfo user_id={post.user_id} />
        <Tags tags={post.tags} />
      </div>
      <PostActionButtons id={post.id} />
      <div
        className="postContent"
        dangerouslySetInnerHTML={{ __html: post.body }}
      />
    </div>
  );
};

export default PostViewer;
