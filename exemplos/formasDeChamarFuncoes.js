function dizerOi(nome) {
    console.log("Ola,", nome);
    //console.log(this);
}

dizerOi("Rafael");
dizerOi.call({}, "Arya"); // Define o objeto como empty
dizerOi.apply({}, ["Atila"]); // Define o objeto como empty