
//function calculatePrice(itemId, arryItems){
    //takes in}
export function findId(arryItem, id) {
        // creas a for loop and logs throg
    for (let i = 0; i < arryItem.length; i++) {
        const item = arryItem[i];
        // check the id against item.id
        if (item.id === id) {
            return item;
        }
    }
}