import React from "react";
import "./navbar.css";

const Nabar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            🔗liinks
          </a>
          <button className="btn btn-dark signBtn">Sign UP</button>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  QR Codes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active nav-bar" aria-current="page" href="#">
                  Help
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active nav-bar sign-up" aria-current="page" href="#">
                  SignUp➕
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nabar;
