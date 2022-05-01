import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container px-md-5">
        {/* <!-- footer-top --> */}
        <div className="row pt-5 pb-4 footer-top">
          <div className="col-md-6">
            <Button sx={{backgroundColor:'transparent !important'}}>
            <Link to="/" style={{textDecoration:'none'}}>
              <h2 style={{ color: "#cfcfcf" }}>Movies Blog</h2>
            </Link>
            </Button>
          </div>
          <div className="col-md-6 pt-4 pt-md-0">
            <div className="footer-social text-md-end">
              <button href="#">
                <i className="fab fa-facebook-f"></i>
              </button>
              <button href="#">
                <i className="fab fa-twitter"></i>
              </button>
              <button href="#">
                <i className="fab fa-dribbble"></i>
              </button>
              <button href="#">
                <i className="fab fa-instagram"></i>
              </button>
              <button href="#">
                <i className="fab fa-youtube"></i>
              </button>
            </div>
          </div>
        </div>

        {/* <!-- footer body --> */}
        <div className="footer-body row">
          <div className="col-lg-4 col-sm-6">
            <h5> Mail Us:</h5>
            <p>
              Internet Private Limited, <br />
              Buildings Alyssa, Begonia &<br />
              Clove Embassy Tech Village,
              <br />
              Outer Ring Road, Devarabeesanahalli Village,
              <br />
              Bengaluru, 560103,
              <br />
              Karnataka, India
            </p>
            <button href="#" className="text-white">
              Read more &#8594;
            </button>
          </div>
          <div className="col-lg-2 col-sm-3">
            <h5>ABOUT</h5>
            <ul>
              <li>
                <button href="#">Contact Us</button>
              </li>
              <li>
                <button href="#">About Us</button>
              </li>
              <li>
                <button href="#">Careers</button>
              </li>
              <li>
                <button href="#">Stories</button>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-sm-3">
            <h5>POLICY</h5>
            <ul>
              <li>
                <button href="#">Return Policy</button>
              </li>
              <li>
                <button href="#">Terms Of Use</button>
              </li>
              <li>
                <button href="#">Security</button>
              </li>
              <li>
                <button href="#">Privacy</button>
              </li>
              <li>
                <button href="#">Sitemap</button>
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h5>Newsletter</h5>
            <p className="pe-sm-5">
              Videoprah is an award-winning, full-service production company
              specializing.
            </p>
            <form action="#">
              <input type="text" placeholder="Email" />
              <button type="submit">
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>

        {/* <!-- Footer bottom --> */}
        <div className="footer-bottom py-4">
          <p>Copyright &copy; 2022 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
