// header component structure
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

  return (
    <div>
      <Navbar expand='md' container='xl'>
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
            <NavItem>
              <NavLink href="/botshow">View a Bot</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/botedit">Fix a Bot</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Header;