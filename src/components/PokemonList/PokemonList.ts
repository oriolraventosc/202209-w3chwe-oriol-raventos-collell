import Component from "../Component/Component.js";
import type List from "./types.js";
import { showPokemons } from "../../utils/getPokemons.js";

class PokemonList extends Component implements List {
  offset: number;
  constructor(parentElement: HTMLElement) {
    super(parentElement, "pokemon-container-list", "div");
  }

  async render() {
    super.render();

    this.domElement.innerHTML = `
    <ol class="pokemon-list"></ol>
    `;
  }

  /* EventListenerNextPage() {
    const buttonToNextPage: HTMLButtonElement =
      document.querySelector(".next-page");
    const mainContainerIndex: HTMLElement = document.querySelector(
      ".pokemons-container"
    );
    this.offset = 1;
    buttonToNextPage.addEventListener("click", async () => {
      if (this.offset < 1154) {
        this.offset += 20;
      } else {
        this.offset = 1154;
      }

      const newPokeList = new PokemonList(mainContainerIndex, this.offset);
      await newPokeList.render();
    });
  } */
}

export default PokemonList;
