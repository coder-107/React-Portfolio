import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Menu() {
  
    const[click,setclick] = useState(false);
    const handleClick = () => setclick(!click);

    const[color,setcolor] = useState(false);
    const changecolor = () =>{
        if(window.scrollY >=100){
            setcolor(true);
        }else{
            setcolor(false);
        }
    };

    window.addEventListener("scroll", changecolor)
    // Window.addEventListener("scroll", changecolor);

    return (
    <div className={color ? "header header-bg" : "header"}>
        <Link to='/'>
            <h1>Ami Parekh</h1>
        </Link>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/project'>Project</Link></li>
            <li><Link to='/skill'>Skill</Link></li>
            <li><Link to='/service'>Service</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
        </ul>

        <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes  size={20} style={{color:"#fff"}}/>) : (<FaBars  size={20} style={{color:"#fff"}}/>)}
        </div>
    </div>
  )
}