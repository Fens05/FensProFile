import React from "react";
import photo from '../../Assets/Images/Projects/petsnack.png';



function ProjectList(props) {
  const currentCategory = {
    name: "Projects",
    description: "Projects I worked on.",
  };
  return (
    <section>
      <h1>{currentCategory.name}</h1>
      <p>{currentCategory.name}</p>
      <div className='flex-row'>
          <img
          src={photo}
          alt='PetSnack'
          className="img-thumbnail mx-1" />
          
      </div>
      
    </section>
  );
}
export default ProjectList;