import "@/styles/PostViewer.scss";
import { readPost } from "@/lib/api/posts";
import { Post } from "@/constants/api/types";
import SubInfo from "../common/SubInfo";
import Tags from "../common/Tags";

type MyProps = {
  id: number;
};

const getPost = async (id: number) => {
  const response = await readPost(id);
  return response.data;
};

const PostViewer = async ({ id }: MyProps) => {
  const post: Post = await getPost(id);

  return (
    <div className="PostViewer">
      <div className="postHead">
        <h1>{post.title}</h1>
        <SubInfo user_id={post.user_id} />
        <Tags tags={post.tags} />
      </div>
      <div
        className="postContent"
        dangerouslySetInnerHTML={{ __html: post.body }}
      />
    </div>
  );
};

export default PostViewer;
