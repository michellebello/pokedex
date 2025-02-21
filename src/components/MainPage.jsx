import { useState } from "react";
import Pokedex from "./Pokedex";
import "./styles/mainpage.css";

function MainPage() {
  const [selectedPokemon, setSelectedPokemon] = useState("");

  const pokemonPicRouting = (e) => {
    setSelectedPokemon(e.target.value);
  };
  return (
    <>
      <select className="search-bar" onChange={pokemonPicRouting}>
        <option value="">Select a Pokémon</option>
        <option value="pikachu">Pikachu</option>
        <option value="charizard">Charizard</option>
        <option value="eevee">Eevee</option>
      </select>

      <Pokedex selectedPokemon={selectedPokemon} />
    </>
  );
}

export default MainPage;
