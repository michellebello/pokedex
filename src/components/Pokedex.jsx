import "./styles/mainpage.css";
import PokedexFrame from "./PokedexFrame";
import pikachu from "./pictures/pikachu.png";
import charizard from "./pictures/charizard.png";
import eevee from "./pictures/eve.png";
import umbreon from "./pictures/umbreon.png";
import espeon from "./pictures/espeon.png";
import blastoise from "./pictures/blastoise.png";
import articuno from "./pictures/articuno.png";
import bulbasaur from "./pictures/bulbasaur.png";
import magikarp from "./pictures/magikarp.png";
import psyduck from "./pictures/psyduck.png";
import zapdos from "./pictures/zapdos.png";

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
  {
    name: "articuno",
    pic: articuno,
    desc: "Articuno is a legendary bird Pokémon with the power to control ice. It has sky blue feathers, a long tail, and wings that are said to be made of ice.",
  },
  {
    name: "bulbasaur",
    pic: bulbasaur,
    desc: "Bulbasaur is a small, amphibian-like Pokémon with a bulb on its back. It's a grass/poison type Pokémon that was the first Pokémon discovered and is known for being loyal and nurturing.",
  },
  {
    name: "magikarp",
    pic: magikarp,
    desc: "Magikarp is a weak, fish-like Pokémon, who is inept and almost useless in battle, while Gyarados is the evolved form of Magikarp, boasting significant strength and power.",
  },
  {
    name: "psyduck",
    pic: psyduck,
    desc: "Psyduck is a yellow-cream Pokémon that looks like a duck or platypus. It has a constant headache and uses psychic powers when it gets too bad. ",
  },
  {
    name: "zapdos",
    pic: zapdos,
    desc: "Zapdos is a legendary bird Pokémon that has the ability to control electricity. It usually lives in thunderclouds. It gains power if it is stricken by lightning bolts.",
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
