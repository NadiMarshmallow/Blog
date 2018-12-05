import React, { Component } from 'react';
import './App.css';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import monogramma from "./monogramma.jpg"
import Post from "./components/post.js"


class Example extends React.Component {constructor(props) {
  super(props);

  this.toggle = this.toggle.bind(this);
  this.state = {
    dropdownOpen: false
  };
}

toggle() {
  this.setState({
    dropdownOpen: !this.state.dropdownOpen
  });
}


  render() {
    return (
      <div className="App">
      <img src={monogramma}  className="image"/>
         <div className="menu">
        <Nav pills>
          <NavItem>
            <NavLink href="#" active>Home</NavLink>
          </NavItem>
          <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>
              Servizi
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem >Servizio 1</DropdownItem>
              <DropdownItem >Servizio 2</DropdownItem>
              <DropdownItem>Servizio 3</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavItem>
            <NavLink href="#">Contatti</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Dove Siamo</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">Lavora con noi</NavLink>
          </NavItem>
        </Nav>
      </div>

      <Post></Post>
    
      </div>
    );
  }
}

export default Example;
