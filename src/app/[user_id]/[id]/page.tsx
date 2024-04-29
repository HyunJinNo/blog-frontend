import PostViewer from "@/components/post/PostViewer";

type MyProps = {
  params: { id: string };
};

export default function PostPage({ params: { id } }: MyProps) {
  return <PostViewer id={Number(id)} />;
}
