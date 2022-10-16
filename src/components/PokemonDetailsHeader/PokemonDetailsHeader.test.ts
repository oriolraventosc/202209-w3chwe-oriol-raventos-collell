import PokemonDetailsHeader from "./PokemonDetailsHeader";

describe("Given the component PokemonDetailsHeader", () => {
  describe("When it is rendered", () => {
    test("Then it should show an arrow icon and a heart icon", () => {
      const screen = document.createElement("div");
      const container = new PokemonDetailsHeader(screen);
      container.render();
      const expectedClassArrowIcon = "fa-solid fa-arrow-left-long";
      const expectedClassHeartIcon = "fa-solid fa-heart";

      const arrowIcon: HTMLPictureElement = screen.querySelector(
        ".fa-arrow-left-long"
      );
      const heartIcon: HTMLPictureElement = screen.querySelector(".fa-heart");

      expect(arrowIcon.className).toBe(expectedClassArrowIcon);
      expect(heartIcon.className).toBe(expectedClassHeartIcon);
    });
  });
});
