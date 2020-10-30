import React, { useState, useEffect } from 'react';

function Incrementer(props) {
  const [times, setTimes] = useState(0);

  const incrementTimes = () => {
    setTimes(times + 1);
    props.somethingChanged();
  }

  return (
    <>
      <p>He hecho click {times} veces</p>
      <button onClick={incrementTimes}>Aumenta el número de veces en uno</button>
    </>
  );
}

export default Incrementer;