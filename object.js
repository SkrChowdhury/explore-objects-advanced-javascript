// create object using object literals
const player = {};

// Object Properties 
player.name = 'Small Nirob';
player.speciality = 'Batsman';

// Object Method 
player.bat = function(){
    console.log('Swing Your Bat');
}

console.log(player);
player.bat();

const student = {name: 'Pande', job: 'Khay Ande',
ball: function(){
    console.log("trow the ball");
}, salary: 10000};

// 2.  object constructor 
const person = new Object();
console.log(person)

// 3. object create method 
const item = Object.create(null);
const atel = Object.create(student);
console.log(atel)