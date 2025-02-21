import "./styles/mainpage.css";
import PokedexFrame from "./PokedexFrame";
import pikachu from "./pictures/pikachu.png";
import charizard from "./pictures/charizard.png";
import eevee from "./pictures/eve.png";

const pokemonPicInfo = [
  {
    name: "pikachu",
    pic: pikachu,
    desc: "Pikachu has electricity-storing pouches on its cheeks. These appear to become electrically charged during the night while PIKACHU sleeps.",
  },
  {
    name: "charizard",
    pic: charizard,
    desc: "An orange, dragon-like Pokémon, Charizard is the evolved form of Charmeleon and the final evolution of Charmander.",
  },
  {
    name: "eevee",
    pic: eevee,
    desc: "EEVEE has an unstable genetic makeup that suddenly mutates due to its environment. Radiation from various STONES causes this POKéMON to evolve.",
  },
];

function Pokedex({ selectedPokemon }) {
  const pokemonClicked = pokemonPicInfo.find(
    (pokemon) => pokemon.name === selectedPokemon
  );

  const pokemonClickedPicture = pokemonClicked ? pokemonClicked.pic : null;
  const pokemonClickedDescription = pokemonClicked ? pokemonClicked.desc : null;
  return (
    <PokedexFrame
      pokemonPic={pokemonClickedPicture}
      pokemonDesc={pokemonClickedDescription}
    />
  );
}

export default Pokedex;
