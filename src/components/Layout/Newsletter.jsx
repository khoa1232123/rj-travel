import React from "react";
import {
  IkoButton,
  IkoCol,
  IkoInput,
  IkoRow,
  IkoTitle,
} from "../../ikoComponents";

const Newsletter = () => {
  return (
    <IkoRow className="newsletter">
      <IkoCol col={6} className="newsletter__txt">
        <IkoTitle tag="div">KEEP IN TOUCH</IkoTitle>
        <IkoTitle tag="h2" size={36} style={{ color: "#555" }}>
          Travel with Us
        </IkoTitle>
      </IkoCol>
      <IkoCol col={6} className="newsletter__form">
        <IkoRow>
          <IkoCol col={9}>
            <IkoInput placeholder="Your email..." />
          </IkoCol>
          <IkoCol col={3}>
            <IkoButton>Send</IkoButton>
          </IkoCol>
        </IkoRow>
      </IkoCol>
    </IkoRow>
  );
};

export default Newsletter;
