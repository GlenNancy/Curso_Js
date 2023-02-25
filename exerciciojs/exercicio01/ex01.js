function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 6 && hora < 12){
        img.src = 'manha.png'
        document.body.style.background = "rgb(206, 129, 50)"
    } else if (hora >= 12 && hora <= 18){
        img.src = 'tarde.png'
        document.body.style.background = "rgb(139, 146, 98)"
    }
    else{
        img.src = 'noite.png'
        document.body.style.background = "rgb(52, 52, 52)"
    }
}