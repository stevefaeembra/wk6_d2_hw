const assert = require('assert');
const Park = require('../models/park');

describe('Park',function () {

  let park;

  beforeEach(function () {
    park = new Park("Jurassic World");
  });

  it("should have a name", function () {
    assert.strictEqual(park.name, "Jurassic World");
  });

  it("should have a ticket price");

  it("should have a collection of dinosaurs");

  it("should be possible to Add a dinosaur to its collection of dinosaurs");

  it("should be possible to Remove a dinosaur from its collection of dinosaurs");

  it("should be possible to Find the dinosaur that attracts the most visitors");

  it("should be possible to Find all dinosaurs of a particular species");

  it("should be possible to Calculate the total number of visitors per day");

  it("should be possible to Calculate the total number of visitors per year");

  it("should be possible to Calculate the total revenue from ticket sales for one year");


});
