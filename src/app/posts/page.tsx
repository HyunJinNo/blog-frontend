import PostList from "@/components/post/PostList";

type MyProps = {
  searchParams: {
    page?: string;
  };
};

export default function PostListPage({ searchParams: { page } }: MyProps) {
  if (page === undefined) {
    return <PostList page={1} />;
  }

  const pageNum = Number(page);
  if (Number.isNaN(pageNum)) {
    throw Error("searchParams error");
  }

  return <PostList page={pageNum} />;
}
