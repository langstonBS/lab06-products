

//import cart from '../checkout.js';
import frogs from '/producs/frogs.js';
//import { findId } from '/src/commen/calculateLineItems.js';
const butonOrder = document.getElementById('order');


let cart = localStorage.getItem('CART');
let myitem = [];


butonOrder.addEventListener('click', () => {
    localStorage.removeItem('CART');
    alert('Order placed:\n' + JSON.stringify(cart, true, 2));

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

function createTableRrow(table, arayInput){
    for (let i = 0; i < arayInput.length; i++){
        let row = table.insertRow();
        for (let x = 0; i < arayInput[x].length; i++){// set to vaule find by id and
            let cell = row.insertCell();
            let text = document.createTextNode(arayInput[x]);
            cell.appendChild(text);
        
        }
    }
}

function getItemInToCart(){

    if (cart) 
    {
        cart = JSON.parse(cart);
    } else {
        cart = [];
    }
    myitem[0] = frogs[0];
    
    for (let i = 0; i < cart.length ;i++){
        const itemBuy = cart[i].id;
        myitem = findById(frogs, itemBuy);  
    }

}

function findById(items, id) {
    // loop the array

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        // check the id against item.id
        if (item.id === id) {
            return item;
        }
    }
    

    // loop done, nothing found
    return null;
}


getItemInToCart();

let theTable = document.querySelector('table');
let data = Object.keys(myitem);
createTableRrow(theTable, myitem);
createTableHead(theTable, data);


