import Component from "../Component/Component.js";
import type List from "./types.js";
import { showPokemons } from "../../utils/getPokemons.js";

class PokemonList extends Component implements List {
  page: number;

  constructor(parentElement: HTMLElement) {
    super(parentElement, "pokemon-container-list", "div");
  }

  async render() {
    super.render();

    this.domElement.innerHTML = `
    <ol class="pokemon-list"></ol>
    `;

    const pokemonsCardsFather: HTMLElement =
      document.querySelector(".pokemon-list");

    await showPokemons(pokemonsCardsFather);
  }
}

export default PokemonList;
