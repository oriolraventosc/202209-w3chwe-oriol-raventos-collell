import PokemonsContainer from "./PokemonsContainer";

describe("Given the component PokemonsContainer", () => {
  describe("When PokemonsContainer is rendered", () => {
    test("Then the container must have a header and a div element", () => {
      const screen = document.createElement("div");

      const newSection = new PokemonsContainer(screen);
      newSection.render();

      expect(newSection).not.toBeNull();
    });
  });
});
