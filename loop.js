const numbers = [12, 54, 65, 3, 54];
//for of loop
for(number of numbers){
    console.log(number);
}
// 1. for of cannot be used on object
const bottle = {
  color: 'Yellow',
  price: 50,
  isClean: true,
  capacity: 1,
};

// first option: loop through an object 
/*
3 ways to read object properties
bottle.color
bottle['color']
bottle[key]
*/
const keys = Object.keys(bottle);
for(const key of keys){
    console.log(key, bottle[key]);
}

// for in loop

for(const key in bottle){
    console.log(key, bottle[key]);
}

//advanced
const pair = Object.entries(bottle);
for (const [key,value] of Object.entries(bottle)){
    console.log(key,value);
}




