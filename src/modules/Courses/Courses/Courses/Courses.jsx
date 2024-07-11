import Footer from "../../../../Components/Footer/Footer";
import Nav from "../../../../Components/Nav/Nav";
import Platform from "../../Platform/Platform";

import Slider from "../../../../Components/Slider/Slider";
import WhatLearn from "../../WhatLearn/WhatLearn";
import HeroCourses from "../../../../Components/HeroCourses/HeroCourses";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import ProjectStudent from "../../ProjectStudent/ProjectStudent";
import TrainingProgram from "../../TraininProgram/TrainingProgram";
import Teachers from "../../Teachers/Teachers";
import Price from "../../Price/Price";

const Courses = () => {
  const [courseData, setCourseData] = useState([]);
  const id = useParams();

  useEffect(() => {
    try {
      const result = axios
        .get(`http://127.0.0.1:8000/api/course/1`)
        .then((res) => setCourseData(res));
    } catch (err) {
      console.log(err);
    }
  }, []);
  console.log(courseData);

  return (
    <div>
      <Nav />
      <HeroCourses desc={courseData.data.data.description} />
      <Platform />
      <WhatLearn />
      <Slider />
      <ProjectStudent />
      <TrainingProgram />
      <Teachers />
      <Price />
      <Footer />
    </div>
  );
};

export default Courses;
