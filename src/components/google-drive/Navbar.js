import React from 'react'
import {Navbar,Nav} from "react-bootstrap"
import { Link } from 'react-router-dom'

export default function NavbarComponent() {
    return (
        <Navbar bg="light" expand="xxl">
            <Navbar.Brand as={Link} to="/" >
                CUSTOM Drive
            </Navbar.Brand>
            <Nav>
                <Nav.Link as={Link} to="/user">
                    Profile
                </Nav.Link>
            </Nav>
        </Navbar>
    )
}
