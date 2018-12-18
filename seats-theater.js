function seatsInTheater(nCols, nRows, col, row) {
    
    const rowsLeft = nRows - row;
    const colsLeft = nCols - (col - 1);

    const result = rowsLeft * colsLeft;

    return result;

  }
  
  
console.log(seatsInTheater(16,11,5,3) , 96)
console.log(seatsInTheater(1,1,1,1) , 0)
console.log(seatsInTheater(13,6,8,3) , 18)
console.log(seatsInTheater(60,100,60,1) , 99)
console.log(seatsInTheater(1000,1000,1000,1000) , 0)