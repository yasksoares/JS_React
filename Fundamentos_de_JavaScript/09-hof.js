const array = [
    {name: 'iPhone', price: 5000, quantity: 2},
    {name: 'MacBook Pro', price: 20000, quantity: 1},
    {name: 'Magic Mouse', price: 1000, quantity: 5},
];

// //.find & findIndex

const find = array.find((product) => product.price > 1000);
console.log({find});

console.log('--------------------------------------------------------');
 
const findIndex = array.findIndex((product) => product.name === 'MacBook Pro');
console.log({findIndex});

console.log('--------------------------------------------------------');

// //.some & every

const some = array.some((product) => product.price < 1000);
console.log({some});

console.log('--------------------------------------------------------');

const every = array.every((product) => product.price >= 1000);
console.log({every});

console.log('--------------------------------------------------------');

// //.map 

const map = array.map((product) => ({
    ...product,
    subtotal: product.quantity * product.price
}));
console.log({map});

console.log('--------------------------------------------------------');

//.filter

const filter = array.filter((product) => product.quantity > 1);
console.log({filter});