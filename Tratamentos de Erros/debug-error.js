function validaArray (arr , num) {
try
{
    if (!arr && !num) throw new ReferenceError("Envie os Parâmetros");

    if (typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo object");

    if (typeof num !== 'number') throw new TypeError("Array precisa ser do tipo number");

    if (arr.length !== num) throw new RangeError ("Tamanho do Array Inválido");

    return arr;
} 
catch (e)
{
    if (e instanceof ReferenceError)
    {
        console.log("Este erro é um ReferenceError! ")
        console.log(e.message)
    }
    else if  (e instanceof TypeError)
    {
        console.log("Este erro é um TypeError! ")
        console.log(e.message)
    }
    else if  (e instanceof RangeError)
    {
        console.log("Este erro é um RangeError! ")
        console.log(e.message)
    }
    else 
    {
        console.log("Tipo de Erro não esperado: " + e) 
    }
}
}

/*/ReferenceError Array vazio
console.log(validaArray());

//TypeError precisa ser object
console.log(validaArray(5, 5));

//TypeError Array precisa ser numérico
console.log(validaArray([], "Olá"));

//RangeError não definido parameros no array
console.log(validaArray([], 5));
/*/


console.log(validaArray([ 1, 2, 3, 4, 5], 5));