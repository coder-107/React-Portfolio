import React from 'react';
import { Link } from 'react-router-dom';
import Main from './img/main-bg.jpg';

export default function Homecontent() {
  return (
    <>
    <div className='home'>
      <div className='mask'>
        <img className='inrto-img' src={Main} alt='home-bg'/>
      </div>

      <div className='content'>
        <p>HI, I'M A WEB DEVELOPER</p>
        <h1>React Developer</h1>
        <div>
          <Link to="https://drive.google.com/file/d/1hP15bqIouzAW4pBau9obAVt-7FH2LqsS/view?usp=drive_link" target='blank' className="btn">Download</Link>
          <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
      </div>
    </div>
    </>
  )
}
