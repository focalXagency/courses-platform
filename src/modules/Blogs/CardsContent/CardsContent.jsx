const CardsContent = (props) => {
  return (
    <div className=" d-flex ma-nav2-card gap-5 flex-wrap">
      <img src={props.img100} alt="" />
      <div className="ma-card-package">
        <div className="ma-nav2-underline"></div>
        <h2>{props.h2}</h2>
        <a href="" className=" text-decoration-none">
          {props.a}
        </a>
        <p className="ma-nav2-p">{props.p}</p>
        <div className=" d-flex align-items-center justify-content-between flex-wrap ma-worp">
          <div className=" d-flex align-items-center gap-2 flex-wrap ma-clock">
            <img src={props.img99} alt="" className=" mb-3" />
            <p className=" text-black-50">{props.p2}</p>
          </div>
          <p className=" text-black-50">{props.p3}</p>
        </div>
      </div>
    </div>
  );
};

export default CardsContent;
