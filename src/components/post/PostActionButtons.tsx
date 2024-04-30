import "@/styles/PostActionButtons.scss";
import Link from "next/link";

type MyProps = {
  id: number;
};

const PostActionButtons = ({ id }: MyProps) => {
  return (
    <div className="PostActionButtons">
      <Link className="actionButton" href={`/edit/${id}`}>
        수정
      </Link>
      <button className="actionButton">삭제</button>
    </div>
  );
};

export default PostActionButtons;
