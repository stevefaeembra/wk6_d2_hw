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

Park.prototype.mostPopularDinosaur = function () {
  // find dinosaur with the highest average
  let max_visitors = 0;
  let best_draw;
  for (let dinosaur of this.dinosaurs) {
    if (dinosaur.visitorsPerDay > max_visitors) {
      max_visitors = dinosaur.visitorsPerDay;
      best_draw = dinosaur;
    }
  }
  return best_draw;
};

Park.prototype.fetchDinosaursOfType = function (dinosaurType) {
    // get all dinos of a specific type
    // we build up a list
    let dinos = [];
    for (let dinosaur of this.dinosaurs) {
      if (dinosaur.species === dinosaurType) {
        dinos.push(dinosaur);
      }
    }
    return dinos;
};

Park.prototype.getDailyVisitors = function () {
    // total average visitors per day
    let total = 0;
    for (let dinosaur of this.dinosaurs) {
      total += dinosaur.visitorsPerDay;
    }
    return total;
};


module.exports = Park;
