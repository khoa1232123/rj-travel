import React from "react";
import { IkoCol, IkoRow } from "../../ikoComponents";
import DestinationItem from "./DestinationItem";

const DestinationList = ({ destinations }) => {
  return (
    <IkoRow className="destination__list">
      {destinations.map((item, index) => (
        <IkoCol col={4} key={index}>
          <DestinationItem item={item} />
        </IkoCol>
      ))}
    </IkoRow>
  );
};

export default DestinationList;
