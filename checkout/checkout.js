import frogs from 'producs/frogs.js';

import {findId, createDolareanout, calcLineItem} from './commen/calculateLineItems.js';
import { renderTable } from '/checkout/renderTable.js'

const orderButten = document.getElementById('buy-buton');

//create cart in local storage 

const shopingCart = localStorage.getItem('CART');
let cart;

if (shopingCart) 
{
    cart = JSON.parse(shopingCart);
} else {
    cart = [];
}

for (let i = 0; 1 < cart.lenght; i++){
    const itemBuy = cart[i];
    const frog = findId(frogs, itemBuy.id);
    cosnt dom = renderTable

}



