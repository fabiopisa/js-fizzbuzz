var numeri_stampati = [];

for(var i=1; i<=100; i++){
  if(i % 3 == 0 && i % 5 ==0){
    console.log(i + " FizzBuzz");
    document.getElementById('stampa').innerHTML += i + "," + " FizzBuzz; <br>";
  }else if(i % 3 ==0){
    console.log(i + " Fizz");
    document.getElementById('stampa').innerHTML += i + "," + " Fizz; <br>";
  }else if(i % 5 ==0){
    console.log(i + " Buzz");
    document.getElementById('stampa').innerHTML += i + "," + " Buzz; <br>";
  }else{
    console.log(i);
    document.getElementById('stampa').innerHTML += i + ", <br>";
  }
}