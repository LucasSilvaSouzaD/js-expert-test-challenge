const request = require('../utils/Request')
const POKE_API = 'https://pokeapi.co/api/v2/pokemon?limit=10'


class PokemonRepository {

    async listPokemons() {
        const list = await request(POKE_API)
        return list.results
    }

    async findPokemon(url) {
        const data = await request(url)
        const pokemon = {
            name: data.name,
            moves: data.moves.map(move => move.move.name),
          };
      
          return pokemon;
    }
}

module.exports = PokemonRepository