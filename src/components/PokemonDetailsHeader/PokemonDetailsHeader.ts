import Component from "../Component/Component.js";

class PokemonDetailsHeader extends Component {
  constructor(parentElement: HTMLElement) {
    super(parentElement, "pokemon-details-header", "div");
  }

  render(): void {
    super.render();

    this.domElement.innerHTML = `
    <a href="index.html"><i class="fa-solid fa-arrow-left-long"></i></a>
    <i href="index.html" class="fa-solid fa-heart"></i>
    `;
  }
}

export default PokemonDetailsHeader;
