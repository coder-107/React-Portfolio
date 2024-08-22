import React from 'react';
import { Link } from 'react-router-dom';
// import dev1 from './img/image-1.jpg';
// import dev2 from './img/image-2.jpg';

export const AboutContent = () => {
  return (
    <>
    <div className='about'>
        <div className='left'>
            <h1>Who Am I?</h1>
            <p>
            "Hi, I'm Ami Parekh! 👩‍💻 I completed my Diploma in Computer Engineering from Government Polytechnic for Girls under Gujarat Technological University. During my diploma, I led a team of four to develop a web application for the 'Project-fair 2022,' where I honed my presentation, communication, and leadership skills. 🏆 I also gained practical experience through an internship at Infolabz, Ahmedabad, where I delved into web development using PHP. 🌐
            <br/><br/><br/>
            Currently, I'm pursuing a Bachelor's degree in Computer Engineering at Ahmedabad Institute of Technology. Throughout my journey, I've expanded my skill set through internships. I gained foundational web design knowledge at CodersCave, explored cloud computing on AWS at UniConverge Technology (though the project was partially completed), and focused on front-end development using ReactJS at Clickaway IT Solutions. 📚
            <br/><br/><br/>
            Beyond academics and internships, I'm an active community member. I'm part of SAP's code Unnati community, where I've been exploring Deep Learning, Image Processing, and IoT. 🤖 Additionally, I contribute to my college as a GDSC club member, a runner-up in the college sports week, and a campaigning volunteer for Technosparx 2024. 🏃‍♀️ Currently, I'm taking on the responsibility of coordinating the college placement cell. 💼
            <br/><br/><br/>
            My primary interests lie in Full Stack Web Development, Data Analytics, and Cloud Computing. I am eager to leverage my skills and experiences to build a successful career in these domains. I am passionate about contributing to my country's growth and empowering women. 💪"
            </p>
            <Link to="/contact">
                <button className='btn'>Contact</button>
            </Link>
        </div>
    </div>
    </>
  )
}