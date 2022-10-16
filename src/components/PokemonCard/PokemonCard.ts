import type { PokemonInfo } from "../../utils/types.js";
import Component from "../Component/Component.js";
import type BasicPokemonInfo from "./types.js";

class PokemonCard extends Component implements BasicPokemonInfo {
  name: string;
  url: string;

  constructor(parentElement: HTMLElement, public pokemonInfo: PokemonInfo) {
    super(parentElement, "pokemon-list__item", "li");
  }

  render(): void {
    const {
      name,
      sprites: { front_default: frontDefault },
    } = this.pokemonInfo;

    super.render();

    this.domElement.innerHTML = `
    <div class="pokemon-list__item__card">
      <img href="pokemon.html" class="pokemon-list__item__image" src="${frontDefault}" alt="${name} Pokemon" />
      <span class="pokemon-list__item__name"><a class="poke-card-pokemon__name" onclick="" href="pokemon.html">${name}</a></span>
    </div>
    `;
  }
}

export default PokemonCard;
