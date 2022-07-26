function subistituiPares(array){
    for (let i = 0; i < array.length; i++){
        if (array[i] === 0){
            console.log(`Número na índice ${[i]} do array já é zero` )
        }
        else if (array[i] % 2 === 0){
            console.log(`Alterando ${array[i]} por 0`)
            array[i] = 0;
        }
    }
    return array;
}

let arr= [0, 1, 2, 4, 0, 80, 33, 23, 0];   
console.log(arr)
subistituiPares(arr);
console.log(`Novo Array alterado ${arr}`)

