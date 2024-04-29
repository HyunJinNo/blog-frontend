import "@/styles/SubInfo.scss";

type MyProps = {
  user_id: number;
};

const SubInfo = ({ user_id }: MyProps) => {
  return (
    <div className="SubInfo">
      <span>
        <b>{user_id}</b>
      </span>
      <span>{new Date().toLocaleDateString()}</span>
    </div>
  );
};

export default SubInfo;
