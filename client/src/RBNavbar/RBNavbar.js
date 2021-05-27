import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

function RBNavbar() {
  return (
    <Navbar
      collapseOnSelect
      sticky="top"
      expand="lg"
      bg="light"
      variant="light"
    >
      <Navbar.Brand href="#home">Store</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {/* <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link> */}
        </Nav>
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/addNewProduct">Add New Product</Nav.Link>
          <Nav.Link href="/productsTable">Admin Products Table</Nav.Link>
          <Nav.Link href="/shoppingCart">Cart</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default RBNavbar;
