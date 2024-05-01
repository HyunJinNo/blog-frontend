import "@/styles/SubInfo.scss";

type MyProps = {
  user_id: number;
  date: string;
};

const SubInfo = ({ user_id, date }: MyProps) => {
  return (
    <div className="SubInfo">
      <span>
        <b>{user_id}</b>
      </span>
      <span>{new Date(date).toLocaleString()}</span>
    </div>
  );
};

export default SubInfo;
