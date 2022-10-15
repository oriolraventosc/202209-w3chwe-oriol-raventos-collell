import Component from "../Component/Component.js";

class Header extends Component {
  constructor(parentElement: HTMLElement) {
    super(parentElement, "main-header", "div");
  }

  render(): void {
    super.render();

    this.domElement.innerHTML = `
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" alt="Pokemon series logo" class="header__logo"/>
    <nav class="navigation-menu" href="index.html">
      <ul class="navigation-menu__list">
        <li class="navigation-menu__item"><a href="index.html">Explore Pokemons</a></li>
        <li class="navigation-menu__item"><a href="index.html">Your Pokemons</a></li>
      </ul>
    </nav>
    `;
  }
}

export default Header;
