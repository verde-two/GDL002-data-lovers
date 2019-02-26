const showPokemon = POKEMON.pokemon.map(poke => poke);
console.log(showPokemon);

window.data = showPokemon;


const filterPoke = function (data, type){
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
console.log(filterPoke(POKEMON.pokemon, "Grass"));
