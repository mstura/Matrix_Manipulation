(function(window) {
  'use strict';

class node {
  constructor(x, y, weight) {
    this.x = x
    this.y = y
    this.weight = weight
    this.f = 0
    this.g = 0
    this.h = 0
    this.visited = false
    this.closed = false
    this.parent = null
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
  reset(){
    this.f = this.g = this.h = 0
    this.visited = this.closed = false
    this.parent = null
  }
  mark(node, heuristicValue, gScore){
    this.visited = true
    this.parent = node
    this.h = heuristicValue
    this.g = gScore
    this.f = this.g + this.h
  }
}

  window = window || {};
  window.node = node;
}(window));
