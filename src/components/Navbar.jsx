import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import './CSS/Navbar.css'
import { Link } from "react-scroll";

const NavbarComp = () => {
    return (
        //bg-[#6366F1]
        <Navbar className='bg-[#111827] text-white nav' expand="lg" variant='dark'>
            <Container >
                <Navbar.Brand><a href='/'><Image src={require('../Assets/TSPlogo.png')} width='200px'></Image></a></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className='fs-5 px-3 ms-3 hover-btn hover:duration-200 hover:bg-[#4244b7]'><Link to='about' smooth duration={500} spy={true}><div className='text-1'>About</div></Link></Nav.Link>
                        <Nav.Link className='fs-5 px-3 ms-3 hover-btn hover:duration-200 hover:bg-[#4244b7]'><Link to='conduction' smooth duration={500} spy={true}><div className='text-1'>Conduction</div></Link></Nav.Link>
                        <Nav.Link className='fs-5 px-3 ms-3 hover-btn hover:duration-200 hover:bg-[#4244b7]'><Link to='p' smooth duration={500} spy={true}><div className='text-1'>Prizes</div></Link></Nav.Link>
                        <Nav.Link className='fs-5 px-3 ms-3 hover-btn hover:duration-200 hover:bg-[#4244b7]'><Link to='t' smooth duration={500} spy={true}><div className='text-1'>Testimonials</div></Link></Nav.Link>
                        <Nav.Link className='fs-5 px-3 ms-3 hover-btn hover:duration-200 hover:bg-[#4244b7]'><Link to='h' smooth duration={500} spy={true}><div className='text-1'>Highlights</div></Link></Nav.Link>
                        <Nav.Link className='fs-5 px-3 ms-3 hover-btn hover:duration-200 hover:bg-[#4244b7]'><Link to='f' smooth duration={500} spy={true}><div className='text-1'>FAQs</div></Link></Nav.Link>
                        <Nav.Link className='fs-5 px-3 ms-3 hover-btn hover:duration-200 hover:bg-[#4244b7]'><Link to='c' smooth duration={500} spy={true}><div className='text-1'>Contact Us</div></Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComp

