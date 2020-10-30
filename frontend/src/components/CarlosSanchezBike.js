import Bike from "../img/carlosBike.png";

const CarlosSanchezBike = (props) => {
  const brand = "Default";
  const model = "Bike";

  return (
    <>
      <img src={Bike} alt="Default bike image"></img>
      <p>Model: {model}</p>
      <p>Brand: {brand}</p>
    </>
  );
};

export default CarlosSanchezBike;
