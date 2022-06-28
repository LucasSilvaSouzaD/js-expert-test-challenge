const PokemonRepository = require('./../repository/PokemonRepository');

class PokemonService {
  constructor({ pokemonRepository } = {}) {
    this.pokemonRepository = pokemonRepository || new PokemonRepository();
  }

  
}

module.exports = PokemonService;