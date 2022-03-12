/import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <div>
                <a 
                    href="https//github.com/Fens05">
                <img 
                    src={require("../../assets/logos/github.png")}
                    alt="Github"
                    className="logo"
                    ></img>       
                </a>
            </div>
            <div>
                <a 
                    href="https://www.linkedin.com/in/kristameyer/">
                <img 
                    src={require("../../assets/logos/linkedin.png")}
                    alt="Linkedin"
                    className="logo"
                    ></img>       
                </a>
            </div>
            <div>
                <a 
                    href="mailto:fens05m@gmail.com">
                <img 
                    src={require("../../assets/logos/email.png")}
                    alt="email"
                    className="logo"
                    ></img>       
                </a>
            </div>
        </footer>
    );
}

export default Footer;