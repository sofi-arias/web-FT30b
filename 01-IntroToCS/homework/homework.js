'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let resul = 0;
  for(let i = 0; i < num.length; i++){
    resul += (2**i * num[num.length-1-i])
  }
  return resul;
}
/*
function BinarioADecimal(num) {
  // tu codigo aca
  // input: string --> "10" -->  (2**1)*1     + (2**0)*0 == 2
  // output: num --> 2
  let sum = 0;
  let pos = 0;
  let arr = num.split("");
​
  for (let i = arr.length - 1; i >= 0; i--) {
    sum += arr[i] * Math.pow(2, pos);
    pos++;
  }
  return sum;
}
*/

function DecimalABinario(num) {
  // tu codigo aca
  let arr = [];
    while(num != 0){
      arr.unshift(num%2);
      num = Math.floor(num/2)
    }
    return arr.join("");
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}