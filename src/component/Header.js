import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Header({ halndleSubmit }) {

    const navigate = useNavigate();

    const logout = () => {
        // localStorage.removeItem("signUp")
        // window.location.reload()
        localStorage.removeItem('loggedin');
        navigate('login');
    }
    const [search, setSearch] = useState("");
    // consol
    const status = localStorage.getItem('loggedin')

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
                        <div style={{ display: "flex" }}>
                            {status ? '' : <NavLink className="m-2" to="/Signup">Signup</NavLink>}
                            {status ? "" : <NavLink className="m-2" to="/Login">Login</NavLink>}
                            <Form onSubmit={halndleSubmit(search)}
                                className="d-flex">
                                <Form.Control
                                    type="number" value={search}
                                    onChange={(e) => setSearch(e.target.value)
                                    }
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                {/* <Button type="submit" variant="outline-success">Search</Button> */}
                            </Form>
                            {status ? <button onClick={logout} style={{ color: "white" , border : 'white 1px solid' }} className='buttons'> Logout</button> : ''}
                        </div>
                    </Nav>
                </Container>
            </Navbar>


        </>
    );
}

export default Header;