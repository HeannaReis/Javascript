
// Solução 1
function verificaPalindromo(string){
if(!string) return "Defina uma Palavra"; 
return string.split("").reverse().join("") === string;

}
console.log(verificaPalindromo("arara"));


//Solução 2 
function verificaPalindromo2 (string){
    if (!string) return "Defina uma Palavra"

    for (let i = 0; i < string.length / 2; i++){
        if (string[i] !== string[string.length] -1 -i){
        return false;
    }
}

return true;
}
console.log(verificaPalindromo("ovo"))