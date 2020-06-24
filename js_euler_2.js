//create function
function fibonacci_evens(){
// create fibonacci sequence
  fib = [0, 1]
//create index variable
  i = 1
//create sum variable
  sum = 0
//populate fib sequence
  while(fib[i] < 4e6){
    fib.push(fib[i] + fib[i-1])
    //populate sum
    if(fib[i] % 2 == 0){
      sum += fib[i]
    }
    //increment index
    i++
  }
  //print sum
  console.log(sum)
}
//call function
fibonacci_evens()