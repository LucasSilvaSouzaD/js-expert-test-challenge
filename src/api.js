const https = require('https')
const POKE_API = 'https://pokeapi.co/api/v2/pokemon'

const routes = {
    '/team:get': (request, response) => {
        response.write('Pokemon - Team')
 
        return response.end()
    },
    default: (request, response) => {
        response.write('Hello World')
        return response.end()
    }
}

const handler = (request, response) => {
    const { url, method } = request
    const routeKey = `${url}:${method.toLowerCase()}`
    const chosen = routes[routeKey] || routes.default
    response.writeHead(200, {
        'Content-Type': 'text/html'
    })
    return chosen(request, response)
}

https.createServer(handler).listen(3000, () => console.info('🚀 Your API Running right here!'))