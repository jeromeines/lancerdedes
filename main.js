function random(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  const myNumber= random(10, 100);
  console.log(myNumber)