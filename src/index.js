
// You should implement your task here.

// let a = [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9],
// ];

module.exports = function towelSort (matrix) {

for (let i =0; i<matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++){
    let columnIndex = i % 2 ===0
    ? j 
    : (matrix[i].length -j -1);
    console.log( matrix[i] [columnIndex])
  } 
}    

  return [];
}
