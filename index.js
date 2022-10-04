var seg = 60
var min = 3
var interval
var pausado = document.getElementById('pausado')
function doisDig(digito){
    if(digito<10){
        return('0'+digito)
    }else{
        return(digito)
    }
}


function inicia(){
  interval = setInterval(relogio,10)
  if (pausado.style.display ==='block'){
    pausado.style.display ='none'
    paudado.style.cor="red"

  }else{
        pausado.style.display ==='block'
    }
}
// function divSucess(message){
//     return `<p style="backgroud-color: green">${message}</p>`
// }

function pausa(){
    clearInterval(interval)
    if (pausado.style.display ==='none'){
        pausado.style.display ='block'
    }else{
        pausado.style.display ==='none'
    }

    // if (p)
    // document.getElementById('message-success').innerHTML = divSucess('Tempo pausado com sucesso.')
    
}
function parar(){
    clearInterval(interval)
    seg = 00
    min = 3
    document.getElementById('relogio').innerHTML = '00:00'
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
    cor (document.getElementById('relogio').innerHTML = doisDig(min)+ ':' + doisDig(seg))
}
// function um(){(min == min)=> min++}

function um(){
    if (min == min){
        min ++
    } 
}
function  dois(){
    if (min == min){
        min = min +2
    } 
}
function  tres(){
    if (min == min){
        min = min +3
    }    
}
function  quatro(){
    if (min == min){
        min = min +4
    } 
}
function  cinco(){
    if (min == min){
        min = min +5
    } 
}

function cor(){
    if(min >=2){
        document.getElementById('relogio').style.color = "green";
    }
    if (min <1){
        document.getElementById('relogio').style.color = "red";
    }
}

function pausado(){
    hidden=false
}