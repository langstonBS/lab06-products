//gets cart from local strage and then displays cart.
import frogs from '/producs/frogs.js';
import { findId, createDolareanout } from '/src/commen/calculateLineItems.js';
import { tableRow, totalCost } from '/checkout/renderTable.js';
const tbody = document.querySelector('tbody');
const buyButten = document.getElementById('order');
const total = document.getElementById('order-total');



const json = localStorage.getItem('CART');
let cart;
let cost = 0;
if (json) {
    cart = JSON.parse(json);
}
else {
    cart = [];
}

//calls dispays cart
for (let i = 0; i < cart.length; i++) {
    let cartItem = cart[i].id;
    const frog = findId(frogs, cartItem);
    cartItem = [cart[i].id, cart[i].quantity];
    
    const dom = tableRow(cart, frog, i);
    tbody.appendChild(dom);
}

for (let i = 0; i < cart.length; i++) {
    let cartItem = cart[i].id;
    const frog = findId(frogs, cartItem);
    cartItem = [cart[i].id, cart[i].quantity];
    cost = cost + totalCost(cart, frog, i);
}
total.textContent = createDolareanout(cost);


if (cart === 0) {
    buyButten.disabled = true;
}
else {
    buyButten.addEventListener('click', () => {
        localStorage.removeItem('CART');
        alert('Order placed:\n' + JSON.stringify(cart, true, 2));
        window.location = '../';
    });
}




