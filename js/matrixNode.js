(function(window) {
  'use strict';

class node {
  constructor(x, y, weight) {
    this.x = x
    this.y = y
    this.weight = weight
  }
  position(){
    return {
      x: this.x,
      y: this.y}
  }
  getCost(fromNeighbor){
    if (fromNeighbor && fromNeighbor.x !== this.x && fromNeighbor.y !== this.y) {
      return this.weight * 1.41421;
    }
    return this.weight;
  }
  isWall (){
    return this.weight === 0
  }
}

class aStarNode extends node {
  constructor(x, y, weight) {
    super(x, y, weight)
    this.f = 0
    this.g = 0
    this.h = 0
    this.visited = false
    this.closed = false
    this.parent = null
  }
  reset(){
    this.f = 0
    this.g = 0
    this.h = 0
    this.visited = false
    this.closed = false
    this.parent = null
  }
}
/*
  function node (x, y, weight){
    this.x = x
    this.y = y
    this.weight = weight
  }

  node.prototype.position = function () {
    return {
      x: this.x,
      y: this.y};
  };

  node.prototype.getCost = function (fromNeighbor) {
    // Check Diagonal movement if allowed
    if (fromNeighbor && fromNeighbor.x !== this.x && fromNeighbor.y !== this.y) {
      return this.weight * 1.41421;
    }
    return this.weight;
  };

  node.prototype.isWall = function () {
    return this.weight === 0;
  };
*/
  window.Nodes = window.Nodes || {};
  Nodes.simple = node;
  Nodes.aStar = aStarNode;
}(window));
