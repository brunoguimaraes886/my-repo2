import "dotenv/config";

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
