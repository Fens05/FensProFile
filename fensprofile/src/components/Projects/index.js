import React from "react";
import photo from '../../Assets/Images/Projects/petsnack.png';



function ProjectList(props) {
  const currentCategory = {
    name: "Projects",
    description: "",
  };
  return (
    <section>
      <h1>{currentCategory.name}</h1>
      <p>{currentCategory.name}</p>
      <div className='flex-row'>
          <img
          src={photo}
          alt='ePillbox'
          className="img-thumbnail mx-1" />
        <a href src='https://pure-harbor-43860.herokuapp.com/'/>
        <a href src='https://github.com/KieranHannagan/e-pill-box' />
        
          
      </div>
      
    </section>
  );
}
export default ProjectList;