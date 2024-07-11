import React from "react";
import ReactDOM from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/OurStudent.css";
import IconRight from "./assets/images/IconArowRight.svg";
import IconLeft from "./assets/images/IconArrowLeft.svg";
import Rectangle from "../Rectangle-OurStudent/Rectangle";






function OurStudent() {

    return (
       

            <div className="student">

                    {/* title and arrow icons */}
                    <div className="d-flex  justify-content-between RO-RecDivH">
                        <h2 className="RO-SectionTitle">What our students have to say</h2>
                        <div className="d-flex gap-3">
                            <a href="#"><img src={IconLeft} alt="Icon Right" /></a>
                            <a href="#"><img src={IconRight} alt="Icon Right" /></a>
                        </div>
                    </div>

                    {/* Rectangles */}
                    <div className="d-flex Ro-OurStudentFlex">
                        <Rectangle name="Guy Hawkins" work="Lifestyle" text="Ugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem" />
                        <Rectangle name="Jane Cooper" work="Write" text="Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur" />

                    </div>
            </div>


      

        
    )
}
export default OurStudent
