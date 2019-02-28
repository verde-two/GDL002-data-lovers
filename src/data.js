<<<<<<< Updated upstream
// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

//const example = () => {
//  let firstPokemon = 1;
//  let pokedex = POKEMON.id[];
//  return 'example';
//};

//window.example = example;


/*window.data = {
  showPokemon:function (POKEMON){
    let value ='';
    for (let i = 0; i < pokemon.length; i++) {
      value = pokemon[i];
    }
    return value;
  }
};

console.log(data.showPokemon());

console.log(POKEMON.pokemon[0]);*/

window.data = {
  showPokemon:function (){
    let pokemon = "";
    for (let i = 0; i <pokemon.length; i++) {
    pokemon[i];
    }
    return POKEMON.pokemon[150];
=======
//Función para mostrar pokémon
const showPokemon = POKEMON.pokemon.map(poke => poke);
//console.log(showPokemon);

/*const filterPoke = (data, pokeType) => {
    return data.filter(pokemon => (pokemon.type == pokeType));
  };
//  console.log("este es filter Dixel", filterPoke(POKEMON.pokemon, 'Water'));
*/
const filterPoke = (data, type) => {
  //console.log(data);
    return data.filter((pokemon) => pokemon.type.includes(type));

}
//console.log("este es filter poke 2", filterPoke(POKEMON.pokemon, "Water"));*/
/*productos.sort(function(a, b){
	return a.nombre.localeCompare(b.nombre);
});
console.log(productos);
*/
const pokemonArray = Object.keys(POKEMON.pokemon).map(i => POKEMON.pokemon[i]);
console.log(pokemonArray);
const orderAZ = (data, order) =>{
  return pokemonArray.sort((pokemon) => name.localeCompare(order));
}
console.log(orderAZ(POKEMON.pokemon, "name"));

window.data = {
    orderAZ,
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
>>>>>>> Stashed changes
  }
}
<<<<<<< Updated upstream
console.log(data.showPokemon());
=======
console.log(filterPoke(POKEMON.pokemon, "Grass"));*/



var productos = [
 {id: 1, nombre: 'Refrigerador'},
 {id: 8, nombre: 'Televisión'},
 {id: 5, nombre: 'Estufa'},
 {id: 7, nombre: 'Licuadora'},
 {id: 3, nombre: 'Horno'}
];
// Ordenamiento por nombre, ascendente
productos.sort(function(a, b){
	return a.nombre.localeCompare(b.nombre);
});
console.log(productos);



var palabras = ["uno", "dos", "tres"];
var mayusculas = palabras.map(function (p) {
 return p.toUpperCase();
});

console.log(mayusculas); // ["UNO", "DOS", "TRES"]
>>>>>>> Stashed changes
