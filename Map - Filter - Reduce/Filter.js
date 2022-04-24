function filtaPares (arr){
    return arr.filter (calback);
}
function calback (item){
    return item % 2 === 1;
}
const meuArray = [1, 3 , 4, 9, 24, 29, 33, 44, 60];

console.log (filtaPares(meuArray));