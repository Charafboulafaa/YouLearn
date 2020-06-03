import React from 'react'
import './Header.css'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <h1><Link to="/">You<span>Learn</span></Link></h1>

          <Nav className="ml-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/mycourses">My Courses</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  )
}
