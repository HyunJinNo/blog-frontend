import "@/styles/PostViewer.scss";
import { readPost } from "@/lib/api/posts";
import { Post } from "@/constants/api/types";

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
        <div className="subInfo">
          <span>
            <b>{post.user_id}</b>
          </span>
          <span>{new Date().toLocaleDateString()}</span>
        </div>
        <div className="tags">
          {post.tags.map((tag, index) => (
            <div className="tag" key={index}>
              {tag}
            </div>
          ))}
        </div>
      </div>
      <div
        className="postContent"
        dangerouslySetInnerHTML={{ __html: post.body }}
      />
    </div>
  );
};

export default PostViewer;
