import { findId } from './commen/calculateLineItems.js';


import cart from './assets/checkout/cart.js';

console.log(cart);

let myId = findId(cart, 3);
console.log(myId);