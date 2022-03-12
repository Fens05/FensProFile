import React from 'react';
import coverImage from '../../Assets/Images/about.jpg';


function About() {
    return(
        <section className="my-5">
            <h2 id="about">Krista's Info</h2>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
            <p>
                Full-stack Web Developer from Minnesota. Has a background in Creative Writing, Scanning images,
                and Research. I have a certificate from the University of Minnesota in Full Stack Web Desing. 
                Where I learned HTML, CSS, JavaScript,SQL and React.
            </p>
        </section>

    );
}

export default About;