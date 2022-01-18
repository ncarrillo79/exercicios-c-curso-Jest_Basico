const getData = require("../src/promisse");
const API = "https://pokeapi.co/api/v2/pokemon/raticate";

it("should be returned raticate info", () => {
  return getData(API).then((response) => {
    expect(response.data.name).toBe("raticate");
  });
});

it("should fail by url invalid", () => {
  expect.assertions(1);
  return getData("ggfdkjfgkgd").catch((err) => expect(err).not.toBeNull());
});
