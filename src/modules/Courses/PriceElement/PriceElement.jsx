import React from 'react'
import "./PriceElement.css";

const PriceElement = (props) => {
    const{title , li1,li2,li3,li4,li5,price1,price2,bgColordiv,bgbtn,colorbtn ,colorbase ,colorprice1}=props


  return (
    <div>
        <div style={{backgroundColor: bgColordiv , color:colorbase}} className='RO-Pricediv container'>
            <h3 >{title}</h3>
            <ul>
                <li>{li1}</li>
                <li>{li2}</li>
                <li>{li3}</li>
                <li>{li4}</li>
                <li>{li5}</li>
            </ul>

            <div>
                <h5 style={{color:colorprice1}}>{price1}</h5>
                <h3>{price2}</h3>
                <button style={{backgroundColor: bgbtn, color:colorbtn}}>Choose</button>
            </div>

        </div>



    </div>
  )
}

export default PriceElement