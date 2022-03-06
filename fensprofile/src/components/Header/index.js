import React from 'react';
import Nav from '.Navigation';

function Header(props) {
    const {setCurrentPage, pages} = props;

    return(
        <header>
            <Nav navLinks={pages} setCurrentPage={setCurrentPage} />

        </header>
    );
}