//Declaración para mostrar todos los pokémon
const showPokemon = POKEMON.pokemon.map(poke => poke);

/*Prueba para función showPokemon
const showPokemon = (POKEMON) => {
    //let pokeObj = POKEMON.pokemon;
    return POKEMON.pokemon.map(poke => poke);
};
console.log(showPokemon(POKEMON.pokemon));*/


//Función para filtrar tipos de pokémon "puros e impuros"
const filterPoke = (data, type) => {
    return data.filter((pokemon) => pokemon.type.includes(type));
};
//Función para filtrar tipos de pokémon "puros"
/*const filterPoke = (data, pokeType) => {
    return data.filter(pokemon => (pokemon.type == pokeType));
  };*/


//Función para ordenar tipos de pokémon alfabéticamente A-Z
const orderByNameAsc = POKEMON.pokemon.map(poke => poke); //console.log(orderByNameAsc);
orderByNameAsc.sort((original, order) => {
    return original.name.localeCompare(order.name);
}); //console.log(orderByNameAsc);


//Función para ordenar tipos de pokémon alfabéticamente Z-A
const orderByNameDes = POKEMON.pokemon.map(poke => poke); //console.log(orderByNameAsc);
orderByNameDes.sort((original, order) => {
    return order.name.localeCompare(original.name);
}); //console.log(orderByNameDes);


//Función para calcular estadísticas
const calculateWeakness = (arrPoke) => {
    const filterByName = (data, namesPoke) => {
            return data.filter( pokemon=> {
                if(pokemon.name == namesPoke[0]  || pokemon.name == namesPoke[1] || pokemon.name == namesPoke[2]){
                    return pokemon;
                }
            },namesPoke);
        };
    const bringWeak = filterByName(POKEMON.pokemon,arrPoke).map(team => team.weaknesses);
    let waeksResult = bringWeak[0].concat(bringWeak[1],bringWeak[2]);
    const weaknessReduce = (obj,item) =>{
        const result = {
            ...obj,
        };
        if(!obj[item]){
            result[item] = 0;
        }
        result[item] +=1;
        return result;
    };
    
    return waeksResult.reduce(weaknessReduce,{});
};


window.data = {
    showPokemon,
    filterPoke,
    orderByNameAsc,
    orderByNameDes,
    calculateWeakness
};
