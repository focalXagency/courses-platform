const DescoverContent = (props) => {
  return (
    <div className="ma-descover-name m-auto">
      <img src={props.imgOne} alt="" className="ma-descover-card" />
      <h3>{props.h3}</h3>
      <div className="d d-flex justify-content-between align-items-center">
        <p>{props.p}</p>
        <img src={props.imgTow} alt="" />
      </div>
    </div>
  );
};

export default DescoverContent;
