import Header from "./components/Header/Header.js";
import PokemonList from "./components/PokemonList/PokemonList.js";
import PokemonsContainer from "./components/PokemonsContainer/PokemonsContainer.js";

const root: HTMLElement = document.querySelector(".root");

const mainContainer = new PokemonsContainer(root);
mainContainer.render();

const mainContainerIndex: HTMLElement = document.querySelector(
  ".pokemons-container"
);

const header = new Header(mainContainerIndex);
header.render();

const pokeList = new PokemonList(mainContainerIndex);
void pokeList.render();
