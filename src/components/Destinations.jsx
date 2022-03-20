import React from "react";
import { destinations } from "../data/destinations";
import { IkoCol, IkoContainer, IkoRow, IkoTitle } from "../ikoComponents";
import DestinationList from "./Destination/DestinationList";

const Destinations = () => {
  return (
    <div className="destinations">
      <IkoContainer>
        <IkoRow>
          <IkoCol col={12}>
            <IkoTitle center tag="h4" className="destinations__title__sub">
              OUR PROPOSALS
            </IkoTitle>
            <IkoTitle center tag="h2" className="destinations__title">
              OUR DESTINATIONS
            </IkoTitle>
          </IkoCol>
          <IkoCol col={12}>
            <DestinationList destinations={destinations} />
          </IkoCol>
        </IkoRow>
      </IkoContainer>
    </div>
  );
};

export default Destinations;
