/*let minagua = document.getElementById('valueagua').value
let minexercicio = document.getElementById('valueexercicio').value
document.getElementById("comecar").onclick = function() {
    console.log(minagua)
    console.log(minexercicio)
}*/

let entryagua = document.getElementById('agua')
let entryexercicio = document.getElementById('exercicio')
let botaoparar = document.getElementById('parar')
let botaocomecar = document.getElementById('comecar')
let tela1 = document.getElementById('entry')
let tela2 = document.getElementById('app')

let cdagua = document.getElementById('tempoagua')
let cdexercicio = document.getElementById('tempoexercicio')







document.getElementById("comecar").onclick = function() {
    if (document.getElementById('valueagua').value == '' || document.getElementById('valueexercicio').value == '') {
        alert('Insira o tempo ⏳⏰⌚')
    }

    else {
        tela1.style.display = 'none';
        tela2.style.display = 'flex';

        let minagua = document.getElementById('valueagua').value
        let minexercicio = document.getElementById('valueexercicio').value

        let timeagua = minagua * 60
        let timeexercicio = minexercicio * 60

        console.log(minagua)
        console.log(minexercicio)

        function atualizar() {
            let minutosagua = Math.floor(timeagua/60)
            let minutosexercicio = Math.floor(timeexercicio/60)
            let segundosagua = timeagua % 60
            let segundosexercicio = timeagua % 60
    
            cdagua.innerHTML = `${minutosagua}:${segundosagua}`
            timeagua--;
            console.log(timeagua)
            
            cdexercicio.innerHTML = `${minutosexercicio}:${segundosexercicio}`
            timeexercicio--;
            console.log(timeexercicio)
            
        }

        setInterval(atualizar,1000)
    }
}

document.getElementById("parar").onclick = function() {
    tela1.style.display = 'flex';
    tela2.style.display = 'none';
    location.reload()
}