import PenaImg from "./images/pena.png";
import cameronImg from "./images/cameron.png";
import krisImg from "./images/kristeen.png";
import floydImg from "./images/floyd.png";
import "./Teachers.css";
import CardRealCreators from "../../Blogs/CardRealCreators/CardRealCreators";

function Teachers() {
  return (
    <div>
      <div className=" Creators">
        {/* title and text under title  */}
        <h2 className="RO-SectionTitle RO-TeachersTitle">Teachers</h2>

        {/* cards */}
        <div className="RO-CreatorCards">
          <div>
            <CardRealCreators
              image={PenaImg}
              name="Eleanor Pena"
              career="UI Designer"
              path="#"
            ></CardRealCreators>
          </div>
          <div className="RO-Card2">
            <CardRealCreators
              image={cameronImg}
              name="Cameron Williamson"
              career="UX Designer"
              path="#"
            />
          </div>
          <div>
            <CardRealCreators
              image={floydImg}
              name="Floyd Miles"
              career="Programmer"
              path="#"
            />
          </div>
          <div className="RO-Card2">
            <CardRealCreators
              image={krisImg}
              name="Kristin Watson"
              career="UX/UI Designer"
              path="#"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teachers;
