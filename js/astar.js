(function(window) {
  'use strict';

  let aStar = {
    // TODO: add argument for options to enable different heuristics
    search: function (matrix, start, end){
      matrix.resetNodes()

      let heuristic = this.heuristic.manhattan
      let binHeap = this.getHeap()
      let closestNode = start

      start.h = heuristic(start, end)
      matrix.markNode(start)

      binHeap.push(start)

      while (binHeap.size() > 0) {
        let currentNode = binHeap.pop()

        if (currentNode === end) {
          return this.pathTo(currentNode)
        }

        currentNode.closed = true

        let neighbors = matrix.neighbors(currentNode)
        let nl = neighbors.length
        for (let i = 0; i < nl; i++) {
          let n = neighbors[i]
          if (n.closed || n.isWall()) {
            continue
          }
            let gScore = currentNode.g + n.getCost(currentNode)
            let visited = n.visited

            if (!visited || gScore < n.g) {
              let hValue = n.h || heuristic(n, end)
              n.mark(currentNode, hValue, gScore)
              matrix.markNode(n)

              if (closestNode) {
                if (n.h < closestNode.h || n.h === closestNode.h && n.g < closestNode.g) {
                  closestNode = n
                }
              }

              if (!visited) {
                binHeap.push(n)
              } else {
                binHeap.rescore(n)
              }
            }
        }
      }
      //if no path found, proceed to return the path to the closest node to destination
      return this.pathTo(closestNode)
    },
    heuristic: {
      manhattan: function(pos0, pos1){
        return (Math.abs(pos1.x - pos0.x) + Math.abs(pos1.y - pos0.y))
      }
      //Euclidean: // TODO: implementation for enabling diagonal movement
    },
    getHeap: function (){
      return new binaryHeap((node) => node.f)
    },
    pathTo: function(node){
      let currentNode = node
      let path = []
      while (currentNode.parent) {
        let testObj = {x: currentNode.x, y: currentNode.y}
        path.unshift(testObj)
        currentNode = currentNode.parent
      }
      return JSON.stringify(path, 2)
    }
  }
  window = window || {};
  window.aStar = aStar;
}(window));
