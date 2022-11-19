import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container className='m-0'>
                    <NavLink href="/">Basketball</NavLink>
                    <Nav className=" m-2">
                        <NavLink className="m-2" to="/">Home</NavLink>
                        <NavLink className="m-2" to="/About">About</NavLink>
                        <NavLink className="m-2" to="/Contact">Contact</NavLink>
                        <NavLink className="m-2" to="/Player">Player</NavLink>
                        <NavLink className="m-2" to="/Team">Team</NavLink>
                        <NavLink className="m-2" to="/Match">Match</NavLink>
                    </Nav>
                </Container>
            </Navbar>


        </>
    );
}

export default Header;