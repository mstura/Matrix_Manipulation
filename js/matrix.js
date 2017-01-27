(function(window){
  'use strict';
class matrix {
  constructor(size, weight, options = {useNodes: false, type: null}) {
    this.size = size
    this.grid = []
    this.weight = weight || 4
    this.options = {}
    this.options.useNodes = options.useNodes || false
    this.options.type = options.type || null
    this.init(this.options)
    this.write()
  }
  init(options) {
    for (var y = 0; y < this.size; y++) {
      let row = this.grid[y] = [];
      for (var x = 0; x < this.size; x++) {
        if (options.useNodes) {
          if (options.type === 'aStar') {
            row.push(new Nodes.aStar(x, y, this.randomWeight()));
          } else if (options.type === 'simple') {
            row.push(new Nodes.simple(x, y, this.randomWeight()));
          }
        } else {
          row.push(this.randomWeight());
        }
      }
    }
  }
  neighbors(node, diagonalCheck){
    let neighbors = [];

    //check up
    if (this.grid[node.y - 1][node.x]) {
      neighbors.push(this.grid[node.y - 1][node.x]);
    }
    //check right
    if (this.grid[node.y][node.x + 1]) {
      neighbors.push(this.grid[node.y][node.x + 1]);
    }
    //check down
    if (this.grid[node.y + 1][node.x]) {
      neighbors.push(this.grid[node.y + 1][node.x]);
    }
    //check left
    if (this.grid[node.y][node.x - 1]) {
      neighbors.push(this.grid[node.y][node.x - 1]);
    }

    if (diagonalCheck) {
      //check top-right
      if (this.grid[node.y - 1][node.x + 1]) {
        neighbors.push(this.grid[node.y - 1][node.x + 1]);
      }
      //check bottom-right
      if (this.grid[node.y + 1][node.x + 1]) {
        neighbors.push(this.grid[node.y + 1][node.x + 1]);
      }
      //check bottom-left
      if (this.grid[node.y + 1][node.x - 1]) {
        neighbors.push(this.grid[node.y + 1][node.x - 1]);
      }
      //check top-left
      if (this.grid[node.y - 1][node.x - 1]) {
        neighbors.push(this.grid[node.y - 1][node.x - 1]);
      }
    }
    return neighbors;
  }
  randomWeight(){
    return Math.floor(Math.random() * this.weight)
  }
  randomLocation(){
    return {
      x: Math.floor(Math.random() * this.size),
      y: Math.floor(Math.random() * this.size)
    }
  }
  write(){
    let text = '';
    for (var i = 0; i < this.size; i++) {
      text += JSON.stringify(this.grid[i]) + '<br>';
    }
    document.body.innerHTML = text;
  }
}

window = window || {};
window.matrix = matrix;
}(window));
