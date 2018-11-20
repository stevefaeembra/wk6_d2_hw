const assert = require('assert');
const Dinosaur = require('../models/dinosaur');

describe('Dinosaur',function () {
  let barney;

  beforeEach(function () {
    barney = new Dinosaur("Velociraptor");
  });

  it("should have a species", function () {
    assert.strictEqual(barney.species,"Velociraptor");
  });

  it("should have a diet (e.g. carnivore, herbivore or omnivore");

  it("should have an average number of visitors attracted per day");

});
