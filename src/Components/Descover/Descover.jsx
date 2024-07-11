import img4 from "./../../assets/img/image Sales marketing (1).png";
import img5 from "./../../assets/img/Image data analytics (1).png";
import img6 from "./../../assets/img/Image design art (1).png";
import img7 from "./../../assets/img/image Animation (1).png";
import img8 from "./../../assets/img/Icon arrow.png";
import "./Descover.css";
import DescoverContent from "../DescoverContent/DescoverContent";
const Descover = () => {
  return (
    <section className="ma-section-descover container">
      <h1>Discover Lifelong Learning</h1>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="collapse navbar-collapse justify-content-between">
            <div className="navbar-nav gap-4 d-flex align-items-center ma-descover-list">
              <a
                className="nav-link active fw-bold ma-underline-descover"
                aria-current="page"
                href="#"
              >
                Popular
              </a>
              <a className="nav-link" href="#">
                Animation
              </a>
              <a className="nav-link" href="#">
                Design
              </a>
              <a className="nav-link" href="#">
                Illustration
              </a>
              <a className="nav-link" href="#">
                Programming
              </a>
              <a className="nav-link" href="#">
                Photo & Film
              </a>
              <a className="nav-link" href="#">
                Marketing
              </a>
            </div>
          </div>
        </nav>
        <div className=" d-flex flex-wrap gap-2 flex-row">
          <DescoverContent
            imgOne={img4}
            h3="Sales Marketing"
            p="6 months"
            imgTow={img8}
          />
          <div className="ma-descover-name m-auto ">
            <img src={img5} alt="" className="ma-descover-card2 " />
            <h3>Data analytics</h3>
            <div className="d d-flex justify-content-between align-items-center">
              <p>9 months</p>
              <img src={img8} alt="" />
            </div>
          </div>
          <DescoverContent
            imgOne={img6}
            h3="Design art"
            p="4 months"
            imgTow={img8}
          />
          <DescoverContent
            imgOne={img7}
            h3="Sales Marketing"
            p="months"
            imgTow={img8}
          />
        </div>
      </div>
    </section>
  );
};

export default Descover;
