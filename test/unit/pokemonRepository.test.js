const { describe, it, before } = require('mocha');
const {expect} = require('chai');

const {
  pokemonRepositoryMock,
  urls,
  mocks,
} = require('../mocks/pokemon.test');

describe('PokemonRepository Suite Tests', () => {
  let pokemonRepository = {}


  it('should call the specified url when makeRequest is called', () => {
    const expect = mocks.pokemons
    const result = await request(urls.base)

  })
})