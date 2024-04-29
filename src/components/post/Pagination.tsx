import "@/styles/Pagination.scss";
import Link from "next/link";

type MyProps = {
  page: number;
  lastPage: number;
};

const Pagination = ({ page, lastPage }: MyProps) => {
  return (
    <div className="Pagination">
      <div className="buttonGroup">
        {page === 1 ? (
          <div className="button disabled">맨앞</div>
        ) : (
          <Link className="button" href="/posts?page=1">
            맨앞
          </Link>
        )}
        {page === 1 ? (
          <div className="button disabled">이전</div>
        ) : (
          <Link
            className="button"
            href={page >= 2 ? `/posts?page=${page - 1}` : "/posts?page=1"}
          >
            이전
          </Link>
        )}
      </div>
      <div>{page}</div>
      <div className="buttonGroup">
        {page === lastPage ? (
          <div className="button disabled">다음</div>
        ) : (
          <Link
            className="button"
            href={
              page < lastPage
                ? `/posts?page=${page + 1}`
                : `/posts?page=${lastPage}`
            }
          >
            다음
          </Link>
        )}
        {page === lastPage ? (
          <div className="button disabled">맨뒤</div>
        ) : (
          <Link className="button" href={`/posts?page=${lastPage}`}>
            맨뒤
          </Link>
        )}
      </div>
    </div>
  );
};

export default Pagination;
