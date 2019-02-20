// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/*window.data = {
  showPokemon: function(POKEMON) {
    for(let i=0; i<pokemon.lenght; i++){
      return POKEMON.pokemon[0];
    }  
  }
};
console.log(showPokemon());*/

const showPokemon = () => {
  for(let i=0; i<pokemon.lenght; i++){
  return POKEMON.pokemon[0];
  }
};

window.data = {
  showPokemon,
};