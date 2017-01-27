(function(window) {
  'use strict';

  class binaryHeap {
    constructor(callback) {
      this.content = []
      this.scoreFunction = callback
    }
    push(element){
      this.content.push(element)
      this.downHeap(this.content.length - 1)
    }
    remove(node){
      let index = this.content.indexOf(node)
      let end = this.content.pop()

      if (index !== this.content.length - 1) {
        this.content[index] = end

        if (this.scoreFunction(end) < this.scoreFunction(node)) {
          this.downHeap(index)
        } else {
          this.upHeap(index)
        }
      }
    }
    size(){
      return this.content.length
    }
    rescore(){
      this.downHeap(this.content.indexOf(node))
    }
    pop(){
      let result = this.content[0]
      let end = this.content.pop()

      if (this.content.length > 0) {
        this.content[0] = end
        this.upHeap(0)
      }
      return result
    }
    downHeap(index){
      let element = this.content[index];

      while (index > 0) {
        let parentIndex = ((index + 1) >> 1) - 1;
        let parent = this.content[parentIndex];

        if (this.scoreFunction(element) < this.scoreFunction(parent)) {
          this.content[parentIndex] = element;
          this.content[index] = parent;

          index = parentIndex;
        } else {
          break;
        }
      }
    }
    upHeap(index){
      let len = this.content.length;
      let element = this.content[index];
      let eScore = this.scoreFunction(element);

      while (true) {
        let child2N = (index + 1) << 1;
        let child1N = child2N - 1;
        let swap = null;
        let child1Score;

        if (child1N < len) {
          let child1 = this.content[child1N];
          child1Score = this.scoreFunction(child1);

          if (child1Score < eScore) {
            swap = child1N;
          }
        }

        if (child2N < len) {
          let child2 = this.content[child2N];
          let child2Score = this.scoreFunction(child2);

          if (child2Score < (swap === null ? eScore : child1Score)) {
            swap = child2N;
          }
        }

        if (swap === null) {
          break;
        } else {
          this.content[index] = this.content[swap];
          this.content[swap] = element;
          index = swap;
        }
      }
    }
    testHeap(){
      let self = this;
      let arr = [10, 3, 4, 8, 2, 9, 7, 1, 2, 6, 5];
      arr.forEach(function(e){
        self.push(e);

      });
      console.log(this.content);

      this.remove(2);

      console.log(this.content);
      while (this.size() > 0) {
        console.log(this.pop());
      }
    }
  }

  window = window || {};
  window.binaryHeap = binaryHeap;
}(window));
