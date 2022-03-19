import React from "react";
import {
  IkoButton,
  IkoCol,
  IkoContainer,
  IkoRow,
  IkoSlider,
  IkoTitle,
} from "../ikoComponents";

const AboutBook = () => {
  return (
    <div className="about-book">
      <IkoContainer>
        <IkoRow>
          <IkoCol col={4}>
            <IkoTitle className="about-book__title__sub">
              NORTH AMERICA
            </IkoTitle>
            <IkoTitle className="about-book__title">The Best Beaches</IkoTitle>
            <p>
              Lorem ipsum dolor sit amet, consectetur adip iscing elit. Proin
              rhoncus urna dictum neque molestie ultricies mauris ac. Lorem
              ipsum dolor sit amet, consectetur adip iscing elit. Proin rhoncus
              urna dictum neque molestie ultricies mauris ac.
            </p>
            <div className="about-book__price">
              <del>800</del>
              <span className="price">500 $</span>
              <span className="text">/ for person</span>
            </div>
            <IkoButton bgColor="green" className="about-book__btn">
              Book Now
            </IkoButton>
          </IkoCol>
          <IkoCol col={8}>
            <IkoSlider>
              <IkoSlider.Item>1</IkoSlider.Item>
              <IkoSlider.Item>1</IkoSlider.Item>
              <IkoSlider.Item>1</IkoSlider.Item>
            </IkoSlider>
          </IkoCol>
        </IkoRow>
      </IkoContainer>
    </div>
  );
};

export default AboutBook;
