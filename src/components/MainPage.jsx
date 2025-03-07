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
        <option value="articuno">Articuno</option>
        <option value="blastoise">Blastoise</option>
        <option value="bulbasaur">Bulbasaur</option>
        <option value="charizard">Charizard</option>
        <option value="eevee">Eevee</option>
        <option value="espeon">Espeon</option>
        <option value="magikarp">Magikarp</option>
        <option value="pikachu">Pikachu</option>
        <option value="psyduck">Psyduck</option>
        <option value="tyranitar">Tyranitar</option>
        <option value="exeggutor">Exeggutor</option>
        <option value="umbreon">Umbreon</option>
        <option value="lugia">Lugia</option>
        <option value="zapdos">Zapdos</option>
      </select>

      <Pokedex selectedPokemon={selectedPokemon} />
    </>
  );
}

export default MainPage;
