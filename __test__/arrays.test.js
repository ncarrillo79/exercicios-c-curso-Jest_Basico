const { carsList, brandsList } = require("../src/arrays");

describe("verificando las marcas existentes", () => {
  test("the Array not be null", () => {
    expect(brandsList()).not.toBeNull();
  });
});

describe("Verificando los autos existentes", () => {
  test("Be sure array not null", () => {
    expect(carsList()).not.toBeNull();
  });

  test("check if contain a VW Golf", () => {
    expect(carsList()).toContain("VW Golf GTI");
  });

  test("check array length", () => {
    expect(carsList()).toHaveLength(4);
  });
});
