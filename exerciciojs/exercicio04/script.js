function regras() {
    window.alert('1- O primeiro numero deve ser menor que o segundo; 2- O sistem ira começar a contagem do valor inicial ate o valor final pulando de tanto em tanto; 3- O Passo definira esse tanto e tanto')
}


function contar() {
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Preencha as lacunas!')
    } else{
        res.innerHTML = 'Contando.....'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        for(let c = i; c <= f; c += p){
            res.innerHTML += `${c} `
        }

    }
    
}