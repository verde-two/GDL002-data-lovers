//Función para mostrar todos los pokémon
/*
const showPokemon = () => {
    const pokeObj =POKEMON.pokemon;
    return pokeObj.map(poke => poke);
};
*/

const showPokemon = POKEMON.pokemon.map(poke => poke);

//Función para filtrar tipos de pokémon "puros"
/*const filterPoke = (data, pokeType) => {
    return data.filter(pokemon => (pokemon.type == pokeType));
  };*/

//Función para filtrar tipos de pokémon "puros e impuros"V
const filterPoke = (data, type) => {
    return data.filter((pokemon) => pokemon.type.includes(type));
};

//Función para ordenar tipos de pokémon alfabéticamente A-Z
//const orderPoke = () => {

//};

//Función para calcular estadísticas
window.data = {
    showPokemon,
    filterPoke
};