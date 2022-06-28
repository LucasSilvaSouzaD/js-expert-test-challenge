const sinon = require('sinon')
const PokemonRepository = require('../../src/repository/PokemonRepository')


const urls = {
    base: 'https://pokeapi.co/api/v2/pokemon',
    pokemon1: 'https://pokeapi.co/api/v2/pokemon/6/',
    pokemon2: 'https://pokeapi.co/api/v2/pokemon/9/',
    pokemon3: 'https://pokeapi.co/api/v2/pokemon/11/',
}

const mocks = {
    pokemons: require('./mocks/valid-pokemons.json'),
    pokemon1: require('./mocks/valid-pokemon-1.json'),
    pokemon2: require('./mocks/valid-pokemon-2.json'),
    pokemon3: require('./mocks/valid-pokemon-3.json'),
    team: require('./mocks/valid-team.json'),
}

const pokemonRepositoryMock = new PokemonRepository();

const stub = sinon.stub(
    pokemonRepositoryMock,
    pokemonRepositoryMock.makeRequest.name
);


stub.withArgs(urls.base).resolves(mocks.pokemons);
stub.withArgs(urls.pokemon1).resolves(mocks.pokemon1);
stub.withArgs(urls.pokemon2).resolves(mocks.pokemon2);
stub.withArgs(urls.pokemon3).resolves(mocks.pokemon3);

module.exports = {
    pokemonRepositoryMock,
    urls,
    mocks,
};