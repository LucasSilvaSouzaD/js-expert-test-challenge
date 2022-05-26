const PokemonRepository = require('../repository/PokemonRepository')


class PokemonService {
    async getRandomPokemon() {
        const pokemon = new PokemonRepository()
        return await pokemon.listPokemons()
    }
}

module.exports = PokemonService;