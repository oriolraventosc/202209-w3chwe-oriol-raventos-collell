import Header from "./Header";

describe("Given the component Header", () => {
  describe("When rendered the Header", () => {
    test("Then the component Header should appear with a nav element", () => {
      const screen = document.createElement("div");

      const header = new Header(screen);
      header.render();

      expect(header).not.toBeNull();
    });
  });
});
