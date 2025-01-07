import CardOfEmployee from "./CardOfEmployee";
import "../style/team.css";

let employees = [
  {
    name: "Виктория Кантарович",
    img: "img/employees/Svetlana.JPG",
    description:
      "Опытная путешественница, объехавшая 183 страны. Главный редактор газеты «Путешественник Света»",
  },
  {
    name: "Екатерина Блинова",
    img: "img/employees/Katya.jpg",
    description:
      "Девушка, покорившая не только все континенты мира, но и Джомолунгму и Чогори",
  },
  {
    name: "Антон Птушкин",
    img: "img/employees/Anton.jpg",
    description:
      "Известный блогер и опытный путешественник с огромным опытом создания туристических маршрутов.",
  },
];

const Team = () => {
  return (
    <>
      <h1 id="our__team">Наша команда</h1>
      <div className="team">
        <div className="ourTeam">
          {employees.map((employee) => (
            <CardOfEmployee employee={employee} key={employee.name} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;