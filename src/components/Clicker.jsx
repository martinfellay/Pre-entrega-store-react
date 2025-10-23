import { useState, useEffect } from "react";

const Clicker = () => {
  
  const [clic, setClic] = useState();

  // useEffect(() => {
  //   let title = `Ver mas detalles ${clic} Clic`;
  // },[clic])

  return(
    <button onClick={() => setClic(clic + 1)}>
      Ver mas detalles
    </button>
  );
}

export default Clicker;