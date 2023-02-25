function verificar() {
    var data = new Date()
    var ano = data.getFullYear()//ano atual
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
} else {
    var msex = document.getElementById('masc')
    var fsex = document.getElementById('fem')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (msex.checked) {
        genero = 'Homem'
        if (idade >=0 && idade <= 2) {
            img.setAttribute('src', 'bebe.jpg')
        } else if (idade > 2 && idade < 10){
            img.setAttribute('src', 'criancahomem.jpg')
        } else if (idade >= 10 && idade <= 15){
            img.setAttribute('src', 'preadolescentehomem.jpg')
        } else if(idade > 15 && idade < 18){
            img.setAttribute('src', 'jovemhomem.jpg')
        } else if(idade >= 18 && idade < 55){
            img.setAttribute('src', 'adultohomem.jpg')
        } else if(idade >= 55 && idade < 150){
            img.setAttribute('src', 'veio.jpg')
        } else{
            window.alert('[ERRO] Verifique os dados e tente novamente!')
        }
    } else{
        genero = 'Mulher'
        if (idade >=0 && idade <= 2) {
            img.setAttribute('src', 'bebe.jpg')
        } else if (idade > 2 && idade < 10){
            img.setAttribute('src', 'criancamulher.jpg')
        } else if (idade >= 10 && idade <= 15){
            img.setAttribute('src', 'preadolescente.jpg')
        } else if(idade > 15 && idade < 18){
            img.setAttribute('src', 'jovemmulher.jpg')
        } else if(idade >= 18 && idade < 55){
            img.setAttribute('src', 'adultamulher.jpg')
        } else if(idade >= 55 && idade < 150){
            img.setAttribute('src', 'veia.jpg')
        } else{
            window.alert('[ERRO] Verifique os dados e tente novamente!')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
}

}