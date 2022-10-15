import Header from "./Header";

describe("Given the component Header", () => {
  describe("When rendered the Header", () => {
    test("Then the component Header should appear with a nav element", () => {
      const screen = document.createElement("div");
      const header = new Header(screen);
      header.render();

      const nav = screen.querySelector("nav");

      expect(header).not.toBeNull();
      expect(nav).not.toBeNull();
    });
  });

  describe("When rendered the Header", () => {
    test("Then it must show the pokemon logo and his alternative text", () => {
      const screen = document.createElement("div");

      const header = new Header(screen);
      header.render();
      const logo = screen.querySelector("img");

      expect(logo).not.toBeNull();
      expect(logo.alt).toBe("Pokemon series logo");
    });
  });
});
