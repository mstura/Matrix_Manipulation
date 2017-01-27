(function(window) {
  'use strict';

  let aStar = {
    search: function (matrix, start, end, options = {}){

    },
    getHeap: function (){
      return new binaryHeap((node) => node.f)
    }
  }
  window = window || {};
  window.aStar = aStar;
}(window));
