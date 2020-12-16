import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./../assets/styles/header.css";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="uk-container">
          <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand href="/">
              <img src="/batman.png"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/lessons">Хичээлүүд</Nav.Link>
                <Nav.Link href="/advice">Зөвөлгөө</Nav.Link>
                <Nav.Link href="/categories">Categories</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto d-none d-lg-inline-flex d-xl-inline-flex navright">
                <Nav.Link href="/">
                  <svg
                    viewBox="0 0 16 16"
                    height="19"
                    width="19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 16A8 8 0 108 0a8 8 0 000 16z"
                      fill="#F0F0F0"
                    ></path>
                    <path
                      d="M1.654 3.13A7.97 7.97 0 00.276 5.913h4.161L1.654 3.13zM15.725 5.913a7.971 7.971 0 00-1.379-2.783l-2.783 2.783h4.162zM.276 10.087a7.971 7.971 0 001.378 2.784l2.783-2.784H.276zM12.87 1.654A7.971 7.971 0 0010.088.276v4.161l2.784-2.783zM3.13 14.346a7.971 7.971 0 002.783 1.379v-4.162l-2.784 2.783zM5.913.276a7.972 7.972 0 00-2.784 1.378l2.784 2.783V.276zM10.087 15.725a7.97 7.97 0 002.784-1.379l-2.784-2.783v4.162zM11.563 10.087l2.783 2.784a7.971 7.971 0 001.379-2.784h-4.162z"
                      fill="#0052B4"
                    ></path>
                    <path
                      d="M15.932 6.957H9.044V.067a8.08 8.08 0 00-2.087 0v6.89H.067a8.08 8.08 0 000 2.086h6.89v6.89a8.074 8.074 0 002.086 0v-6.89h6.89a8.074 8.074 0 000-2.086z"
                      fill="#D80027"
                    ></path>
                    <path
                      d="M10.087 10.087l3.57 3.57c.164-.164.32-.336.47-.514l-3.056-3.056h-.984zM5.913 10.087l-3.57 3.57c.164.164.336.32.514.47l3.056-3.056v-.984zM5.913 5.913l-3.57-3.57c-.164.164-.32.336-.47.514l3.056 3.056h.984zM10.087 5.913l3.57-3.57a8 8 0 00-.514-.47l-3.056 3.056v.984z"
                      fill="#D80027"
                    ></path>
                  </svg>
                </Nav.Link>
                <Nav.Link href="/profile">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
                      fill="#fff8c1"
                    />
                  </svg>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </header>
    );
  }
}

export default Header;
