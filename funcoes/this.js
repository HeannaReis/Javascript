function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Amelia',
	idade: 23,
};

const pessoa2 = {
	nome: 'Márcia',
	idade: 20,
};

const pessoa3 = {
	nome: 'Jonas',
	idade: 13,
};

console.log(calculaIdade.call(pessoa3, 40));
console.log(calculaIdade.apply(pessoa2, [24]));

/*const pessoa ={
    firstName: "Joel",
    lastName : "Reis",
    id       : 1,
    fullName : function () {
       // return this.firstName + " " + this.lastName;
        console.log(`Nome: ${this.firstName} - Id: ${this.id}`);
    },
    getId: function(){
        return this.id;
    }
};
pessoa.fullName();

pessoa.getId();*/

