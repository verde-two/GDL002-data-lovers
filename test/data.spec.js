
require('../src/data.js');
const POKEMON = require('../src/data/pokemon/pokemon.json');
const pokemonFilteredByTypeDragon = require('mocks/pokemonFilteredByTypeDragon.json');
const pokemonOrderAsc = require ('mocks/pokemonOrderAsc.json');

//const data = global.data;
//Test para objeto
describe('data', () => {
   it('should be an object', () => {
    expect(typeof data).toBe('object');
   });

  // Tes para funcion.
//   describe('createCards', () => {
  //   it('should be a function', () => {
    //    expect(typeof (data.createCards)).toBe('showPokemon');

    // });
  //});

   test('map calls its argument with a non-null argument', () => {
    const mock = window.showPokemon(data);
    [0].map(mock)( x => mock(x));
    expect(mock).toBeCalledWith(expect.anything());
  });
});

/*
jest.mock('../moduleName', () => {
  return jest.fn(() => 151);
});

const moduleName = require('../moduleName'); // This runs the function specified as second argument to `jest.mock`.
moduleName(); // Will return '151';


//Test para función mostrar
describe('showPokemon', () => {
  it('should be a variable', () => {
    expect(typeof (data.showPokemon)).toBe('variable');
  });
});

  it('should go back all pokemon', () => {
    expect(data.showPokemon).toEqual(POKEMON);
  });
*/

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

  // it('should go back an ordered array', () => {
    // expect(window.data.orderByNameAsc(original, order)).toEqual(pokemonOrderAsc);
  // });

   //it('returns `example`', () => {
  //  expect(example()).toBe('example');
  });
});
