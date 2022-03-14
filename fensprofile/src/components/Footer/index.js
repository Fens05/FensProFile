import React from 'react';
import './footer.css';
function Footer() {
    return (
        <footer className='flex-row px-1'>
            <div>
                <a 
                    href="https//github.com/Fens05">
                <img 
                    src={require("../../Assets/logos/github.jpeg")}
                    alt="Github"
                    className="logo"
                    ></img>       
                </a>
            </div>
            <div>
                <a 
                    href="https://www.linkedin.com/in/krista-meyer-646997216/">
                <img 
                    src={require("../../Assets/logos/linkedin.jpg.webp")}
                    alt="Linkedin"
                    className="logo"
                    ></img>       
                </a>
            </div>
            <div>
                <a 
                    href="mailto:fens05m@gmail.com">
                <img 
                    src={require("../../Assets/logos/email.jpeg")}
                    alt="email"
                    className="logo"
                    ></img>       
                </a>
            </div>
        </footer>
    );
}

export default Footer;