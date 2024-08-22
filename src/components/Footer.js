import React from 'react'
import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome  size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                </div>
                <div>
                    <p>Ahmedabad, Gujarat</p>
                </div>
            </div>
            <div className='phone'>
                <h4>
                    <FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    +91 83200 34432
                </h4>
            </div>

            <div className='email'>
                <h4>
                    <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    parekhamik@gmail.com
                </h4>
            </div>
            <div className='right'>
                <h4>About Me</h4>
                <p>
                    I'm Ami Parekh, a dedicated student pursuing a degree in Computer Engineering with a strong passion for web development.
                    <br></br>
                    <br></br>
                    <Link to='/about'>Read More...</Link>
                </p>

                <div className='social'>
                    <Link to='\www.linkedin.com/in/ami-parekh-a809b3285' target='blank'>
                        <FaLinkedin size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    </Link>

                    <Link to='\github.com/coder-107' target='blank'>
                        <FaGithub size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
