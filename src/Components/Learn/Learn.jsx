import "./Learn.css";
const Learn = () => {
  return (
    <section className="ma-section-learn bg-dark p-5">
      <div className=" d-flex align-items-center container ma-section-part justify-content-between flex-wrap">
        <div>
          <h1 className=" text-light">What you will learn</h1>
          <p className="ma-learn-paragraph text-light">
            Up-to-date knowledge from recognized market experts for beginners
            and practitioners
          </p>
          <p className="ma-learn-paragraph text-light">
            On the platform, you can gain knowledge on current topics and
            in-demand skills. All courses are aimed at practice: we monitor the
            relevance of the material and help with employment and internship
          </p>
        </div>
        <div className="d-flex gap-5 ma-learn-section flex-wrap">
          <div className="ma-learn-num ">
            <h1>56</h1>
            <p>Courses</p>
            <div className="ma-section-underline"></div>
          </div>
          <div className="ma-learn-num">
            <h1>108</h1>
            <p>Courses</p>
            <div className="ma-section-underline"></div>
          </div>
          <div className="ma-learn-num">
            <h1>3 723</h1>
            <p>Courses</p>
            <div className="ma-section-underline"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Learn;
