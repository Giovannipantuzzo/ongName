import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import "./Footer.css";

function Footer() {
  return (
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
                <a
                  className="insta"
                  href="https://www.instagram.com/cpe.jr"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <AiFillInstagram className="footersIcons2" />

                  <h1 className="footerLetters">@Petfamily</h1>
                </a>
                <a
                  className="face"
                  href="https://www.facebook.com/cpejr"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FaFacebookSquare className="footersIcons" />
                  <h1 className="footerLetters">Pet Family</h1>
                </a>
              </div>
              <div className="iconsFooter2">
                <a
                  className="wpp"
                  href="https://api.whatsapp.com/send?phone=5531988265561&text=Olá,%20meu%20amigo!"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <IoLogoWhatsapp className="footersIcons" />
                  <h1 className="footerLetters">+55 (31) 988265561</h1>
                </a>
                <a
                  className="emailFooter"
                  href="mailto:tainanalbuquerque@cpejr.com.br?subject=Contato&body=Olá"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <MdEmail className="footersIcons" />
                  <h1 className="footerLetters">petfamily@gmail.com</h1>
                </a>
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}

export default Footer;
