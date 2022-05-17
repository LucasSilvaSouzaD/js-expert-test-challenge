const https = require('https')

function request(url) {
    return new Promise((resolve, reject) => {
        https.get(url, response => {
            let chunks = []
            response.on('data', data => {
              chunks.push(data);
            });
            response.on('error', reject);
            response.on('end', () => {
              const data = Buffer.concat(chunks);
              resolve(JSON.parse(data));
            });
          });
    })
}

module.exports = request;