import React from 'react'
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <>
            <Navbar className="bg-body-tertiary d-flex justify-content-center align-items-center">
                    <Navbar.Brand className='fw-bold fs-4 text-danger' style={{fontFamily:"Playball"}}>Random Quote Generator</Navbar.Brand>
            </Navbar>
        </>
    )
}

export default Header