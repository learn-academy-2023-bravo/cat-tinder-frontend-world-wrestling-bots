import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'

function Header(args) {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  // Stretch Goal: Generate a random integer between 1 and 10 (assuming you have 10 show pages)
  // const getRandomShowId = () => Math.floor(Math.random() * 10) + 1

  // Handle "View a Bot" click
  // const handleBotShowClick = () => {
  //   const showId = getRandomShowId()
  //   window.location.href = `/botshow/${showId}`
  // }

  return (
    <div>
      <Navbar className='nav-style' expand='md' container='xl'>
        <NavbarBrand href="/">World Wrestling Bots</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/botindex">Browse our Bots</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/botnew">Register a new Bot</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Header