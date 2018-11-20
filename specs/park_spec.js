const assert = require('assert');
const Park = require('../models/park');
const Dinosaur = require("../models/dinosaur");

describe('Park',function () {

  let park;

  beforeEach(function () {
    park = new Park("Jurassic World", 150.00);
  });

  it("should have a name", function () {
    assert.strictEqual(park.name, "Jurassic World");
  });

  it("should have a ticket price", function () {
    assert.strictEqual(park.ticket_price, 150.00);
  });

  it("should have a collection of dinosaurs", function () {
    assert.deepStrictEqual(park.dinosaurs,[]);
  });

  it("should be possible to Add a dinosaur to its collection of dinosaurs", function () {
    let icky = Dinosaur("Icthyosaurus", "Carnivore", 100);
    let barney = Dinosaur("Velociraptor","Carnivore",50);
    park.addDinosaur(icky);
    park.addDinosaur(barney);
    assert.deepStrictEqual(park.dinosaurs,[icky,barney]);
  });

  it("should be possible to Remove a dinosaur from its collection of dinosaurs", function () {
    let icky = Dinosaur("Icthyosaurus", "Carnivore", 100);
    let barney = Dinosaur("Velociraptor","Carnivore",50);
    park.addDinosaur(icky);
    park.addDinosaur(barney);
    park.removeDinosaur(barney);
    assert.deepStrictEqual(park.dinosaurs,[icky]);
  });

  it("should be possible to Find the dinosaur that attracts the most visitors", function () {
    let icky = new Dinosaur("Icthyosaurus", "Carnivore", 100);
    let barney = new Dinosaur("Velociraptor","Carnivore",50);
    let cleverGirl = new Dinosaur("Velociraptor","Carnivore",400);
    park.addDinosaur(icky);
    park.addDinosaur(barney);
    park.addDinosaur(cleverGirl);
    assert.strictEqual(park.mostPopularDinosaur(),cleverGirl);
  });

  it("should be possible to Find all dinosaurs of a particular species", function () {
    let icky = new Dinosaur("Icthyosaurus", "Carnivore", 100);
    let barney = new Dinosaur("Velociraptor","Carnivore",50);
    let cleverGirl = new Dinosaur("Velociraptor","Carnivore",400);
    let carl = new Dinosaur("Stegasaurus","Herbivore", 120);
    park.addDinosaur(icky);
    park.addDinosaur(barney);
    park.addDinosaur(cleverGirl);
    park.addDinosaur(carl);
    assert.deepStrictEqual(park.fetchDinosaursOfType("Velociraptor"),[barney,cleverGirl]);
  });

  it("should be possible to Calculate the total number of visitors per day", function () {
    let icky = new Dinosaur("Icthyosaurus", "Carnivore", 100);
    let barney = new Dinosaur("Velociraptor","Carnivore",50);
    let cleverGirl = new Dinosaur("Velociraptor","Carnivore",400);
    let carl = new Dinosaur("Stegasaurus","Herbivore", 120);
    park.addDinosaur(icky);
    park.addDinosaur(barney);
    park.addDinosaur(cleverGirl);
    park.addDinosaur(carl);
    assert.strictEqual(park.getDailyVisitors(),670);
  });

  it("should be possible to Calculate the total number of visitors per year", function () {
    let icky = new Dinosaur("Icthyosaurus", "Carnivore", 100);
    let barney = new Dinosaur("Velociraptor","Carnivore",50);
    let cleverGirl = new Dinosaur("Velociraptor","Carnivore",400);
    let carl = new Dinosaur("Stegasaurus","Herbivore", 120);
    park.addDinosaur(icky);
    park.addDinosaur(barney);
    park.addDinosaur(cleverGirl);
    park.addDinosaur(carl);
    assert.strictEqual(park.getAnnualVisitors(),244550);    
  });

  it("should be possible to Calculate the total revenue from ticket sales for one year");


});
