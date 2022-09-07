"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro 
    ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

BinarySearchTree.prototype.insert = function (value) {
  //recibe un value, crea un nodo y lo inserta en la posicion correspondiente¿?
  // chequear si el value es mayor o menor que el value del nodo
  
  if(value > this.value){
    if(this.right !== null){
      // ocupada la rama
      this.right.insert(value)
    } else{
      // la rama esta vacia
      this.right = new BinarySearchTree(value)
    }
  }

  if(value < this.value){
    if(this.left !== null){
      this.left.insert(value)
    } else {
      this.left = new BinarySearchTree(value)
    }
  }

}

BinarySearchTree.prototype.size = function () {
  // contar la cantidad de nodos
  // si right y left === null --> 1
  if(!this.right && !this.left) return 1

  if(this.right === null && this.left !== null) return 1 + this.left.size()

  if(this.right !== null && this.left === null) return 1 + this.right.size()

  if(this.right !== null && this.left !== null) return 1 + this.right.size() + this.left.size()

}

BinarySearchTree.prototype.contains = function (value) {
  // recorrerlo
  if (value === this.value) return true

  if(value < this.value){
    if(!this.left) return false
    else {
      return this.left.contains(value)
    }
  } 
  if(value > this.value) {
    if(!this.right) return false
    else {
      return this.right.contains(value)
    } 
  }
}

BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
  // "post-order", "pre-order", o "in-order"

  // root - izq - der
  if(order === "pre-order"){
    cb(this.value)
    if(this.left) this.left.depthFirstForEach(cb, order)
    if(this.right) this.right.depthFirstForEach(cb, order)
  }
  // izq - der - root
  else if(order === "post-order") { 
    if(this.left) this.left.depthFirstForEach(cb, order)
    if(this.right) this.right.depthFirstForEach(cb, order)
    cb(this.value)
  }

  else { 
    if(this.left) this.left.depthFirstForEach(cb, order)
    cb(this.value)
    if(this.right) this.right.depthFirstForEach(cb, order)
  }

}
// pre-order --> root - izq - der
// --> [papa, piña, kiwi]

// post-order --> izq - der - root
// --> [piña, kiwi, papa]

// in-order --> izq - root - der
// --> [piña, banana, papa, kiwi]



//                 papa
//          /               \
//       piña                 kiwi
//     /      \             /      \
//   apple    banana     mango     limon

BinarySearchTree.prototype.breadthFirstForEach = function (cb, array=[]) {
  // si tiene ramas
  if(this.left !== null){
    array.push(this.left) //[piña] // 2 [apple]
  }

  if(this.right !== null){
    array.push(this.right) //[piña, kiwi] // 2 [apple, banana]
  }

  //1 [piña, kiwi] // 2 [apple, banana]

  cb(this.value) // papa // piña

  while(array.length > 0){
    array.shift() // piña
    .breadthFirstForEach(cb, array)
  }
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
