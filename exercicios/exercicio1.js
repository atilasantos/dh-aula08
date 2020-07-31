function parOuImpar(n) {
    if (n % 2 == 0) {
        console.log(n, "e Numero Par");
    } else {
        console.log(n, "e Numero Impar");
    }
}

for (var i = 10; i<=15; i++) {
    parOuImpar(i)
}