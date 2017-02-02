(function(window){
  'use strict';
class matrix {
  constructor(size, weight, node) {
    this.size = size
    this.grid = []
    this.weight = weight || 4
    this.node = node || false
    this.searchedNodes = [] // TODO: move to a more appropriate location.
    this.init()
    this.write()
  }
  init() {
    for (var y = 0; y < this.size; y++) {
      let row = this.grid[y] = [];
      for (var x = 0; x < this.size; x++) {
        if (this.node) {
            row.push(new node(x, y, this.randomWeight()));
        } else {
          row.push(this.randomWeight());
        }
      }
    }
  }
  neighbors(node, diagonalCheck = false){
    let neighbors = [];

    //check up
    if (this.grid[node.y - 1] && this.grid[node.y - 1][node.x]) {
      neighbors.push(this.grid[node.y - 1][node.x]);
    }
    //check right
    if (this.grid[node.y] && this.grid[node.y][node.x + 1]) {
      neighbors.push(this.grid[node.y][node.x + 1]);
    }
    //check down
    if (this.grid[node.y + 1] && this.grid[node.y + 1][node.x]) {
      neighbors.push(this.grid[node.y + 1][node.x]);
    }
    //check left
    if (this.grid[node.y] && this.grid[node.y][node.x - 1]) {
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
  markNode(node){
    this.searchedNodes.push(node)
  }
  resetNodes(){
    for (let i = 0; i < this.searchedNodes.length; i++) {
      this.searchedNodes[i].reset()
    }
    this.searchedNodes = []
  }
  // for testing doesn't belong here!
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
