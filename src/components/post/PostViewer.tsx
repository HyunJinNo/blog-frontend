import "@/styles/PostViewer.scss";
import SubInfo from "../common/SubInfo";
import Tags from "../common/Tags";
import PostActionButtons from "./PostActionButtons";

type MyProps = {
  id?: number;
  title: string;
  body: string;
  tags: string[];
  user_id?: number;
};

const PostViewer = ({ id, title, body, tags, user_id }: MyProps) => {
  return (
    <div className="PostViewer">
      <div className="postHead">
        <h1>{title}</h1>
        <SubInfo user_id={user_id!} />
        <Tags tags={tags} />
      </div>
      <PostActionButtons id={id!} />
      <div className="postContent" dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  );
};

export default PostViewer;
