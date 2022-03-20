import React from "react";
import { packages } from "../data/packages";
import { IkoCol, IkoContainer, IkoRow, IkoTitle } from "../ikoComponents";
import PackageList from "./Package/PackageList";

const Packages = () => {
  return (
    <div className="packages">
      <IkoContainer>
        <IkoRow>
          <IkoCol col={12}>
            <IkoTitle center tag="h4" className="packages__title__sub">
              PROMOTIONS
            </IkoTitle>
            <IkoTitle center tag="h2" className="packages__title">
              OUR PACKAGES
            </IkoTitle>
          </IkoCol>
          <IkoCol col={12}>
            <PackageList packages={packages} />
          </IkoCol>
        </IkoRow>
      </IkoContainer>
    </div>
  );
};

export default Packages;
