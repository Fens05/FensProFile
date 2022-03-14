import React, { useState }from 'react';
// import { capitalzieFirstLetter } from '../../utils/helpers';



function Navigation() {
    
    // const [currentCategory, setCurrentCategory] = useState(categories[0]);
    // const [categories] = useState([
    //    name:'projects',
    //    desription: ''
    // ])
    return (
        <header className='flex-row px-1'>
            <h2>
                <a href="/">
                    <span role="img"> </span> Krista's Profile 
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">
                            About
                        </a>
                    </li>
                    <li className='my-2'>
                        <a href="#contact">
                         Contact</a>
                    </li>
                    <li className='mx-2'>
                        <a href='#projects'>
                          Projects
                        </a>
                    </li>
                    <li className='mx-2'>
                        <a href='#Resume'>
                        Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navigation;