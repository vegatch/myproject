// document.getElementById('visible').style.visibility='hidden';

function factorialize(num) {
  if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}
console.log(factorialize(4));

function FirstFactorial(num) { 
    if(num < 0)
        return 'number should be an integer'
    if (num === 0 || num === 1)
    return 1;
    if(num > 18){
        
         return 'number should be between 1 and 18' 
    }       
       
    if(num > 1 && num <18){
        for (var i = num - 1; i >= 1; i--) {
            num *= i;
        }
      return num;
    }

}

console.log(FirstFactorial(19));
 
let validateInput = () =>{
    let inputValue = document.getElementById('myNumber').value;
    if(isNaN(inputValue)){
        // return'please enter a number'
        document.getElementById('visible').value ='Only numbers are allowed';
       document.getElementById('visible').style.visibility='visible';
      
    }
}


const sayHello = name =>{
    let greeting = ''
    if(typeof name === 'undefined'){
         greeting = 'Hello there !'
        console.log(greeting) 
    }else{
        let greet = 'Hello, '
        greeting = greet.concat(name +'!')
        console.log(greeting)
    }
    return greeting
    

}
sayHello('Bengadova')