const bottle = {
  color: 'Yellow',
  price: 50,
  isClean: true,
  capacity: 1,
};

const keys = Object.keys(bottle);
const values = Object.values(bottle);
const pairs = Object.entries(bottle);
console.log(keys);
console.log(values);
console.log(pairs);

// Objects.entries returns a two dimensional array
const twoDimension = [
  ['color', 'Yellow'],
  ['price', 50],
  ['isClean', true],
  ['capacity', 1],
];

// to delete properties from an object
delete bottle.isClean;

// to seal an object | cant add or remove, but can modify
Object.seal(bottle);

// to freeze an object | cant add, remove, modify 
Object.freeze(bottle)
