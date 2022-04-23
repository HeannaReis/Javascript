class ContaBancaria {
    constructor (agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }
    get saldo(){
        return this._saldo;
    }
    set saldo(valor){
        this._saldo = valor;
    }
    sacar (valor){
        if (valor > this._saldo){
            return 'Saldo Insuficiente, Verifique Limites da Conta! ';
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }
    depositar (valor){
        this._saldo = this._saldo + valor;
        return this._saldo;
    }
}
class ContaCorrente extends ContaBancaria {
    constructor (agencia, numero, cartaoCredito){
        super (agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }
    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
    get cartaoCredito(){
        return this._cartaoCredito
    }
}
class ContaPoupanca extends ContaBancaria {
	constructor(agencia, numero) {
		super(agencia, numero);
		this.tipo = 'poupança';
	}
    sacar (valor){
        if (valor > this._saldo){
            return 'Saldo Insuficiente, Verifique Limites da Conta! ';
        }
        if(valor > 200){
            return 'Saque máximo permitido é 200 Reais para conta Poupança';
        }
        this._saldo = this._saldo - valor;
        return this.saldo;
    }
}
class ContaUniversitaria extends ContaBancaria {
    constructor (agencia, numero){
        super (agencia, numero);
        this.tipo = 'universiaria';
    }
    sacar (valor){
        if (valor > this._saldo){
            return 'Saldo Insuficiente, Verifique Limites da Conta! ';
        }
        if(valor > 500){
            return 'Saque máximo permitido é 500 Reais para conta Universitária';
        }
        this._saldo = this._saldo - valor;
        return this.saldo;
    }
}
