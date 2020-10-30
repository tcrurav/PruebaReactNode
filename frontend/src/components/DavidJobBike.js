import React from "react";
import bicycleImage from "../img/AllantPlus99SStagger_20_29467_A_Primary.webp";

const bicycleBrand="TREK";
const bicycleModel="Allant+ 9.9S Stagger";
const DavidJobBike = () => (
  <>
    <p>Brand: {bicycleBrand}</p>
    <p>Model: {bicycleModel}</p>
    <img
      src={bicycleImage}
      alt={`${bicycleBrand} ${bicycleModel}`}
    />
  </>
);

export default DavidJobBike;
