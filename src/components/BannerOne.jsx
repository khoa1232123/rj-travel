import React from "react";
import {
  IkoButton,
  IkoCol,
  IkoContainer,
  IkoRow,
  IkoTitle,
} from "../ikoComponents";
import bg from "../imgs/parallax-6.jpg";

const BannerOne = () => {
  return (
    <div className="banner-one" style={{ backgroundImage: `url(${bg})` }}>
      <IkoContainer>
        <IkoRow>
          <IkoCol col={2}></IkoCol>
          <IkoCol col={4}>
            <IkoTitle size={45} color="white" style={{ marginBottom: 0 }}>
              Your
            </IkoTitle>
            <IkoTitle size={50} color="white" style={{ marginBottom: 0 }}>
              Next Holiday
            </IkoTitle>
          </IkoCol>
          <IkoCol col={4} style={{ textAlign: "center" }}>
            <IkoButton
              bgColor={"white"}
              color="red"
              className="banner-one__btn"
            >
              VIEW ALL PACKAGES
            </IkoButton>
          </IkoCol>
          <IkoCol col={2}></IkoCol>
        </IkoRow>
      </IkoContainer>
    </div>
  );
};

export default BannerOne;
