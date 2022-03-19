import React from "react";
import {
  IkoCard,
  IkoCol,
  IkoContainer,
  IkoRow,
  IkoTitle,
} from "../ikoComponents";
import background from "../imgs/parallax-2.jpg";

const Slider = () => {
  return (
    <div className="slider" style={{ backgroundImage: `url(${background})` }}>
      <IkoContainer>
        <IkoRow>
          <IkoCol>
            <IkoTitle tag="h1" center className="slider__title">
              Search your next Holiday
            </IkoTitle>
            <IkoTitle tag="h4" center className="slider__title__sub">
              CHECK OUR BEST PROMOTIONS
            </IkoTitle>
          </IkoCol>
        </IkoRow>
        <IkoRow>
          <IkoCol col={3}></IkoCol>
          <IkoCol col={6}>
            <div className="slider__cards">
              <IkoCard>
                <IkoCard.Body>
                  <a href="/">
                    <i className="fa-solid fa-trophy"></i>
                    <span>RELAX</span>
                  </a>
                </IkoCard.Body>
              </IkoCard>
              <IkoCard>
                <IkoCard.Body>
                  <a href="/">
                    <i className="fa-regular fa-face-grin-tongue-wink"></i>
                    <span>CULTURAL</span>
                  </a>
                </IkoCard.Body>
              </IkoCard>
              <IkoCard>
                <IkoCard.Body>
                  <a href="/">
                    <i className="fa-solid fa-person-snowboarding"></i>
                    <span>SPORT</span>
                  </a>
                </IkoCard.Body>
              </IkoCard>
              <IkoCard>
                <IkoCard.Body>
                  <a href="/">
                    <i className="fa-solid fa-camera-retro"></i>
                    <span>HISTORY</span>
                  </a>
                </IkoCard.Body>
              </IkoCard>
            </div>
          </IkoCol>
          <IkoCol col={3}></IkoCol>
        </IkoRow>
      </IkoContainer>
    </div>
  );
};

export default Slider;
