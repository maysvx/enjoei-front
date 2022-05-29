import { Button } from 'bootstrap'
import React from 'react'
import { Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import "./css-menu.css"

const Menu = () => {
    return (
        <div>
            <Navbar className='menu-cor shadow p-3 mb-5'>
                <Container>
                    <Navbar.Brand href="/" className='text-white'>Enjoei</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/feminino" className='text-white'>Feminino</Nav.Link>
                        <Nav.Link href="/masculino" className='text-white'>Masculino</Nav.Link>
                        <Nav.Link href="/infantil" className='text-white'>Infantil</Nav.Link>
                        <Nav.Link href="/calcados" className='text-white'>Calcados</Nav.Link>
                        <Nav.Link href="/casa" className='text-white'>Casa</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            
        </div>
    )
}

export default Menu