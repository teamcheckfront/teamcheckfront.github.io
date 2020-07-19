import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

// Navigation bar component
const NavigationBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  // toggle to open/close the nav bar for dropdown
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <a href="/" name="top"></a>
      <Navbar  color="light" light className="nav" expand="md">
        <NavbarBrand href="/"> NCDI  </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="m-auto" navbar>
            <NavItem>
              <NavLink tag={RRNavLink} to="/" exact>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="/details">Project Details</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="/aboutus">Our Team</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Secure Documents
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <NavLink tag={RRNavLink} to="/securedocs/viewall">View All</NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <NavLink tag={RRNavLink} to="/securedocs/scrummeetings">Scrum Meetings</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink tag={RRNavLink} to="/securedocs/wsr">Weekly Status Reports</NavLink>
                </DropdownItem>
                <DropdownItem>
                 <NavLink tag={RRNavLink} to="/securedocs/sprintbmr">Sprint Backlog Maintenance Reports</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink tag={RRNavLink} to="/securedocs/retrospectivemeetings">Retrospective Meetings</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink tag={RRNavLink} to="/securedocs/meetingnotes">Meeting Notes</NavLink>
                </DropdownItem>
              </DropdownMenu> 
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavigationBar;