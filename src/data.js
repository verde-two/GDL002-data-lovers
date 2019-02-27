//Función para mostrar pokémon
const showPokemon = POKEMON.pokemon.map(poke => poke);
//console.log(showPokemon);

const filterPoke = (data, pokeType) => {
    return data.filter(pokemon => (pokemon.type == pokeType));
  };
//  console.log("este es filter Dixel", filterPoke(POKEMON.pokemon, 'Water'));

/*const filterPoke = (data, type) => {
    return data.filter((pokemon) => pokemon.type.includes(type));
}*/
//console.log("este es filter poke 2", filterPoke(POKEMON.pokemon, "Water"));*/

window.data = {
    showPokemon,
    filterPoke
};


/*const filterPoke = function (data, type){
  const newArray = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].type.length; j++){
      if (data[i].type[j] == type){
        newArray.push(data[i]);
      }
    }

  }
  return newArray;
}
console.log(filterPoke(POKEMON.pokemon, "Grass"));*/