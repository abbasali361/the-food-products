import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TopHeader = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand >The Food Store</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link ><Link to="/">Home</Link></Nav.Link>
                        <Nav.Link ><Link to="/order">Orders</Link></Nav.Link>
                        <Nav.Link ><Link to="/admin">Admin</Link></Nav.Link>
                        <Nav.Link ><Link to="/deal">Deals</Link></Nav.Link>
                        <Nav.Link ><Link to="/login">Login</Link></Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default TopHeader;