import React from "react";
import { IkoButton, IkoCard, IkoTitle } from "../../ikoComponents";

const PackageItem = ({ item }) => {
  return (
    <div className="package__item">
      <IkoCard>
        <div className="package__item__thumbnail">
          <img src={item.img} alt="" />
        </div>
        <IkoCard.Body>
          <div className="package__item__top">
            <IkoTitle className="package__item__title">{item.name}</IkoTitle>
          </div>
          <div className="package__item__middle">
            <div className="package__item__typo">
              {item.typologies.map((typo, index) => (
                <IkoTitle key={index}>{typo}</IkoTitle>
              ))}
            </div>
            <div className="package__item__price">{item.price} $</div>
          </div>
          <div className="package__item__bottom">
            <p>{item.tabs.desc}</p>
            <IkoButton color="white" style={{ background: item.color }}>
              Details
            </IkoButton>
          </div>
        </IkoCard.Body>
      </IkoCard>
    </div>
  );
};

export default PackageItem;
