var compra = [
    {"nome": "banana",
     "preco": 1.50},
     {"nome": "pera",
     "preco": 3.50},
     {"nome": "mexirica",
     "preco": 2.50},
];

function totalCompra(array) {
    let totalCompra = 0;
    for (item in array) {
        totalCompra += array[item].preco;
    }
    return totalCompra;
}

console.log(totalCompra(compra));