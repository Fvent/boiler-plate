import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AppRouter from "../utils/AppRouter";

export default class Navigation extends React.Component {

    constructor(props){
        super(props);
    }

    render () {

        return (
            <div id='navigationDir'>
                <Navbar bg="light" data-bs-theme="light">
                    <Container>
                    <Navbar.Brand href="/home">Home</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                        <Nav.Link href="/services">Services</Nav.Link>
                        <Nav.Link href="/products">Products</Nav.Link>
                        <Nav.Link href="/informational">Informational</Nav.Link>
                    </Nav>
                    </Container>
                </Navbar>
                <AppRouter />
            </div>

        );

    }


}