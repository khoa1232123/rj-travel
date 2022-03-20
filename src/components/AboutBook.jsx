import React from "react";
import {
  IkoButton,
  IkoCol,
  IkoContainer,
  IkoRow,
  IkoSlider,
  IkoTitle,
} from "../ikoComponents";
import img1 from "../imgs/parallax-10.jpg";
import img2 from "../imgs/parallax-11.jpg";
import img3 from "../imgs/parallax-12.jpg";

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
            <IkoSlider className="style-2 about-book__slider">
              <IkoSlider.Item>
                <img src={img1} alt="" />
              </IkoSlider.Item>
              <IkoSlider.Item>
                <img src={img2} alt="" />
              </IkoSlider.Item>
              <IkoSlider.Item>
                <img src={img3} alt="" />
              </IkoSlider.Item>
            </IkoSlider>
          </IkoCol>
        </IkoRow>
      </IkoContainer>
    </div>
  );
};

export default AboutBook;
