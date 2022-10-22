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

let activeSubscription = {
    'id': 763,
    'customerId': 328,
    'monthlyPriceInDollars': 4  // price per active user per month
}

 let users = [
     {
        'id': 1,
        'name': "Employee #1",
        'customerId': 1,
   
        // when this user started
        'activatedOn': new Date("2021-11-04"),
    
        // last day to bill for user
        // should bill up to and including this date
        // since user had some access on this date
        'deactivatedOn': new Date("2022-04-10")
      },
      {
        'id': 2,
        'name': "Employee #2",
        'customerId': 1,
    
        // when this user started
        'activatedOn': new Date("2021-12-04"),
    
        // hasn't been deactivated yet
        'deactivatedOn': null
      },
]
console.log(users[0].activatedOn)
let month = '2022-07-01'
// let activationDate = users.map(date => date.activatedOn)
  let monthActive = users.filter( user=> {
        return user.activatedOn === month;
    }).map(currentMonth=> {
        return currentMonth.activatedOn;
    })
  
console.log(monthActive) 


function billFor(month, activeSubscription, users) {
    let monthlyCharge =''
  if(!activeSubscription || !users){
    monthlyCharge = 0
    console.log(monthlyCharge)
  }else{
    let activationDate = users.map(date => date.activatedOn.filter(date =>  date <= month))
  }
}
billFor('2022-02')