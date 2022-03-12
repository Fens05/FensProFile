import React from 'react';
import coverImage from '../../Assets/Images/about.jpg';


function About() {
    return(
        <section className="my-5">
            <h2 id="about">About Krista</h2>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
        </section>

    );
}

export default About;