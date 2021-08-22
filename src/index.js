
// You should implement your task here.

// let a = [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9],
// ];

module.exports = function towelSort (matrix) {
  let g = [];
  
    if ((matrix) == !Array || matrix == null)
     return g
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 !== 0) {
        g.push((matrix[i]).reverse());
      } else g.push(matrix[i]);

    }
    // if (matrix.length ==0){
    //   return [];
    // }
  return( g.flat())
  }  


