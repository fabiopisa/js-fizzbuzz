var numeri_stampati = []

for(var i=0; i<101; i++){
  /* console.log(i) */
  if(i % 3 == 0){
    console.log("Fizz")
    document.getElementById('stampa').innerHTML = "Fizz";
  }else if(i % 5 ==0){
    console.log("Buzz")
    document.getElementById('stampa').innerHTML = "Buzz";
  }else if(i % 3 == 0 && i % 5 == 0){
    console.log("FizzBuzz");
    document.getElementById('stampa').innerHTML = "FizzBuzz";
  }
}