import "@/styles/PostViewer.scss";
import SubInfo from "../common/SubInfo";
import Tags from "../common/Tags";
import PostActionButtons from "./PostActionButtons";
import { Post } from "@/constants/api/types";

type MyProps = {
  post: Post | null;
  currentUsername?: string | null; // 현재 로그인한 username
  onRemove: () => void;
};

const PostViewer = ({ post, currentUsername, onRemove }: MyProps) => {
  return (
    <div className="PostViewer">
      <div className="postHead">
        <h1>{post?.title}</h1>
        <SubInfo username={post?.username} date={post?.date ?? ""} />
        <Tags tags={post?.tags ?? []} />
      </div>
      {post?.username === currentUsername && (
        <PostActionButtons id={post?.id ?? 0} onRemove={onRemove} />
      )}
      <div
        className="postContent"
        dangerouslySetInnerHTML={{ __html: post?.body ?? "" }}
      />
    </div>
  );
};

export default PostViewer;
