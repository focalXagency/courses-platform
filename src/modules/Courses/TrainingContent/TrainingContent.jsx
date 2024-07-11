const TrainingContent = (props) => {
  return (
    <div className="ma-training-part">
      <h1>{props.h1}</h1>
      <div className="ma-training-underline"></div>
      <p>{props.p}</p>
    </div>
  );
};

export default TrainingContent;
