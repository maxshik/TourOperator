import { Image } from "antd";
import "../style/team.css";

const CardOfEmployee = ({ employee }) => {
  return (
    <div className="cardOfEmployee">
      <Image width={330} height={400} src={employee.img} />
      <h3>{employee.name}</h3>
      <p>{employee.description}</p>
    </div>
  );
};

export default CardOfEmployee;
