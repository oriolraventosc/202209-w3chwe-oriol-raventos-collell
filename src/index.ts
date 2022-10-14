import PokemonsContainer from "./components/PokemonsContainer/PokemonsContainer.js";

const root: HTMLElement = document.querySelector(".root");

const pokemonPageContainer = new PokemonsContainer(root);
pokemonPageContainer.render();
