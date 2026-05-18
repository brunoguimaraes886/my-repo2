//Dado o array abaixo, retorne apenas os usuários ativos e maiores de 18 anos, 
//ordenados por nome em ordem alfabética. Use filter, sort e nenhum loop for.

interface User {
    name: string,
    age: number,
    active: boolean
}

const users: User[] = [
  { name: 'Ana', age: 17, active: true },
  { name: 'Bruno', age: 25, active: false },
  { name: 'Carla', age: 22, active: true },
  { name: 'Diego', age: 19, active: true },
  { name: 'Eva', age: 15, active: true },
];

const active = activeUsers(users)

const activeAdults = above18(active)

const activeAdultsSorted = sortByName(activeAdults)

console.log(activeAdultsSorted)

export function activeUsers(data: User[]): User[] {
    return data.filter(item => item.active == true)
}
export function above18(data: User[]): User[] {
    return data.filter(item => item.age >= 18)
}
export function sortByName(data: User[]): User[] {
    return data.sort((a, b) => a.name.localeCompare(b.name))
}



export{}