import "./platform.css";
const Platform = () => {
  return (
    <section className="ma-section-platform ">
      <div className=" d-flex align-items-start container ma-section-part justify-content-between flex-wrap container">
        <div>
          <h1 className=" text-dark">Profession UI/UX designer</h1>
          <p className="ma-learn-paragraph">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis occaecati cupiditate non provident, similique sunt in
            culpa qui officia deserunt mollitia animi, id est laborum et dolorum
            fuga.
          </p>
        </div>
        <div className="d-flex gap-5 ma-learn-section flex-wrap">
          <div className="ma-paragraph-num">
            <h1>5 000 $</h1>
            <p>Salary</p>
            <div className="ma-section-underline"></div>
            <p className=" pt-3">Nam libero tempore, cum soluta nobis est</p>
          </div>
          <div className="ma-paragraph-num">
            <h1>4 225</h1>
            <p>Vacancies</p>
            <div className="ma-section-underline"></div>
            <p className=" pt-3">Vero eos et accusamus</p>
          </div>
        </div>
      </div>
      <div className=" d-flex gap-3 flex-wrap container">
        <div className="ma-card-style">
          <p className="ma-card-p">Portfolio</p>
          <div className="ma-card-underline"></div>
          <p>
            You will learn how to create a brand identity on the web and for
            printing. Learn how to work in Illustrator, Photoshop, InDesign and
            Figma
          </p>
        </div>
        <div className="ma-card-style2">
          <p className="ma-card-p">Internship</p>
          <div className="ma-card-underline"></div>
          <p>
            You will learn how to create a brand identity on the web and for
            printing. Learn how to work in Illustrator, Photoshop, InDesign and
            Figma
          </p>
        </div>
        <div className="ma-card-style3">
          <p className="ma-card-p">Certificate</p>
          <div className="ma-card-underline"></div>
          <p>
            You will learn how to create a brand identity on the web and for
            printing. Learn how to work in Illustrator, Photoshop, InDesign and
            Figma
          </p>
        </div>
      </div>
    </section>
  );
};

export default Platform;
