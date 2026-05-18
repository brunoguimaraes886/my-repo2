import "dotenv/config";
import { activeUsers, above18, sortByName } from './problem1'
import { groupBy } from './problem5'

function getEnvValue (env: string): string {
    let value = process.env[env]

    if (value === undefined) {
        throw new Error(`Variável ${env} em .env não encontrada`).message
    } else if (env.length === 0) {
        throw new Error(`Variável ${env} em .env vazia`).message
    }
    return value
}

const DATABASE_URL = getEnvValue('DATABASE_URL') 
const API_KEY = getEnvValue('API_KEY') 
const PORT = getEnvValue('PORT')

const users1 = [
    { id: 1, name: 'Bruno', city: 'São Paulo' },
    { id: 2, name: 'Ana', city: 'Rio de Janeiro' },
    { id: 3, name: 'Carlos', city: 'São Paulo' },
    { id: 4, name: 'Julia', city: 'Belo Horizonte' },
    { id: 5, name: 'Marcos', city: 'Rio de Janeiro' }
]


console.log(groupBy(users1, "city"))