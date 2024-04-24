import Button from "./Button";

type MyProps = {
  username?: string;
};

const PostList = ({ username }: MyProps) => {
  return (
    <div>
      포스트 리스트 {username}
      <Button>버튼</Button>
    </div>
  );
};

export default PostList;
