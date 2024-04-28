import PostList from "@/components/common/PostList";

type MyProps = {
  params: { username: string };
};

export default function PostListPage({ params: { username } }: MyProps) {
  return <PostList username={username} />;
}
