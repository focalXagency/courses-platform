import React from 'react';

import "./assets/css/Footer.css";
import { Link } from 'react-router-dom/dist';
import FooterLink from '../Footer Link/FooterLink';
import Logo from "./assets/images/logo.svg";
import Facbook from "./assets/images/brandico_facebook.svg";
import Twitter from "./assets/images/akar-icons_twitter-fill.svg";
import Youtube from "./assets/images/Youtube.svg"






function Footer() {
  return (

    <>

      <div className='text-center text-lg-left'>
        
          <div className='RO-footer'>
            <div lg='3' md='6' className='mb-4 mb-md-0'>

              {/* right section of footer, logo section  */}

              {/* RO-FMauto for justify center in small screens */}
              <div className='d-flex gap-2 RO-FMauto'>
                <img src={Logo} alt="logo" id="RO-imgFooter"/>
                <h5 className='RO-FLogo'>UpDate</h5>
              </div>

              <p className='RO-FooterP'>support@update.com</p>
              <p className='RO-FooterP'> +1 (213) 677 10 24</p>
              <div className="d-flex gap-3 my-5 RO-FMauto">
               
            <a href=""><img src={Facbook} alt=" Facebook logo" className='RO-FooterBgImg' /></a>

              <a href=""><img src={Youtube} alt=" youtube logo" /></a>
              <a href=""><img src={Twitter} alt=" Twitter logo" className='RO-FooterBgImg'/></a>
              </div>

            </div>

            <FooterLink title="Courses" link1="Animation" path1="#" link2="Design" path2="#" link3="Illustration" path3="#" link4="Programming" path4="#" link5="Photo & Film" path5="#" link6="Marketing" path6="#"></FooterLink>
            <FooterLink title="Teachers" link1="All Teachers" path1="#" link2="Become a Teacher" path2="#"></FooterLink>
            <FooterLink title="Information" link1="Blog" path1="#" link2="About us" path2="#" link3="FAQ" path3="#"></FooterLink>
            <FooterLink title="En" link1="English" path1="#" link2="French" path2="#" link3="Russian" path3="#"></FooterLink>








          </div>
      

        <div className='text-center  RO-endFooter' >
          <span> Policy privacy </span>  <span>Copyright 2022. All rights reserved</span>
        </div>

        

        
      </div>



    </>
  )

}

export default Footer