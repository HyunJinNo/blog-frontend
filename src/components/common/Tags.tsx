import "@/styles/Tags.scss";

type MyProps = {
  tags: string[];
};

const Tags = ({ tags }: MyProps) => {
  return (
    <div className="Tags">
      {tags.map((tag, index) => (
        <div className="tag" key={index}>
          {tag}
        </div>
      ))}
    </div>
  );
};

export default Tags;
