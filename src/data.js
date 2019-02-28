//Función para mostrar todos los pokémon
const showPokemon = POKEMON.pokemon.map(poke => poke);

/*
const showPokemon = () => {
    const pokeObj =POKEMON.pokemon;
    return pokeObj.map(poke => poke);
};
*/


//Función para filtrar tipos de pokémon "puros"
/*const filterPoke = (data, pokeType) => {
    return data.filter(pokemon => (pokemon.type == pokeType));
  };*/

//Función para filtrar tipos de pokémon "puros e impuros"V
const filterPoke = (data, type) => {
    return data.filter((pokemon) => pokemon.type.includes(type));
};


//Función para ordenar tipos de pokémon alfabéticamente A-Z
const orderByNameAsc = POKEMON.pokemon.map(poke => poke); //console.log(orderByNameAsc);
orderByNameAsc.sort(function(original, order){
    return original.name.localeCompare(order.name);
}); //console.log(orderByNameAsc);


//Función para ordenar tipos de pokémon alfabéticamente Z-A
const orderByNameDes = POKEMON.pokemon.map(poke => poke); //console.log(orderByNameAsc);
orderByNameDes.sort(function(original, order){
    return order.name.localeCompare(original.name);
}); //console.log(orderByNameDes);


//Función para calcular estadísticas

window.data = {
    showPokemon,
    filterPoke,
    orderByNameAsc,
    orderByNameDes,
};