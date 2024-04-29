import PostList from "@/components/post/PostList";

type MyProps = {
  params: { username: string };
};

export default function PostListPage({ params: { username } }: MyProps) {
  return <PostList username={username} />;
}
