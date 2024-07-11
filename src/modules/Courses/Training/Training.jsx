import TrainingContent from "../TrainingContent/TrainingContent";
import "./Training.css";
const Training = () => {
  return (
    <section className=" w-100 h-100 ">
      <div className="container d-flex flex-wrap  justify-content-between ma-training-section">
        <div className="ma-training-h">
          <h1>How is the training going</h1>
        </div>
        <div className=" d-flex flex-column align-items-center justify-content-center">
          <div className=" d-flex flex-wrap">
            <TrainingContent
              h1="1."
              p="Study the material on the platform at any convenient time"
            />
            <TrainingContent
              h1="2."
              p="Do practical tasks, get feedback and consolidate knowledge"
            />
          </div>
          <div className=" d-flex flex-wrap">
            <TrainingContent
              h1="3."
              p="Prepare a project and add it to your portfolio"
            />
            <TrainingContent
              h1="2."
              p="Prepare a project and add it to your portfolio"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;
