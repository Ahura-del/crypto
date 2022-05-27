import React from "react";
import logo from "../../../Assets/img/cchange.png";
import "./footer.scss";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="about-site">
          <img src={logo} alt="logo" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia,
            accusantium sequi? Maiores, ducimus voluptatibus architecto sapiente
            modi animi quam nostrum.
          </p>
        </div>
        <div className="footer-link">
          <div className="footer-pages">
            <h4>Pages</h4>
            <a href="#features">Features</a>
            <a href="#learning">Learning</a>
          </div>
          <div className="footer-app">
            <h4>App</h4>
            <a href="#">Windows</a>
            <a href="#">Mac</a>
            <a href="#">Linux</a>
            <a href="#">Iphone</a>
            <a href="#">Android</a>
          </div>
        </div>
        <div className="footer-sub">
          <h4>SIGN UP FOR EMAIL UPDATES</h4>

          <div className="footer-input">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email address"
            />
            <button>Subscribe</button>
          </div>
          <p>Sign up with your email address to receive news and updates</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
