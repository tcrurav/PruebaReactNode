import React from "react";
import bicycleImage from "../img/AllantPlus99SStagger_20_29467_A_Primary.webp";

const bicycleBrand="TREK";
const bicycleModel="Modelo: Allant+ 9.9S Stagger";
const bicycleImageAlt=`La Allant+ 9.9S Stagger es la bicicleta eléctrica definitiva por la que merecerá la pena abandonar el coche.
El super potente motor Bosch Performance Speed y la batería de gran capacidad permiten cubrir largas distancias a gran velocidad por la ciudad y salir a rodar a tope los fines de semana.
Además, el ligero cuadro de carbono OCLV incorpora componentes de alto rendimiento y características diseñadas específicamente para los usuarios de bicicletas eléctricas más exigentes.`;

const DavidJobBike = () => (
  <>
    <p>Brand: {bicycleBrand}</p>
    <p>Model: {bicycleModel}</p>
    <img
      src={bicycleImage}
      alt={bicycleImageAlt}
    />
  </>
);

export default DavidJobBike;
