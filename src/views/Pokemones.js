import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function UserPage() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [info, setInfo] = useState([]);    

  const irAPersonajes = () => {
    navigate(`/pokemones/${name}`);
  };
  
  const consumirApi = () => {

    const url = "https://pokeapi.co/api/v2/pokemon/";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setInfo(data.results));

  };  
  /**LLamamos al función que consume la API al momento de montar el componente */
  useEffect(() => {
    consumirApi();
  }, []);


  return (
    <div className="select">
      <h1>Selecciona un pokemon</h1>
      <select value={name} onChange={(e) => setName(e.target.value)}>
        <option key="" value="">
            Seleccione Pokemon
          </option>
        {info.map((item) => (                  
          <option key={item.name} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
      <button onClick={irAPersonajes}>Ver Detalle</button>
    </div>
  );
}
