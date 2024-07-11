import React from 'react'
import "./assets/css/Promotion.css"
import vector from"./assets/images/Vector12.svg";
import Rectsmall from"./assets/images/Rectangle103.svg";
import Rect87 from "./assets/images/Rectangle87.svg";
import circle from "./assets/images/Ellipse28.svg";

function Promotion() {
  return (
   
    <div class=" RO-Promotion ">
        {/* text and button */}
        <div class="d-flex justify-content-between align-items-center RO-PromotionFlex ">

          {/* number and text section */}
        <div className='d-flex align-items-center gap-5 flex-wrap'>
            <div >
                <h3 class="RO-Promotion50">50%</h3>
                <div class="d-flex">
                    <h6 class="RO-PromotionDay">24 Days</h6>
                    <h6 class="RO-PromotionTime">17:44:16</h6>
                </div>
            </div>
            <p >Sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt</p>
        </div>
        <button>Choose a cource</button>
        </div>


        {/* vectors  */}
        <img src={vector} alt="vector" className='RO-PromotionVector'/>
        <img src={Rectsmall} alt="vector" className='RO-PromoRecSmall'/>
        <img src={Rect87} alt="vector" className='RO-PromoRec87'/>
        <img src={circle} alt="vector" className='RO-Promocircle'/>

    </div>
    
  )
}

export default Promotion