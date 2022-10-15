import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";


export default function UserPage() {
  const { name } = useParams();
  const [info2, setInfo2] = useState();
  


  const consumirApi = () => {

    const url = "https://pokeapi.co/api/v2/pokemon/" + name;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setInfo2(data));
    
  };

  /**LLamamos al función que consume la API al momento de montar el componente */
  useEffect(() => {
    consumirApi();   
  }, []);

  const foto = info2 !== undefined ?  (info2.sprites.other.dream_world.front_default): "";

 
  return (
    <div className="detalle">
      <div className="foto">
        <img src={foto === "" ? "" : foto} alt='pokemon'></img>
      </div>
      <div><p className="name">{name}</p>
        <ul>
          {foto === "" ? "" :
            (info2.stats).map((item) => (
              <li>{item.stat.name}: {item.base_stat}</li>
            ))
          }
        </ul></div>

    </div>
  );
}
