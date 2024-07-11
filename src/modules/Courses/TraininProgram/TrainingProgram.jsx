// import React from 'react'
// import { QAnswer } from "../QAnswer/QAnswer";

import { QAnswer } from "../../../Components/QAnswer/QAnswer";

const TrainingProgram = () => {
  return (
    <div>
      <div className=" ro-accordion ">
        {/* title section */}
        <h2 className="RO-AccordionTitle">Training Programe</h2>

        <div className="accordion" id="myAccordion">
          <QAnswer
            btn="month 1"
            qusetion="Omnis voluptas assumenda est, omnis dolor repellendus?"
            answer="lorem lorem"
          ></QAnswer>
          <QAnswer
            btn="month 2"
            qusetion="Rerum hic tenetur a sapiente delectus?"
            answer="lorem loem"
          ></QAnswer>
          <QAnswer
            btn="month 3"
            qusetion="Alias consequatur aut perferendis doloribus asperiores repellat?"
            answer="lorem lorem"
          ></QAnswer>
          <QAnswer
            btn="month 4"
            qusetion="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi?"
            answer="lorem"
          ></QAnswer>
          <QAnswer
            btn="month 5"
            qusetion="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi?"
            answer="lorem"
          ></QAnswer>
          <QAnswer
            btn="month 6"
            qusetion="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi?"
            answer="lorem"
          ></QAnswer>
        </div>
      </div>
    </div>
  );
};

export default TrainingProgram;
