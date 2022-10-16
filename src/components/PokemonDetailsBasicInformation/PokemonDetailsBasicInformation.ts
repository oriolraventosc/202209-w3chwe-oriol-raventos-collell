import Component from "../Component/Component.js";
import type { PokemonInfo } from "../../utils/types.js";

class PokemonDetailsBasicInformation extends Component {
  constructor(parentElement: HTMLElement, public pokemonInfo: PokemonInfo) {
    super(parentElement, "pokemon-details-card", "section");
  }

  render() {
    const {
      name,
      sprites: { front_default: frontDefault },
      types,
      stats: [
        {
          base_stat: hpNumber,
          stat: { name: hp },
        },
        {
          base_stat: attackNumber,
          stat: { name: attack },
        },
        {
          base_stat: defenseNumber,
          stat: { name: defense },
        },
        {
          base_stat: specialAttackNumber,
          stat: { name: specialAttack },
        },
        {
          base_stat: specialDefenseNumber,
          stat: { name: specialDefense },
        },
        {
          base_stat: speedNumber,
          stat: { name: speed },
        },
      ],
    } = this.pokemonInfo;

    super.render();

    this.domElement.innerHTML = `
    <div class="pokemon-details-card__header">
      <span class="pokemon-basic-info__name">${name}</span>
      <img href="pokemon.html" class="pokemon-basic-info__image" src="${frontDefault}" alt="${name} Pokemon" />
    </div>
    <div class="pokemon-details-card__stats">
      <span class="pokemon-basic-info__stat">${hp}: ${hpNumber}</span>
      <span class="pokemon-basic-info__stat">${attack}: ${attackNumber}</span>
      <span class="pokemon-basic-info__stat">${defense}: ${defenseNumber}</span>
      <span class="pokemon-basic-info__stat">${specialAttack}: ${specialAttackNumber}</span>
      <span class="pokemon-basic-info__stat">${specialDefense}: ${specialDefenseNumber}</span>
      <span class="pokemon-basic-info__stat">${speed}: ${speedNumber}</span>
    </div>
    `;
  }
}
export default PokemonDetailsBasicInformation;
