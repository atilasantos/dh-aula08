var turma = [
    {"nome":"carlinhos",
     "turma":8},
    {"nome":"carlinha",
     "turma":8},
    {"nome":"Kvothe",
     "turma":9},
    {"nome":"Feluriana",
     "turma":9},
    {"nome": "Elodin",
     "turma":9}
];

function defineTurma(array) {
    
    for (aluno in array) {
        if (array[aluno].turma == 8) {
            array[aluno]['aula'] = 'historia';
        } else if (array[aluno].turma == 9) {
            array[aluno]['aula'] = 'fisica';
        }
    }
    return array;
}

console.log(defineTurma(turma))