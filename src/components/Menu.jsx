import { Button } from 'bootstrap'
import React from 'react'
import { Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./css-menu.css"
import { FaFemale, FaMale, FaBaby, } from 'react-icons/fa'
import { GiConverseShoe } from 'react-icons/gi'
import { RiHomeHeartFill, RiSearchEyeLine } from 'react-icons/ri'

const Menu = () => {
    return (
        <div>
            <Navbar expand="lg" className='menu-cor shadow-lg '>
                <Container fluid>
                    <Navbar.Brand href="/" className='text-white nav-enjoei'>Enjoei</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/feminino" className='text-white'>Feminino <FaFemale /></Nav.Link>
                            <Nav.Link href="/masculino" className='text-white'>Masculino <FaMale /></Nav.Link>
                            <Nav.Link href="/infantil" className='text-white'>Infantil <FaBaby /></Nav.Link>
                            <Nav.Link href="/calcado" className='text-white'>Calçados <GiConverseShoe /></Nav.Link>
                            <Nav.Link href="/casa" className='text-white'>Casa <RiHomeHeartFill /></Nav.Link>
                        </Nav>
                        <Form className="d-flex light">
                            <FormControl
                                type="search"
                                placeholder="Buscar..."
                                className="me-2"
                                aria-label="Search"
                            />
                            <Link to={'/'} className='btn btn-light'> <RiSearchEyeLine /></Link>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <br />
        </div >
    )
}

export default Menu