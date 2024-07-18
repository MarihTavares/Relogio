const Horas = document.querySelector("#hr");
const Minutos = document.querySelector("#min");
const Segundos = document.querySelector("#sec");

const Titulo = document.querySelector("#titulo");

const Tela = document.querySelector("body");

// Manhã 05 - 12
// Tarde 13 - 18
// Noite 19 - 23
// Madrugada 01 - 04 

function Update(){

    const horaAtual = new Date();
    // console.log(horaAtual)
    let Hr = String(horaAtual.getHours()).padStart(2,"0");
    const Min = String(horaAtual.getMinutes()).padStart(2,"0");
    const Sec = String(horaAtual.getSeconds()).padStart(2,"0");

    Horas.textContent = Hr;
    Minutos.textContent = Min;
    Segundos.textContent = Sec;

    // console.log(Hr);

    const madrugada =  Hr >= 1 && Hr < 5 ? true : false
    const manha = Hr >= 5 && Hr < 12 ? true : false
    const tarde = Hr >= 12 && Hr < 19 ? true : false

    if (madrugada){
        Titulo.innerHTML = 'Madrugada'
        Tela.className = "madrugada"

    } else if (manha){
        Titulo.innerHTML = 'Manhã'
        Tela.className = "manha"
        
    } else if (tarde){
        Titulo.innerHTML = 'Tarde'
        Tela.className = "tarde"

    }else {
        Titulo.innerHTML = 'Noite'
        Tela.className = "noite"

    }

}

document.addEventListener("DOMContentLoaded", function(){

    Update();
    setInterval(Update, 1000);

});
