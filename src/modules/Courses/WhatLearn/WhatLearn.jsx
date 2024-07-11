import "./WhatLearn.css";
const WhatLearn = () => {
  return (
    <section className=" bg-dark p-5 ma-What-section">
      <div className=" d-flex align-items-start container ma-section-part justify-content-between flex-wrap">
        <div>
          <h1 className=" text-light">What you will learn</h1>
          <p className="ma-learn-paragraph2 text-white">
            The training is practice-oriented and is accompanied by mentors. By
            the end of the course, you will receive a portfolio of a novice
            product designer: from simple websites to interactive applications
            and presentations on ux research that can be shown to employers
          </p>
        </div>
        <div>
          <div className=" d-flex text-light flex-wrap gap-3">
            <div>
              <p className="ma-pOne">1</p>
              <p className="ma-pTwo">UX Research</p>
              <p className="ma-pThree">
                excepturi sint occaecati cupiditate non provident, similique
                sunt in culpa
              </p>
            </div>
            <div>
              <p className="ma-pOne">2</p>
              <p className="ma-pTwo">UX Research</p>
              <p className="ma-pThree">
                soluta nobis est eligendi optio cumque nihil impedit quo minus
                id quod maxime
              </p>
            </div>
          </div>
          <div className=" d-flex text-light flex-wrap gap-3">
            <div>
              <p className="ma-pOne">3</p>
              <p className="ma-pTwo">UX Research</p>
              <p className="ma-pThree">
                soluta nobis est eligendi optio cumque nihil impedit quo minus
                id quod maxime
              </p>
            </div>
            <div>
              <p className="ma-pOne">4</p>
              <p className="ma-pTwo">UX Research</p>
              <p className="ma-pThree">
                soluta nobis est eligendi optio cumque nihil impedit quo minus
                id quod maxime
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatLearn;
