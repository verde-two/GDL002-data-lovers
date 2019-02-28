<<<<<<< Updated upstream
document.getElementById('root').innerHTML = data.showPokemon ();
=======
//Itera sobre objeto para mostrar a usuario cards específicas
 const createCards = (data) => {
    let cards = document.getElementById('cards');
    while (cards.hasChildNodes()) {
        cards.removeChild(cards.firstChild);
    }
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
  }
};

createCards(data.showPokemon);

//Función obtiene valor de select para pasar argumento a filterPoke (función de filtrar)
const addingFilter = () =>{
  let select = document.getElementById('filterSelect');
  let valueSelect = select.value;
  let filterResult;
  if (valueSelect == "All") {
    filterResult = data.showPokemon;
  } else {
    filterResult = data.filterPoke(POKEMON.pokemon, valueSelect);
}
  createCards(filterResult);
};

document.getElementById('filterSelect').addEventListener("change", addingFilter);

const addOrder = () =>{
  let select = document.getElementById('orderAZ');
  let valueSave = select.value;
  let optResult;
  if (valueSave == "pushOrder") {
    optResult = data.addOrder;
  } else {
    optResult = data.orderAZ(POKEMON.pokemon,valueSave);
  }
  createCards(optResult);
}
document.getElementById('orderAZ').addEventListener("change", addOrder);
>>>>>>> Stashed changes
