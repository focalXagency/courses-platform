// import CardStudentProject from "../CardStudentProject/CardStudentProject";
import CardStudentProject from "../../../Components/CardStudentProject/CardStudentProject";
import image1 from "./image/3d.png";
import image2 from "./image/abstract.png";
import image3 from "./image/vintage.png";
import "./Top3.css";

function Top3() {
  return (
    <div>
      <div className="RO-Top3">
        <h2>Top 3 styles in 2022</h2>
        <div className="RO-CardTop3">
          <CardStudentProject image={image1} title="3D" />
          <CardStudentProject image={image2} title="Abstract" />
          <CardStudentProject image={image3} title="Vintage & Retro" />
        </div>
      </div>
    </div>
  );
}

export default Top3;
