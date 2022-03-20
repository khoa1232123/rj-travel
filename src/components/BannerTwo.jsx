import React from "react";
import { parallax5, parallax6 } from "../data/imgs";
import {
  IkoButton,
  IkoCol,
  IkoContainer,
  IkoRow,
  IkoTitle,
} from "../ikoComponents";

const BannerTwo = () => {
  return (
    <div className="banner-two">
      <IkoContainer fluid style={{ paddingLeft: 15, paddingRight: 15 }}>
        <IkoRow>
          <IkoCol
            col={6}
            className="banner-two__background"
            style={{ backgroundImage: `url(${parallax5})` }}
          >
            <div className="banner-two__content">
              <IkoTitle center tag="h4" className="banner-two__title__sub">
                01. LAST MINUTE
              </IkoTitle>
              <IkoTitle center tag="h2" className="banner-two__title">
                Discover Cities
              </IkoTitle>
              <IkoButton
                bgColor="white"
                color="green"
                className="banner-two__btn"
              >
                Details
              </IkoButton>
            </div>
          </IkoCol>
          <IkoCol
            col={6}
            className="banner-two__background"
            style={{ backgroundImage: `url(${parallax6})` }}
          >
            <div className="banner-two__content">
              <IkoTitle center tag="h4" className="banner-two__title__sub">
                02. PROMOTIONS
              </IkoTitle>
              <IkoTitle center tag="h2" className="banner-two__title">
                Discover Nature
              </IkoTitle>
              <IkoButton
                bgColor="white"
                color="red"
                className="banner-two__btn"
              >
                Details
              </IkoButton>
            </div>
          </IkoCol>
        </IkoRow>
      </IkoContainer>
    </div>
  );
};

export default BannerTwo;
