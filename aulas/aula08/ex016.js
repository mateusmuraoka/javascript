let num = [5,8,2,9,3]


num.push(1)
/*for(let c =1; c < num.length ; c++){
    console.log(num[c])
}
*/
/*
for(let pos in num){
    console.log(num[pos])

}
*/
let pos =num.indexOf(8)
if(pos == -1){
    console.log(`O valor não foi encontrado.`)
}else{
    console.log(`O valor 8 está na posição ${pos}`)
 
}

num.sort()
console.log(`O vetor tem ${num.length} posições.`)
console.log(`O número na posição 0 é o ${num[0]}`)
