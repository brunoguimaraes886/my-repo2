/*Dado um array de produtos com `name` e `price`, calcule usando apenas `reduce`, `map` e `filter` (sem `for`):

- O preço total de todos os produtos
- A média de preço
- O produto mais caro
- A lista de produtos com desconto de 10% aplicado*/

interface Product {
    name: string,
    price: number
}

const products: Product[] = [
    { name: "Notebook", price: 4500 },
    { name: "Smartphone", price: 2000 },
    { name: "Monitor", price: 800 },
    { name: "Keyboard", price: 150 },
    { name: "Mouse", price: 80 }
];

//console.log(Object.keys(products[0]))

interface ProductsSummary {
    total: number,
    avg: number,
    highest: Product,
    discount10: Product[]
}

let productsList = {} as ProductsSummary

productsList.total = products.reduce((total, product: Product) => {
    return total += product.price
}, 0)

productsList.avg = productsList.total/products.length

productsList.highest = products.reduce((high, product: Product): Product => {
    if (product.price > high.price) {
        return product
    } else {
        return high
    }
}, { name: "", price: 0 })


productsList.discount10 = products.map((item: Product): Product => { 
    return {... item, price: item.price * 0.9}
})

console.log(productsList)

