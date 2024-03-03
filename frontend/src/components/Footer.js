import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaFacebook,
  FaLinkedin,
  FaMailBulk,
  FaLocationArrow,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-5 col-12 ft-1">
              <h3>SNAPREAD</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laborum ea quo ex ullam laboriosam magni totam, facere eos iure
                voluptate.
              </p>
              <div className="footer-icons">
                <FaInstagram className="icon instagram-icon" />
                <FaTwitter className="icon twitter-icon" />
                <FaFacebook className="icon facebook-icon" />
                <FaLinkedin className="icon linkedin-icon" />
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-12 ft-2">
              <h4>Quick Links</h4>
              <ul>
                <li className="nav-item">
                  <a className="" href="/">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    Faqs
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-4 col-12 ft-3">
              <h4>Contact Us </h4>
              <p>
                <FaPhoneAlt />
                +1 1234567890
              </p>
              <p>
                <FaMailBulk /> snapread@info.com
              </p>
              <p>
                <FaLocationArrow /> Toronto, Canada.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="Last-footer">
        <p>Design By Snapread</p>
      </div>
    </>
  );
};

export default Footer;
