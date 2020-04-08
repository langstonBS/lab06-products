

import cart from '/src/assets/checkout/cart.js';
const list = document.getElementById('cart');

cart.forEach(element => {
    const el = renderTable(element);
    list.appendChild(el);  
});


export function renderTable(cartElemnt){

    //create elemets 
    const tr = document.createElement('tr');
    const thName = document.createElement('th');
    const thAmout = document.createElement('th');
    const thTotal = document.createElement('th');
    const thCost = document.createElement('th');

    thName.textContent = cartElemnt.name;
    thTotal.textContent = cartElemnt.id;
    thAmout.textContent = cartElemnt.quantity;
    thCost.textContent = 5;

    tr.appendChild(thName);
    tr.appendChild(thTotal);
    tr.appendChild(thAmout);
    tr.appendChild(thCost);
    
    return tr;
}
//<tr>
               // <th>'frog'</th>
                //<th>1</th>
                //<th>5</th>
               // <th>5</th>
               // </tr>