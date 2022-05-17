const http = require('http')
const PokemonService = require('./service/PokemonService')

const routes = {
    '/team:get': async (request, response) => {
        const pokemonService = new PokemonService()
        const listPoke = await pokemonService.getRandomPokemon()
        response.write(JSON.stringify(listPoke))
        return response.end()
    },
    default: (request, response) => {
        response.write('Hello World')
        return response.end()
    }
}

const handler = async (request, response) => {
    const { url, method } = request
    const routeKey = `${url}:${method.toLowerCase()}`
    const chosen = routes[routeKey] || routes.default
    response.writeHead(200, {
        'Content-Type': 'text/html'
    })
    return chosen(request, response)
}

http.createServer(handler).listen(3000, () => console.info('🚀 Your API Running right here!'))