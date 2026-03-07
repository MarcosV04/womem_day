function abrir(){
document.querySelector(".inicio").style.display="none"
document.getElementById("conteudo").style.display="block"

}

function contador(){
let inicio=new Date("2021-10-17")
let hoje=new Date()
let diff=hoje-inicio
let dias=Math.floor(diff/(1000*60*60*24))
document.getElementById("contador").innerText=
"Estamos juntos há "+dias+" dias ❤️"

}

setInterval(contador,1000)