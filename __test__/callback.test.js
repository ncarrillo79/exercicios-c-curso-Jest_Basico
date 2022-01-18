const fetchAPI = require("../src/callback");

it("should return the goku info", done => {
  const API = "https://pokeapi.co/api/v2/pokemon/ditto";

  function callback(err, data) {
    try {
      expect(err).toBeNull();
      expect(data).not.toBeNull();
      expect(data.name).toBe("ditto");
      done();
    } catch (err) {
      done(err);
    }
  }
  fetchAPI(API, callback);
});
