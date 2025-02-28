import "./styles/mainpage.css";
import PokedexFrame from "./PokedexFrame";
import pikachu from "./pictures/pikachu.png";
import charizard from "./pictures/charizard.png";
import eevee from "./pictures/eve.png";
import umbreon from "./pictures/umbreon.png";
import espeon from "./pictures/espeon.png";
import blastoise from "./pictures/blastoise.png";

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
  {
    name: "umbreon",
    pic: umbreon,
    desc: "Umbreon is a dark-type Pokémon that looks like a black cat with yellow rings. It's known for being nocturnal, stalking prey in the dark.",
  },
  {
    name: "espeon",
    pic: espeon,
    desc: "Espeon is a quadruped mammalian Pokémon with cat-like features. It has sleek and lilac purple fur covers its body. It has a red jewel attached to its forehead.",
  },
  {
    name: "blastoise",
    pic: blastoise,
    desc: "Blastoise is a large, bipedal, reptilian Pokémon. It has a blue body with small purple eyes, a light brown belly, and a stubby tail.",
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
