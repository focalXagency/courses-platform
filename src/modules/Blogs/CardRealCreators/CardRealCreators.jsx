import React, { Component } from "react";
import "./CardRealCreators.css";
import { Link } from "react-router-dom";
import Icon from "./image/IconArrow.svg";

// Component card use in RealCreators section

function CardRealCreators(props) {
  const { image, name, career, path } = props;

  return (
    <div class="card RO-CardRealCreator">
      {/* image in card */}
      <div class="bg-image hover-overlay" data-mdb-ripple-color="light">
        <img src={image} class="img-fluid" />
      </div>

      <div class="card-body px-0">
        {/* name */}
        <h5 class="card-title  RO-CardName">{name}</h5>

        {/* work and arrow icon */}
        <div className="d-flex justify-content-between">
          <h6 class="card-text mx-0  RO-CardCareer">{career}</h6>
          <a href={path} className="mx-0">
            <img src={Icon} alt="Icon arrow" />{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardRealCreators;
