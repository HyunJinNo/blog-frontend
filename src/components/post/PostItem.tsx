import "@/styles/PostItem.scss";
import SubInfo from "../common/SubInfo";
import Tags from "../common/Tags";

const PostItem = () => {
  return (
    <div className="PostItem">
      <h2>제목</h2>
      <SubInfo user_id={10000} />
      <Tags tags={["태그 1", "태그 3"]} />
      <p>포스트 내용의 일부분...</p>
    </div>
  );
};

export default PostItem;
