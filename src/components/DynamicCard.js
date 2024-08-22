import React from "react";
// import project1 from "./img/PGP1.png";
import { NavLink } from "react-router-dom";

export default function DynamicCard(props) {
  return (
    <>

    <div className="project-card">
        <img src={props.imgsrc} alt="images" />
        <h2 className="project-title">{props.title}</h2>
        <div className="pro-details">
          <p>{props.text}</p>
          <div className="pro-btns">
            {/* <NavLink to="url.com" className="btn">
              Read More
            </NavLink> */}
            <NavLink to={props.source} className="btn">
              Source Code
            </NavLink>
          </div>
        </div>
    </div>
    </>
  );

  // {/* <div className='work-container'>
  //       <h1 className='project-heading'>Projects</h1>
  //       <div className='project-container'>
  //           <div className='project-card'>
  //               <img src={project1} alt='images'/>
  //               <h2 className='project-title'>ProjectTitle</h2>
  //               <div className='pro-details'>
  //                   <p>This is Paragraph</p>
  //                   <div className='pro-btns'>
  //                       <NavLink to='url.com' className='btn'>Read More</NavLink>
  //                       <NavLink to='url.com' className='btn'>Source Code</NavLink>
  //                   </div>
  //               </div>
  //           </div>
  //       </div>
  //   </div> */}

}
