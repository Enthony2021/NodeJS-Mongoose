const { MongoClient } = require('mongodb')

// uri da conexão
const uri = 'mongodb://localhost:27017/nodemongodb'

const client = new MongoClient(uri)

// conexão com o mongodb
async function run() {
    try {
        
        await client.connect()
        console.log('Banco de dados conectado!')
    } catch (err) {
        console.log(err)
    }
}

run()

module.exports = client

