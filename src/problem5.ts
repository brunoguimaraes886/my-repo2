//Implemente uma função groupBy(array, key) que agrupa um array de objetos por uma chave.
// Deve funcionar assim:
//groupBy(users, 'city') // agrupa por city
//groupBy(users, 'address.city') // agrupa por chave aninhada
//groupBy(users, 'address.country.code') // agrupa por chave 2 níveis aninhada

const users1 = [
    { id: 1, name: 'Bruno', city: 'São Paulo' },
    { id: 2, name: 'Ana', city: 'Rio de Janeiro' },
    { id: 3, name: 'Carlos', city: 'São Paulo' },
    { id: 4, name: 'Julia', city: 'Belo Horizonte' },
    { id: 5, name: 'Marcos', city: 'Rio de Janeiro' }
]

const users2 = [
    {
        id: 1,
        name: 'Bruno',
        address: {
            city: 'São Paulo'
        }
    },
    {
        id: 2,
        name: 'Ana',
        address: {
            city: 'Rio de Janeiro'
        }
    },
    {
        id: 3,
        name: 'Carlos',
        address: {
            city: 'São Paulo'
        }
    },
    {
        id: 4,
        name: 'Julia',
        address: {
            city: 'Belo Horizonte'
        }
    },
    {
        id: 5,
        name: 'Marcos',
        address: {
            city: 'Rio de Janeiro'
        }
    }
]

const users3 = [
    {
        id: 1,
        name: 'Bruno',
        address: {
            country: {
                code: 'BR',
                name: 'Brazil'
            }
        }
    },
    {
        id: 2,
        name: 'Ana',
        address: {
            country: {
                code: 'US',
                name: 'United States'
            }
        }
    },
    {
        id: 3,
        name: 'Carlos',
        address: {
            country: {
                code: 'BR',
                name: 'Brazil'
            }
        }
    },
    {
        id: 4,
        name: 'Julia',
        address: {
            country: {
                code: 'AR',
                name: 'Argentina'
            }
        }
    }
]

groupBy(users3, "address.country.code")

export function groupBy(array: Record<string, any>[], key: string): Record<string, any[]> {
    let keys: string[] = key.split(".") 
    let names: string[] = array
        .map(item => keys.reduce((acc: any, keyPart) => acc[keyPart], item))
        .reduce((acc, value) => {
        if (!acc.includes(value)) acc.push(value)
        return acc
    }, [] as string[])
    
    let grouped = names.reduce((acc, atual) => {
        acc[atual] = array.filter(item => keys.reduce((acc: any, keyPart) => acc[keyPart], item) == atual)
        return acc
    }, {} as Record<string, any[]>)

    return grouped
    //console.log(JSON.stringify(grouped, null, 2)); // Para ver o objeto completo:
    //the number is the identation

}




