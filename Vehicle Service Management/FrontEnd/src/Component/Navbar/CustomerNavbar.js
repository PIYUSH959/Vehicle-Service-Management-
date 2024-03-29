import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from 'react-router-dom';

const CustomerNavbar = () => {


  return (
    <div
      className="position-sticky  container-fluid p-0 m-0 "
      style={{ width: "100%" }}
    >
      {/* <div className="row">
        <nav>
          <Navbar style={{ backgroundColor: "#66347F" }} sticky="top" expand="lg">
            <Container>
              <Navbar.Brand>
                <img
                  src="../Images/logo1.jpg"
                  height="50px"
                  width="70px"
                  alt="Logo.."
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Link
                    to="/CustomerDashboard"
                    style={{
                      color: "#F39C12",
                      // fontFamily: "cursive",
                      fontSize: "20px",
                      margin: "5px",
                      textDecoration: 'none',
                    }}
                  >
                    <big>DashBoard</big>
                  </Link>


                  <Link
                    to="/customer/request"
                    style={{
                      color: "#F39C12",
                      // fontFamily: "cursive",
                      fontSize: "20px",
                      margin: "5px",
                      textDecoration: 'none',
                    }}
                  >
                    <big>Request</big>
                  </Link>

                </Nav>

                <Nav>
                  <Link
                    to="/CustomerProfile"
                    className="me-1"
                    style={{
                      color: "#F39C12",
                      // fontFamily: "cursive",
                      fontSize: "20px",
                      margin: "5px",
                      textDecoration: 'none',
                    }}
                  >
                    <img className="m-1 rounded-circle"
                      src="../Images/Customers.jpg"
                      height="40px"
                      width="70px"
                      alt="Logo.."
                    />
                  </Link>

                  <Link
                    to="/Home"
                    className="m-2"
                    style={{
                      color: "#F39C12",
                      // fontFamily: "cursive",
                      fontSize: "20px",
                      margin: "5px",
                      textDecoration: 'none',
                    }}
                    onClick={() => {
                      localStorage.clear();
                    }}
                  >
                    Logout
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </nav>
      </div> */}
<nav  className="navbar navbar-expand-sm bg-primary-subtle">
  <div className="container-fluid">
  <a className="navbar-brand float-start" href="#"><img  src="../Images/newLogo.jpg" height="50px"  width="70px"  alt=""   style={{ borderRadius: '50%' }}/>  Vehicle Service Management System</a>
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className=" float-end" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/CustomerDashboard">Dashboard</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/customer/request">Request</a>
        </li>

        <li className="nav-item">
        <a className="nav-link" href="/CustomerProfile" >Profile</a>
        </li>




        <li className="nav-item">
        <a className="nav-link" href="/Home" onClick={() => {
                localStorage.clear();
              }}>Logout</a>
        </li>

      </ul>
    </div>
  </div>
</nav>
</div>
  );
};

export default CustomerNavbar;
