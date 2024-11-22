import React from 'react';

function AboutInfo ({image= "https://via.placeholder.com/215", about}) {
  return (
    <div>
      <aside>
        <img src={image} alt = "blog logo" />
        <p>{about}</p>
      </aside>
    </div>
  )
}



export default AboutInfo;
