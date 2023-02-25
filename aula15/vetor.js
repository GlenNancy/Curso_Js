let valores = [8,1,7,4,2,9,300]
valores.sort(function(a,b){return a-b})//essa function vai verificar se a [0] é maior que [1] se for eles vao trocar e retornar ao normal seguindo assim por toda a conta
console.log(valores)

/*
for(let zero = 0;zero < valores.length;zero++) {
    console.log(`A posição ${zero} tem o valor ${valores[zero]}`)
}
*/

for(let zero in valores) {
    console.log(`A posição ${zero} tem o valor ${valores[zero]}`)
}



let pos = valores.indexOf(4)
if(pos == -1){
    console.log('[ERRO] Valor não encontrado!')
} else{
console.log(`O Valor está na posição ${pos} `)
}