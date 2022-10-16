import type { PokemonInfo } from "../../utils/types.js";
import Component from "../Component/Component.js";
import type BasicPokemonInfo from "./types.js";

class PokemonCard extends Component implements BasicPokemonInfo {
  name: string;
  url: string;

  constructor(parentElement: HTMLElement, public pokemonInfo: PokemonInfo) {
    super(parentElement, "pokemon-basic-info", "li");
  }

  render(): void {
    const {
      name,
      sprites: { front_default: frontDefault },
    } = this.pokemonInfo;

    super.render();

    this.domElement.innerHTML = `
<img href="pokemon.html" class="pokemon-basic-info__image" src="${frontDefault}" alt="${name} Pokemon" />
<span class="pokemon-basic-info__name"><a onclick="" href="pokemon.html">${name}</a></span>
`;
  }
}

export default PokemonCard;
