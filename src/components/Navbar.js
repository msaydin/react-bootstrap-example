import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

class NavBar extends Component {

    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand>React Bootstrap Example</Navbar.Brand>
                </Navbar>
            </div>
        )
    }
}

export default NavBar;