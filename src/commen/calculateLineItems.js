

export function findId(items, id){
    // creas a for loop and logs throg
         // loop the array
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
           // check the id against item.id
        if (item.id === id) {
            return item;
        }
    }
    return null;
}


export function createDolareanout(price) {
    const readablePrice = `$${Number(price).toFixed(2)}`;
    return readablePrice;
}

export function calcLineItem(price, amount){
    let total = 0;
    total = price * amount;
    let returnDolor = createDolareanout(total);
    return returnDolor;
}

