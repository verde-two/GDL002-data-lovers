require('../src/data.js');
const POKEMON = require('../src/data/pokemon/pokemon.json');
const pokemonFilteredByTypeDragon = require('mocks/pokemonFilteredByTypeDragon.json');
const pokemonOrderAsc = require ('mocks/pokemonOrderAsc.json');
const allObject = POKEMON.pokemon;

//Test para objeto
describe('data', () => {
  it('should be an object', () => {
    expect(typeof (data)).toBe('object');
  });
});


//Test para función mostrar
describe('showPokemon', () => {
  it('should be a function', () => {
    expect(typeof (data.showPokemon)).toBe('function');
  });
});

  it('should go back all pokemon', () => {
    expect(data.showPokemon).toEqual(POKEMON);
  });


//Test para función filtro
describe('filterPoke',() => {
  it('should be a function', () => {
    expect(typeof (data.filterPoke)).toBe('function');
  });
});

  it('should go back Dratini, Dragonair, Dragonite for Dragon pokemon type', () => {
    expect(window.data.filterPoke(allObject, "Dragon")).toEqual(pokemonFilteredByTypeDragon);
  });

  // Test para ordenar ascendente
  describe('orderByNameAsc',() => {
    it('should be a function',() => {
     expect(typeof(data.orderByNameAsc)).toBe('function');
    });
  });

   it('should go back an ordered array', () => {
     expect(window.data.orderByNameAsc()).toEqual(pokemonOrderAsc);
   });

   //it('returns `example`', () => {
  //  expect(example()).toBe('example');
  //});*/
