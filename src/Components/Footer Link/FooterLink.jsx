import React from 'react'
import "./FooterLink.css";

const FooterLink = (props) => {

  const { title, link1, path1, link2, path2, link3, path3, link4, path4, link5, path5, link6, path6 } = props;




  return (
    <div>

      <div lg='3' md='6' className='mb-4 mb-md-0 RO-FooterLink'>
        <h5 className='mb-4'>{title}</h5>

        <ul className='list-unstyled mb-0'>
          <li>
            <a href={path1} > {link1}</a>
          </li>

          <li>
            <a href={path2} > {link2}</a>
          </li>

          <li>
            <a href={path3} > {link3}</a>
          </li>

          <li>
            <a href={path4} > {link4}</a>
          </li>

          <li>
            <a href={path5} > {link5}</a>
          </li>

          <li>
            <a href={path6} > {link6}</a>
          </li>

          
        </ul>
      </div>
    </div>
  )
}

export default FooterLink