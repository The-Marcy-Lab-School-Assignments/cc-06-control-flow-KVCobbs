//1
function sumOfThreeAndFive(){
  let sum = 0; 
  for(let i = 1; i <= 1000; i++) {
      if(i % 3 === 0 || i % 5 === 0) {
          sum += i;
      }
      
  }
  return sum;
}

function greaterNum(x, y){
  if(x > y) {
      return x;
  } if (y > x) {
      return y;
  } else if (y == x ) {
      return("these numbers are the same");
  }
}

function oddAndEvenInFifteen(){
  
}

function sortThreeNums(){
  
}




//console.log(sumOfThreeAndFive());
console.log(greaterNum(15, 15));

