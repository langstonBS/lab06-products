import { findId, calcLineItem } from './commen/calculateLineItems.js';


import cart from './assets/checkout/cart.js';

console.log(cart);

let myId = findId(cart, 3);
console.log(myId);

let myLineItem = calcLineItem(20, 20);
console.log(myLineItem);

//create a tabe



//do the caluclations
//loop over how many order items

function renderTableRow(cart, fruit) {
    const tr = document.createElement('tr');

    const nameTd = document.createElement('td');
    nameTd.textContent = fruit.name;
    nameTd.classList.add('align-left');

    const quantityTd = document.createElement('td');
    quantityTd.textContent = cart.quantity;

    const priceTd = document.createElement('td');

    const totalTd = document.createElement('td');
    totalTd.classList.add('line-item-total');

    tr.appendChild(nameTd);
    tr.appendChild(quantityTd);
    tr.appendChild(priceTd);
    tr.appendChild(totalTd);

    return tr;
}
