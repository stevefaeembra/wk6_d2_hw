const Park = function (name, ticket_price) {
  this.name = name;
  this.ticket_price = ticket_price;
  this.dinosaurs = [];
};

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function (dinosaur) {
  // remove a specific dinosaur
  let index = this.dinosaurs.indexOf(dinosaur);
  if (index>-1) {
    this.dinosaurs.splice(index,1);
  }
};

module.exports = Park;
