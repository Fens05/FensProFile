import React from 'react';

import {ListGroup} from 'reac-boostrap/LisGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import ''




function Nav() {
    

    return(
      
        <header >
        <nav className={ListGroup}>
            <ul className={ListGroup}>
            <h1> Krista Page</h1>
              
          
            <ul className {ListGroup}>
                <li label='about' to='/about' className={ListGroupItem}> My Story</li>
                <li lable='projects' to='/projects' className={ListGroupItem}>Projects</li>
                <li label='contact' to='/contact' className={ListGroupIntem}>Contact</li>
                
            
                
            </ul>

        </header>
    );
}

