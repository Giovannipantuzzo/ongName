import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="tudoFooter">
        <div>
          <AppBar position="static">
            <Toolbar
              className="maeFooter"
              style={{ backgroundColor: "#EDFE26", height: "4.5rem" }}
            >
              <img
                className="logoFooter"
                src="/images/Logo.png"
                alt="LogoFooter"
              ></img>
              <div className="iconsFooter">
                <div className="iconsFooter1">
                  <div className="insta">
                    <AiFillInstagram className="footersIcons" />
                    <h1 className="footerLetters">@Petfamily</h1>
                  </div>
                  <div className="face">
                    <FaFacebookSquare className="footersIcons2" />
                    <h1 className="footerLetters">Pet Family</h1>
                  </div>
                </div>
                <div className="iconsFooter2">
                  <div className="wpp">
                    <IoLogoWhatsapp className="footersIcons" />
                    <h1 className="footerLetters">+55 (31) 988265561</h1>
                  </div>
                  <div className="emailFooter">
                    <MdEmail className="footersIcons" />
                    <h1 className="footerLetters">petfamily@gmail.com</h1>
                  </div>
                </div>
              </div>
            </Toolbar>
          </AppBar>
        </div>
      </div>
    </>
  );
}

export default Footer;
