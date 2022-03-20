import React from "react";
import { IkoCol, IkoContainer, IkoRow } from "../ikoComponents";

const iconList = [
  {
    icon: "fa-solid fa-earth-asia",
    title: "World Tour",
    desc: "Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum.",
    url: "/",
  },
  {
    icon: "fa-solid fa-ship",
    title: "Cruises",
    desc: "Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum.",
    url: "/",
  },
  {
    icon: "fa-solid fa-gopuram",
    title: "Best Tours",
    desc: "Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum.",
    url: "/",
  },
];

const BoxIcon = ({ item }) => {
  return (
    <div className="box-icon">
      <div className="box-icon__icon">
        <i className={item.icon}></i>
      </div>
      <div className="box-icon__content">
        <div className="box-icon__title">{item.title}</div>
        <div className="box-icon__desc">{item.desc}</div>
        <div className="box-icon__btn">
          <a href={item.url}>View more</a>
        </div>
      </div>
    </div>
  );
};

const OptionIcons = () => {
  return (
    <div className="option-icons">
      <IkoContainer>
        <IkoRow>
          {iconList.map((item, index) => (
            <IkoCol key={index}>
              <BoxIcon item={item} />
            </IkoCol>
          ))}
        </IkoRow>
      </IkoContainer>
    </div>
  );
};

export default OptionIcons;
