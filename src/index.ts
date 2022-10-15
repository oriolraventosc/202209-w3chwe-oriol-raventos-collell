import Header from "./components/Header/Header.js";
import PokemonsContainer from "./components/PokemonsContainer/PokemonsContainer.js";

const root: HTMLElement = document.querySelector(".root");

const pokemonPageContainer = new PokemonsContainer(root);
pokemonPageContainer.render();

const pokemonPageContainerElement: HTMLElement = document.querySelector(
  ".pokemons-container"
);

const header = new Header(pokemonPageContainerElement);
header.render();
