import PokemonList from "./PokemonList";

describe("Given the component Pokemon List", () => {
  describe("When it is rendered", () => {
    test("Then it should contain a ol element with a class 'pokemon-list'", async () => {
      const screen: HTMLElement = document.createElement("div");
      const expectedClass = "pokemon-list";

      const container = new PokemonList(screen);
      await container.render();

      const olList = screen.querySelector(".pokemon-list");

      expect(olList.className).toBe(expectedClass);
      expect(olList).not.toBeNull();
    });
  });
});
