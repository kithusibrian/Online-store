import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Link
          to="https://www.instagram.com/__.sensei._.scott.___/"
          target="_blank"
        >
          <InstagramIcon />
        </Link>
        <Link to="https://web.facebook.com/BrianKithusi/" target="_blank">
          <FacebookIcon />
        </Link>
        <Link to="https://twitter.com/StreetPresenter" target="_blank">
          <TwitterIcon />
        </Link>
        <Link
          to="https://www.linkedin.com/in/brian-kithusi-9a2a42198/"
          target="_blank"
        >
          <LinkedInIcon />
        </Link>
        <Link to="https://www.pinterest.com/briaokm/" target="_blank">
          <PinterestIcon />
        </Link>
      </div>
      <p>&copy; 2023 Brian Kithusi Tech</p>
    </div>
  );
}

export default Footer;
