

import cart from './cart.js';



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

let theTable = document.querySelector('table');
let data = Object.keys(cart[0]);
createTableHead(theTable, data);
createTableRrow(theTable, cart);
