const assert = require('assert');
const Dinosaur = require('../models/dinosaur');

describe('Dinosaur',function () {
  let barney;

  beforeEach(function () {
    barney = new Dinosaur("Velociraptor","Carnivore",10);
  });

  it("should have a species", function () {
    assert.strictEqual(barney.species,"Velociraptor");
  });

  it("should have a diet (e.g. carnivore, herbivore or omnivore", function () {
    assert.strictEqual(barney.diet,"Carnivore");
  });

  it("should have an average number of visitors attracted per day", function () {
    assert.strictEqual(barney.visitorsPerDay,10);
  });

});
