import React from 'react';
import Logo from '../../assets/images/logo.png'
import {Container,Navbar,Nav} from 'react-bootstrap'


export function Header() {
  return (
    <>

      <Navbar className='navbar' variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home"> <img src={Logo} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#home" className='mx-1'>Home</Nav.Link>
              <Nav.Link href="#link" className='mx-1'>About</Nav.Link>
              <Nav.Link href="#link" className='mx-1'>Benefits</Nav.Link>
              <Nav.Link href="#link" className='mx-1'>Roadmap</Nav.Link>
              <Nav.Link href="#link" className='mx-1'>Team</Nav.Link>
              <Nav.Link href="#link" className='mx-1'>FAQ</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </>
  );
}
