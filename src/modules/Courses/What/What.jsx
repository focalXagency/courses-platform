import "./What.css";
import img9 from "../../../assets/img/Rectangle 98.png";
import img10 from "../../../assets/img/Rectangle 99.png";

const What = () => {
  return (
    <section className="ma-what-section w-100 h-100 m-auto">
      <div className="ma-all-what d-flex flex-wrap align-items-center container">
        <div className="ma-what-part">
          <h1>What Will You Discover?</h1>
          <p>
            Explore new skills, deepen existing passions, and get lost in
            creativity. What you find just might surprise and inspire you
          </p>
          <a href="">
            <button>Try free </button>
          </a>
        </div>
        <div className="d-flex gap-3 flex-wrap justify-content-center">
          <div className="ma-what-cardOne d-flex flex-column align-items-center justify-content-center">
            <img src={img9} alt="" />
            <h3>Photo & Film</h3>
          </div>
          <div className="ma-what-cardTwo d-flex flex-column align-items-center justify-content-center">
            <img src={img10} alt="" />
            <h3>UI/UX Design</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default What;
