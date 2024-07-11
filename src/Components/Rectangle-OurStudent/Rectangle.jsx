import React from 'react'
import User from './assets/image/user.svg';
import "./assets/Rectangle.css";

function Rectangle(props) {
    const {name,work,text}= props;
  return (
    
    <>
    
    <div className=' Ro-Rectangle'>
        <div className='d-flex RO-RecTitle' >
            <div className='RO-RecSduareImg'>
                <img src={User} alt="user logo" />
            </div>
            <div className=''>
                <h3 className='RO-h3Title'>{name}</h3>
                <p className='RO-RecWork'>{work}</p>
            </div>
        </div>

        <p className='RO-RecText'>{text}</p>

    </div>
    </>
  )
}

export default Rectangle