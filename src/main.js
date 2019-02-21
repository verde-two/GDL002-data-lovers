//Itera sobre objeto para mostrar a usuario datos específicos
for(let i=0; i<data.length; i++) {
    let card = document.createElement('DIV');
    let parrNumb = document.createElement('P');
    let parrName = document.createElement('P');
    let parrType = document.createElement('P');
    let image = document.createElement('IMG');
    image.setAttribute('src', data[i].img); 
    let number= document.createTextNode(data[i].num);
    let name = document.createTextNode(data[i].name);
    let type = document.createTextNode(data[i].type);
    parrNumb.appendChild(number);
    parrName.appendChild(name);
    parrType.appendChild(type);
    card.appendChild(image);
    card.appendChild(parrNumb);
    card.appendChild(parrName);
    card.appendChild(parrType);
    card.setAttribute('class', 'card');
    document.getElementById('cards').appendChild(card);
};
