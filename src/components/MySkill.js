import React from 'react';

const images = require.context('./img/Skill', false, /\.(png|jpe?g|svg)$/);
const imageList = images.keys().map(images);

function MySkill() {
 return (
 <div className='img-skill'>
  <h4 className='skill-heading'>My Technical Skill</h4>
    <div className='img-card'>
      {imageList.map((image, index) => (
      <img key={index} src={image} alt={`image-Skills-${index}`} />
      ))}
    </div>
 </div>
 );
}

export default MySkill;

// function MySkill() {
  
//   const images = require.context('./img/Skill', true);
//   const imageList = images.keys().map(image => images(image));

//   return (
//     <div className='img-skill'>
//         <h4 className='skill-heading'>My Technical Skill</h4>
//       {imageList.map((image) => (
//         <>
//         <img src='{}'
//         </>
//         // <img src={image.default} alt={`image-Skills`} />
//       ))}
//     </div>
//   );
// }

// export default MySkill;