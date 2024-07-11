import React from 'react'
import "./assets/css/NotFind.css";
import vector from "./assets/image/Vector11.svg";



function NotFind() {
  return (

    <div className=' Ro-NotFind'>
      <div className='d-flex justify-content-between RO-NF-flex'>
        {/* left section , title and p */}
        <div>
          <h2 className='RO-SectionTitle'>Can't find a suitable program?</h2>
          <p className='RO-NFindP'>We will help you with the choice!</p>
        </div>

        {/* form , right section */}
        <form action="" className='RO-FormNF'>
          <input type="text" id='name' placeholder='Name' />
          <input type="email" id='mail' placeholder='Email' />
          <button>Help me</button>


        </form>

        {/* vector */}
        <img src={vector} alt="vector" className='RO-NFVector' />


      </div>
    </div>


  )
}

export default NotFind