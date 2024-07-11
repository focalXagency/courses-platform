import "./ProjectStudent.css";
import MobImg from "./images/mobile.png";
import doorImg from "./images/door.png";
import ballImg from "./images/ball.png";
import artImg from "./images/art.png";
import CardStudentProject from "../../../Components/CardStudentProject/CardStudentProject";
// import CardStudentProject from "../../../Components/CardStudentProject/CardStudentProject";

function ProjectStudent() {
  return (
    <div>
      <div className="RO-SProject">
        <h2>Projects of our students</h2>

        <div className="Cards ">
          <CardStudentProject image={artImg} title="Landing page" />
          <CardStudentProject image={MobImg} title="Mobile App" />
          <CardStudentProject image={ballImg} title="E-commerce" />
          <CardStudentProject image={doorImg} title="Redesign Concept" />
        </div>
      </div>
    </div>
  );
}

export default ProjectStudent;
