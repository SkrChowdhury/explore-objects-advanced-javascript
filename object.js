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
console.log(atel);
console.log(atel.salary);

// 4. class
class Person {
    name = 'abul';
    address = "sodor ghat";
    constructor(age){
       this.age = age; 
    }
}

const person1 = new Person(34);
console.log(person1);

// 5. function 
function Car (model, price){
    this.model  = model;
    this.price = price;
}

const tesla = new Car ('Elon Musk', 32);