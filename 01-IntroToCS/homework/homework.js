'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let resul = 0;
  for(let i = 0; i < num.length; i++){
    resul += (2**i * num[num.length-1-i])
  }
  return resul;
}

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