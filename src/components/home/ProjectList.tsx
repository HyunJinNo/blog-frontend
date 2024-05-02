import "@/styles/ProjectList.scss";

type MyProps = {
  data_aos?: string;
};

const ProjectList = ({ data_aos }: MyProps) => {
  return (
    <div className="ProjectList" data-aos={data_aos} data-aos-offset="300">
      <div className="slider">
        <div className="cardView">{"slice 1"}</div>
        <div className="cardView">{"slice 2"}</div>
        <div className="cardView">{"slice 3"}</div>
        <div className="cardView">{"slice 1"}</div>
        <div className="cardView">{"slice 2"}</div>
        <div className="cardView">{"slice 3"}</div>
      </div>
    </div>
  );
};

export default ProjectList;
