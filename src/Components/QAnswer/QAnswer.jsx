import React from 'react'
import "./QAnswer.css";

export const QAnswer = (props) => {
    const {btn,styled,qusetion,answer,visible} = props;

  return (
    <div>
       <div className="accordion-item">
            <div className="accordion-header" id="headingOne">

              <button type="button" className="accordion-button collapsed " data-bs-toggle="collapse"
                data-bs-target="#collapseOne">
                  <div className='RO-QAbtn'>
                  <button style={{display:visible}}> {btn}</button>
                  <p>{qusetion}</p>
                </div>
                </button>
            </div>
            <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
              <div className="card-body">
                <p>{answer}</p>
              </div>
            </div>
          </div>


    </div>
  )
}
