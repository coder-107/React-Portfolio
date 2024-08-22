import React from 'react';
// import project1 from './img/PGP1.png';
// import { NavLink } from 'react-router-dom';
import DynamicCard from './DynamicCard';
import ProjectData from './ProjectData';

export default function AllProject() {
  return (
    <>
    <div className='work-container'>
        <h1 className='project-heading'>Projects</h1>
        <div className='project-container'>
            {ProjectData.map((val, ind) =>{
                return(
                    <DynamicCard
                    key={ind}
                    imgsrc = {val.imgsrc}
                    title = {val.title}
                    text = {val.text}
                    source = {val.source}
                    />
                )
            }) }
        </div>
    </div>
    </>
  )
}
