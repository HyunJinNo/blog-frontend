type MyProps = {
  params: { postId: string };
};

export default function PostPage({ params: { postId } }: MyProps) {
  return <div>포스트 읽기 {postId}</div>;
}
