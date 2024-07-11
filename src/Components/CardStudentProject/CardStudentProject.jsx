import React from 'react'
import "./CardStudentProject.css";

function CardStudentProject(props) {
    const {image,title}=props;

  return (
    <div>

<div className="RO-cardSProject d-flex flex-column align-items-center justify-content-center">
            <img src={image} alt="photo" />
            <h3>{title}</h3>
          </div>
    </div>
  )
}

export default CardStudentProject