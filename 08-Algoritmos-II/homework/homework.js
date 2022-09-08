'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length < 1){
    return[];
  }
  var left = [];
  var rigth = [];
  var pivot = array[0];

  for(var i = 1;i <array.length; i++){
    if(array[i]<pivot){
      left.push(array[i]);
    }
    else{
      rigth.push(array[i]);
    }
  }
  return [].concat(quickSort(left), pivot, quickSort(rigth));

}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let middle = Math.floor(array.length / 2)

  if(array.length < 2) return array

  let left = array.splice(0, middle) 
  // left =  [2,4,6] 
  // array = [3,2,6,2232]
  console.log("left",left, "arr",array)
  return merge(mergeSort(left), mergeSort(array))
}

// merge --> dos elementos y ordenando
function merge(left, right) { // [ ]  [ 13, 4]

  let arr = [] // [ 1, 2, 12, 3,]

  while(left.length && right.length){
    // comparar los elementos
    
    if(left[0] < right[0]) {
      arr.push(left[0])
      left.shift()
    } else {
      arr.push(right[0])
      right.shift()
    }
  }
  return (arr).concat(left).concat(right)
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
