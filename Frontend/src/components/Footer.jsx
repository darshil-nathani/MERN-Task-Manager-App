import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <>
        <footer className="footer mt-5 py-4">
    <div className="container text-center text-md-left">
        <div className="row">
            <div className="col-md-4 mx-auto mb-4">
                <p className="mb-0">Phone: 7698849647</p>
                <p>Email: darshilnathani1412@gmail.com</p>
            </div>
            <div className="col-md-4 mx-auto mb-4">
            <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                <svg className="bi" width="30" height="24"></svg>
                </a>
                <span className="align-center mb-3 mb-md-0 text-body-secondary">© 2024 Company,</span>
            </div>
            <div className="col-md-4 mx-auto mb-4">
                <h5 className="text-uppercase font-weight-bold">Follow Us</h5>
                <ul className="list-unstyled footer-social-icons">
                    <li className="list-inline-item"><a href="#"><svg className="bi" width="24" height="24"><FaGithub /></svg></a></li>
                    <li className="list-inline-item"><a href="#"><svg className="bi" width="24" height="24"><FaInstagram /></svg></a></li>
                    <li className="list-inline-item"><a href="#"><svg className="bi" width="24" height="24"><FaLinkedin /></svg></a></li>
                </ul>
            </div>
        </div>
    </div>
</footer>
    </>
  )
}
