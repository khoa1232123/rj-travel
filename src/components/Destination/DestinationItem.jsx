import React from "react";
import { IkoButton, IkoTitle } from "../../ikoComponents";

const DestinationItem = ({ item }) => {
  return (
    <div className="destination__item">
      <div className="destination__item__thumbnail">
        <img src={item.img} alt="" />
      </div>
      <div className="destination__item__content">
        <IkoTitle tag="h3" className="destination__item__title">
          {item.name}
        </IkoTitle>
      </div>
      <div className="destination__item__content__two">
        <IkoButton className="destination__item__btn">
          View Destination
        </IkoButton>
      </div>
    </div>
  );
};

export default DestinationItem;
