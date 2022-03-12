import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import Logo from './components/Logo.svg';

export default class NavbarComp extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light">
          <Navbar.Brand href="#home">
            <img
              src={Logo}
              className="d-inline-block align-top shadow-none"
              alt="React Bodi Bootstrap logo"
            />
          </Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}
