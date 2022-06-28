const request = require('../utils/Request')
const POKE_API = 'https://pokeapi.co/api/v2/pokemon?limit=10'


class PokemonRepository {

    async makeRequest(url) {
        // return axios.get(url);
        const chunks = [];
        return new Promise((resolve, reject) => {
          https.get(url, response => {
            response.on('data', data => {
              chunks.push(data);
            });
            response.on('error', reject);
            response.on('end', () => {
              const data = Buffer.concat(chunks);
              resolve(JSON.parse(data));
            });
          });
        });
      }
      
    async listPokemons() {
        const list = await makeRequest(POKE_API)
        return list.results
    }

    async findPokemon(url) {
        const data = await makeRequest(url)
        const pokemon = {
            name: data.name,
            moves: data.moves.map(move => move.move.name),
          };
      
          return pokemon;
    }
}

module.exports = PokemonRepository