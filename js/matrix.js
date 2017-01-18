//(function() {
  'use strict';
  function matrix(size, weight){
    this.size = size;
    this.grid = [];
    this.weight = weight || 4;
    this.entry = this.randomLocation();
    this.exit = this.randomLocation();
    this.build();
    this.defineIO();
    this.write();
  }

  matrix.prototype.build = function () {
    for (var x = 0; x < this.size; x++) {
      let row = this.grid[x] = [];

        for (var y = 0; y < this.size; y++) {
          let random = this.randomWeight();
        row.push(random);
        }
      }
  };

  matrix.prototype.randomWeight = function () {
    return Math.floor(Math.random() * this.weight);
  };

  matrix.prototype.generateWeight = function () {
    let weight = this.randomWeight();
    if (weight === 0) {
      weight = null;
    }
    return weight;
  };

matrix.prototype.write = function () {
  let text = '';
  for (var i = 0; i < this.size; i++) {
    text += JSON.stringify(this.grid[i]) + '<br>';
  }
  document.body.innerHTML = text;
};

matrix.prototype.randomLocation = function () {
  let randomPoint = {
    x: Math.floor(Math.random() * this.size),
    y: Math.floor(Math.random() * this.size)
  };
  if (this.testLocation(randomPoint)) {
    return this.randomLocation();
  } else {
    return randomPoint;
  }
};

matrix.prototype.testLocation = function (location) {
  if (this.entry) {
    if (location.x === this.entry.x && location.y === this.entry.y) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

matrix.prototype.defineIO = function () {
  let e = this.entry;
  let t = this.exit;
  this.grid[e.y][e.x] = 'S';
  this.grid[t.y][t.x] = 'X';
};
//}());
