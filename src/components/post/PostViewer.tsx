import "@/styles/PostViewer.scss";
import SubInfo from "../common/SubInfo";
import Tags from "../common/Tags";
import PostActionButtons from "./PostActionButtons";

type MyProps = {
  id?: number;
  title: string;
  body: string;
  tags: string[];
  date: string;
  user_id?: number; // 포스트를 작성한 아이디
  userId: number; // 현재 로그인한 아이디
  onRemove: () => void;
};

const PostViewer = ({
  id,
  title,
  body,
  tags,
  date,
  user_id,
  userId,
  onRemove,
}: MyProps) => {
  return (
    <div className="PostViewer">
      <div className="postHead">
        <h1>{title}</h1>
        <SubInfo user_id={user_id!} date={date} />
        <Tags tags={tags} />
      </div>
      {user_id === userId && <PostActionButtons id={id!} onRemove={onRemove} />}
      <div className="postContent" dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  );
};

export default PostViewer;
