function circunferencia(raio) {
    function diametro() {
        return 2*raio;
    }
    return Math.PI * diametro();
}

console.log(circunferencia(2));