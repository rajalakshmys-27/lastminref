import React from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import styles from "./navbar.module.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      expand="md"
      className={styles["navbar"]}
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-code-slash"
            viewBox="0 0 16 16"
          >
            <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
          </svg>
          <span>LastMinRef</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-md`}
          aria-labelledby={`offcanvasNavbarLabel-expand-md`}
          placement="bottom"
          className={"bg-dark text-light"}
        >
          <Offcanvas.Header className={styles["custom-header"]} closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
              LastMinRef
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className={styles["custom-body"]}>
            <Nav className="">
              <Nav.Link href="#action1">CheatSheet</Nav.Link>
              <Nav.Link href="#action1">Learn Coding</Nav.Link>
              <Nav.Link href="#action1">About Us</Nav.Link>
              <Nav.Link href="#action2">Contact</Nav.Link>
            </Nav>
            <Nav className="">
              <Nav.Link href="#action1">Sign In</Nav.Link>
              <Nav.Link href="#action2">Sign Up</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavBar;
