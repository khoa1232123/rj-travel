import React from "react";
import { Menu, Newsletter } from "../../components";
import { menuFooter1, menuFooter2, menuFooter3 } from "../../data/menu";
import { IkoCol, IkoContainer, IkoRow, IkoTitle } from "../../ikoComponents";
import logo from "../../imgs/logo-color.png";
import backgroundFooter from "../../imgs/parallax-7.jpg";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ backgroundImage: `url(${backgroundFooter})` }}
    >
      <IkoContainer>
        <IkoRow className="footer__top">
          <IkoCol col={2}></IkoCol>
          <IkoCol col={8}>
            <div className="footer__newsletter">
              <Newsletter />
            </div>
          </IkoCol>
          <IkoCol col={2}></IkoCol>
        </IkoRow>
        <IkoRow className="footer__center">
          <IkoCol col={6}>
            <div className="footer__about">
              <div className="footer__about__logo">
                <div className="logo">
                  <img src={logo} alt="" />
                </div>
              </div>
              <div className="footer__about__txt">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur ut diam et nibh condimentum venenatis eu ac
                  magnasin. Quisque interdum est mauris, eget ullamcorper.
                </p>
              </div>
              <div className="footer__about__social">
                <div className="social-item">
                  <a href="/">
                    <i className="fa-brands fa-facebook-square"></i>
                  </a>
                </div>
                <div className="social-item">
                  <a href="/">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </div>
                <div className="social-item">
                  <a href="/">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </div>
                <div className="social-item">
                  <a href="/">
                    <i className="fa-brands fa-vimeo-v"></i>
                  </a>
                </div>
              </div>
            </div>
          </IkoCol>
          <IkoCol col={2}>
            <IkoTitle tag="h4">OUR AGENCY</IkoTitle>
            <Menu menu={menuFooter1} className="footer__menu" />
          </IkoCol>
          <IkoCol col={2}>
            <IkoTitle tag="h4">PARTNERS</IkoTitle>
            <Menu menu={menuFooter2} className="footer__menu" />
          </IkoCol>
          <IkoCol col={2}>
            <IkoTitle tag="h4">LAST MINUTE</IkoTitle>
            <Menu menu={menuFooter3} className="footer__menu" />
          </IkoCol>
        </IkoRow>
        <IkoRow className="footer__bottom">
          <IkoCol>
            <div className="footer__copyright">
              COPYRIGHT NICDARK THEMES 2018
            </div>
          </IkoCol>
        </IkoRow>
      </IkoContainer>
    </footer>
  );
};

export default Footer;
