import React from "react";
import { IkoCol, IkoRow } from "../../ikoComponents";
import PackageItem from "./PackageItem";

const PackageList = ({ packages }) => {
  return (
    <IkoRow className="package__list">
      {packages.map((item, index) => (
        <IkoCol col={4} key={index}>
          <PackageItem item={item} />
        </IkoCol>
      ))}
    </IkoRow>
  );
};

export default PackageList;
