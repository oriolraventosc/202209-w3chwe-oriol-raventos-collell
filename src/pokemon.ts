import Header from "./components/Header/Header.js";
import PokemonDetailsHeader from "./components/PokemonDetailsHeader/PokemonDetailsHeader.js";
import PokemonList from "./components/PokemonList/PokemonList.js";
import PokemonsContainer from "./components/PokemonsContainer/PokemonsContainer.js";
import { showPokemons } from "./utils/getPokemons.js";
import { showPokemonDetails } from "./utils/getPokemonDetails.js";

const root: HTMLElement = document.querySelector(".root-pokemon");

const mainContainer = new PokemonsContainer(root);
mainContainer.render();

const mainContainerIndex: HTMLElement = document.querySelector(
  ".pokemons-container"
);

const header = new Header(mainContainerIndex);
header.render();

const pokemonDetailsHeader = new PokemonDetailsHeader(mainContainerIndex);
pokemonDetailsHeader.render();

await showPokemonDetails(mainContainerIndex);
