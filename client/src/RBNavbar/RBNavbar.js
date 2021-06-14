import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import adminService from "../services/AdminService";

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
        {/* <Nav> */}
        {adminService.isAdmin() ? (
          <Nav>
            <Nav.Link href="/addNewProduct">Add New Product</Nav.Link>
            <Nav.Link href="/productsTable">Admin Products Table</Nav.Link>
            <Nav.Link href="/adminQueryPanel">Admin Query</Nav.Link>
            <Nav.Link
              onClick={() => {
                adminService.logout();
                // window.location.reload();
                window.location.href = "/";
              }}
            >
              Logout
            </Nav.Link>
          </Nav>
        ) : (
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/adminLogin">Admin Login</Nav.Link>
            <Nav.Link href="/shoppingCart">Cart</Nav.Link>

            {/* <Nav.Link href="/contact">Contact</Nav.Link> */}
            {adminService.isLoggedIn() ? (
              <Nav>
                <Nav.Link href="/contact">Contact</Nav.Link>
                <Nav.Link
                  onClick={() => {
                    adminService.logout();
                    // window.location.reload();
                    window.location.href = "/";
                  }}
                >
                  Logout
                </Nav.Link>
              </Nav>
            ) : (
              <Nav>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/signup">Sigup</Nav.Link>
              </Nav>
            )}
          </Nav>
        )}

        {/* <Nav.Link href="/contact">Contact</Nav.Link> */}
        {/* {adminService.isAdmin() && (
            <Nav.Link href="/addNewProduct">Add New Product</Nav.Link>
          )}
          <Nav.Link href="/productsTable">Admin Products Table</Nav.Link>
          <Nav.Link href="/shoppingCart">Cart</Nav.Link> */}
        {/* </Nav> */}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default RBNavbar;
