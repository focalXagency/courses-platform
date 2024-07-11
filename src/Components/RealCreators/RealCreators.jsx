import IconRight from "./assets/images/IconRight.svg";
// import CardRealCreators from '../CardRealCreators/CardRealCreators';
import JeffImg from "./assets/images/Jeff.png";
import JakeImg from "./assets/images/JakeBartlett.png";
import JoriImg from "./assets/images/jorikkleen.png";
import laurImg from "./assets/images/laurence-cruz.png";
import "./assets/css/RealCreators.css";
import CardRealCreators from "../../modules/Blogs/CardRealCreators/CardRealCreators";
import { useEffect, useState } from "react";
import axios from "axios";

function RealCreators() {
  // fetch data for teacher in main page
  const [data, setData] = useState([]);
  useEffect(() => {
    try {
      const res = axios
        .get("http://127.0.0.1:8000/api/teacher")
        .then((res) => setData(res.data.data));
    } catch (err) {
      console.log(err);
    }
  }, []);
  console.log(data);

  const showData = data.slice(0, 4).map((item, index) => {
    return (
      <div key={index}>
        <CardRealCreators
          image={item.image}
          name={item.first_name}
          career={item.specialization}
          path="#"
        />
      </div>
    );
  });
  return (
    <div className=" Creators">
      {/* title and text under title  */}
      <h2 className="RO-SectionTitle">Classes Taught by Real Creators</h2>
      <div className="d-flex RO-CreatorMarginP">
        <p className="CreatorTitleP">
          Lorem teachers are icons, experts, and industry rock stars excited to
          share their experience, wisdom, and trusted tools with you
        </p>
        <button className="CreatorButton">
          See more <img src={IconRight} alt="Icon right arrow" />
        </button>
      </div>

      {/* cards */}
      <div className="RO-CreatorCards">{showData}</div>
    </div>
  );
}

export default RealCreators;
