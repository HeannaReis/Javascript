const alunos = [
    {
        nome: 'Thalys',
        nota: 5,
        turma: '3º Módulo',
    },
    {
        nome: 'Victor',
        nota: 8,
        turma: '3º Módulo',
    },
    {
        nome: 'Letícia',
        nota: 3,
        turma: '3º Módulo',
    },
    {
        nome: 'Joel',
        nota: 9,
        turma: '3º Módulo',
    },
];

function alunosAprovados (arr, media){
    let aprovados = [];
    for( let i = 0 ; i < arr.length; i++){

        const {nota, nome} = arr[i];

        if (nota >= media){
            aprovados.push(nome);
        }
    }
    return aprovados;
}
console.log(alunosAprovados(alunos, 5));