function fatorial(num) {
    var result = num;
    if (num === 0 || num === 1) 
      return 1; 
    while (num > 1) { 
      num--;
      result *= num;
    }
    return result;
  }
console.log(fatorial(10));
console.log(fatorial(17));
console.log(fatorial(2429));