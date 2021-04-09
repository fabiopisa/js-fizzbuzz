var numeri_stampati = []

for(var i=0; i<101; i++){
  /* console.log(i) */
  if(i % 3 == 0 && i % 5 ==0){
    console.log(i + " FizzBuzz")
    /* document.getElementById('stampa').innerHTML = "iFizz"; */
  }else if(i % 3 ==0){
    console.log(i + " Fizz")
    /* document.getElementById('stampa').innerHTML += "Fizz"; */
  }else if(i % 5 ==0){
    console.log(i + " Buzz");
    /* document.getElementById('stampa').innerHTML += "Buzz"; */
  }else{
    console.log(i)
  }
}