
import frogs from '/src/frogs.js';
const list = document.getElementById('frogs');


frogs.forEach(element => {
    const el = renderFrogs(element);
    list.appendChild(el);  
});


function renderFrogs(frog){

    //create elemets 
    const li = document.createElement('li');
    const h1 = document.createElement('h1');
    const img = document.createElement('img');
    const h4 = document.createElement('h4');
    const button = document.createElement('button');
    const p = document.createElement('p');

    
    //divs
    const boxDiv = document.createElement('div');
    boxDiv.setAttribute('class', 'box-content');

    const innerBox = document.createElement('div');
    innerBox.setAttribute('class', 'box');


    const titleDiv = document.createElement('div');
    titleDiv.setAttribute('class', 'text');
    
    const picDiv = document.createElement('div'); 

    //const divBoxContent = document.createElement('div');
    const articlElemet = document.createElement('article');
    const sectionElemen = document.createElement('section');


    h1.textContent = frog.name;
    titleDiv.appendChild(h1);


    img.src = 'assets/frog1.jpg';
    img.alt = frog.name + ' image';
    
    innerBox.appendChild(titleDiv);
    innerBox.appendChild(picDiv);
    picDiv.appendChild(img);


    innerBox.appendChild(picDiv);
    boxDiv.appendChild(innerBox);

    p.textContent = frog.description;
    p.setAttribute('class', 'product-discription');
    articlElemet.appendChild(p);

    
    boxDiv.appendChild(articlElemet);


    li.appendChild(boxDiv);

    h4.textContent = frog.price;
    h4.getAttribute('class', 'price');

    button.getAttribute('id', 'button-buy');
    button.textContent = 'Add';
    button.value = frog.id;

    
    sectionElemen.appendChild(h4);
    sectionElemen.appendChild(button);
    boxDiv.appendChild(sectionElemen);
    li.appendChild(boxDiv);

    li.setAttribute('id', 'frogs');
    

    return li;
}