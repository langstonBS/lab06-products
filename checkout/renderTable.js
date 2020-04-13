
export function tableRow(cartItem, frog, iterator) {
    const tr = document.createElement('tr');


    const nameTd = document.createElement('td');
    nameTd.textContent = frog.name;
    nameTd.classList.add('align-left');

    const quantityTd = document.createElement('td');
    quantityTd.textContent = cartItem[iterator].quantity;

    const priceTd = document.createElement('td');
    priceTd.textContent = readablePrice(frog.price);

    const totalTd = document.createElement('td');
    const totalPrice = (frog.price * cartItem[iterator].quantity);
    totalTd.textContent = readablePrice(totalPrice);
    totalTd.classList.add('line-item-total');

    tr.appendChild(nameTd);
    tr.appendChild(quantityTd);
    tr.appendChild(priceTd);
    tr.appendChild(totalTd);

    return tr;
}

export function totalCost(cartItem, frog, iterator){
    let totalPrice = (frog.price * cartItem[iterator].quantity);
    return totalPrice;

}


function readablePrice(price) {
    const readablePrice = `$${Number(price).toFixed(2)}`;
    
    return readablePrice;
}
