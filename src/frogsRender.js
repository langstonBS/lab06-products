
import frogs from '../lab06-products/src/frogs.js';
const list = document.getElementById('frogs');


frogs.forEach(element => {
    const el = renderFrogs(element);
    list.appendChild(el);  
});

function renderFrogs(frog){
    const li = document.createElement(li);
    li.className = frog.description;
    li.tilte = frog.discription;

    const h1 = document.createElement('h1');
    h1.textContent = frog.name;
    li.appendChild(h1);

    const img = document.createElement('img');
    img.src = './assets/' + frog.image;
    img.alt = frog.name + ' image';
    li.appendChild(img);

    const h4 = document.createElement('h4');
    h4.className = 'price';

    li.appendChild(h4);

    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = frog.id;
    li.appendChild(button);

    return li;
}