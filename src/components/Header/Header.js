import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="dark" variant="light">
            <Nav className="mr-auto">
                <Nav.Link > <Link to="/manageProduct">Manage Product</Link></Nav.Link>
                <Nav.Link ><Link to="/addProducts">Add Product</Link></Nav.Link>
                <Nav.Link ><Link to="/editProduct">Edit Product</Link></Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default Header;