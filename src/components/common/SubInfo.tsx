import "@/styles/SubInfo.scss";

type MyProps = {
  username?: string;
  date: string;
};

const SubInfo = ({ username, date }: MyProps) => {
  return (
    <div className="SubInfo">
      <span>
        <b>{username}</b>
      </span>
      <span>{new Date(date).toLocaleString()}</span>
    </div>
  );
};

export default SubInfo;
