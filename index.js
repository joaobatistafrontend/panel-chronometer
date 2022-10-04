var seg = 60
var min = 3
var interval


function inicia(){
  interval = setInterval(relogio,10)
}
function pausa(){
    clearInterval(interval)
}
function parar(){
    clearInterval(interval)
    seg = 00
    min = 03
    document.getElementById('relogio').innerHTML = '03:00'

}

function relogio(){
    seg -= 1
    if (seg == 59){
        min = min -1
        seg = 59
    }
    if (seg == -1){
        seg = 60
    }
    if (min == -1){
        min = 00
        seg = 00
    }
    if (min == 00 && seg == 00){
        parar()
    }
    
    console.log(min)
    console.log(seg)
    document.getElementById('relogio').innerHTML = min + ':' + seg
}