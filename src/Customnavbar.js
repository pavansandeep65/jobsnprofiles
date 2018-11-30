import React from 'react';
import { Link } from 'react-router-dom';
import {Navbar,Nav,NavItem} from 'react-bootstrap';

class CustomNavbar extends React.Component{
 
  render(){
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/"> JobsnProfiles </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
         <Nav pullRight>
          <NavItem eventKey={1} componentClass={Link} href to="/">
            Home
          </NavItem>
          <NavItem eventKey={2} componentClass={Link} to="/">
            Previous Job Fair
          </NavItem>
          <NavItem eventKey={3} componentClass={Link} to="/">
            Upcoming Job Fair
          </NavItem>
          <NavItem eventKey={4} componentClass={Link} to="/Employer">
            Employer Login
          </NavItem>
          <NavItem eventKey={5} componentClass={Link} to="/Jobseeker">
            Jobseeker Login
          </NavItem>

        </Nav> 
      </Navbar>
    )
  }
}

export default CustomNavbar