

//import cart from '../checkout.js';
import frogs from '/producs/frogs.js';
import { findId, createDolareanout, calcLineItem} from '/src/commen/calculateLineItems.js';
const butonOrder = document.getElementById('order');


let cart = localStorage.getItem('CART');
let myitem = [];



butonOrder.addEventListener('click', () => {
    localStorage.removeItem('CART');
    alert('Order placed:\n' + JSON.stringify(cart, true, 2));
    window.location = '../';

});

function createTableHead(table, data){
    let tHead = table.createTHead();
    let row = tHead.insertRow();
    for (let key of data)
    {
        let thData = document.createElement('th');
        let text = document.createTextNode(key);
        thData.appendChild(text);
        row.appendChild(thData);
    }
}

function createTableRrow(table, data){
    for (let element of data){
        let row = table.insertRow();
        for (let key in element){
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        
        }
    }
}



const orderButten = document.getElementById('buy-buton');

//create cart in local storage 

function getItemInToCart(){

    if (cart) 
    {
        cart = JSON.parse(cart);
    } else {
        cart = [];
    }
    console.log(cart);
    

    for (let i = 0; i < cart.length ;i++){
        const itemBuy = cart[i].id;
        console.log(itemBuy);
        console.log(itemBuy);
        if (!itemBuy){
            myitem = findId(frogs, itemBuy);
        }
        console.log('this is my item', myitem);
    }
    
}
    

getItemInToCart();

let theTable = document.querySelector('table');
let data = Object.keys(cart[0]);
createTableHead(theTable, data);
createTableRrow(theTable, cart);