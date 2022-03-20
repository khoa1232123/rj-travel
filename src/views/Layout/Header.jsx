import React from "react";
import { Menu } from "../../components";
import { menuHeader } from "../../data/menu";
import { IkoCol, IkoContainer, IkoRow } from "../../ikoComponents";
import logo from "../../imgs/logo.png";

const Header = () => {
  return (
    <header className="header">
      <IkoContainer fluid>
        <IkoRow>
          <IkoCol col={2}>
            <div className="header__logo">
              <div className="logo">
                <img src={logo} alt="" />
              </div>
            </div>
          </IkoCol>
          <IkoCol col={9}>
            <div className="header__menu">
              <Menu menu={menuHeader} position="horizonal" />
            </div>
          </IkoCol>
          <IkoCol col={1}>
            <div className="header__options">
              <i className="fa-solid fa-bars"></i>
            </div>
          </IkoCol>
        </IkoRow>
      </IkoContainer>
    </header>
  );
};

export default Header;
