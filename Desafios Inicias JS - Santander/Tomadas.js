let line = gets().split(" ");

let a = parseInt(line[0])
let b = parseInt(line[1])
let c = parseInt(line[2])
let d = parseInt(line[3])

let tomada = a + b + c + d - 3

console.log(tomada)



 
/*/ segundo método com map e function

let [t1, t2, t3, t4] = gets().split(" ").map(Number)
function somaTomadas(t1, t2, t3, t4) {
  return t1 + t2 + t3 + t4 - 3;
}
console.log(somaTomadas(t1, t2, t3, t4))