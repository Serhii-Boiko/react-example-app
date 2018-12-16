import React from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

export default class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand tag={Link} to="/festivals">Example-App</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink tag={Link} to="/festivals">Festivals</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/artists">Artists</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/about">About</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}